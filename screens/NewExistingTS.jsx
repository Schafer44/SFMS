import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from "react-native";
import { db } from "./FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class NewTimesheetFE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Type: "Timesheet",
      TypeExtra: "null",
      TimesheetLines: {},
      TimesheetHeader: {},
      id: this.props.job.length,
      Sig: null,
    };
  }
  render() {
    const _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem("@MySuperStore:TS");

        if (value !== null) {
          console.log(temp);
          // We have data!!
          const temp = JSON.parse(value);
          console.log(temp);
          this.state.TimesheetLines = temp.TimesheetLines;
          this.state.Header = temp.TimesheetHeader;
          this.state.Comment = temp.Comment;
          this.state.Sig = temp.signature;
        }
      } catch (error) {
        console.log(error);
      }
    };
    const DoBoth = async () => {
      await _retrieveData();
      const Ref = await NewTimesheet();
    };

    const NewTimesheet = async () => {
      console.log(this.state);
      var Job = [];
      const ref = db.collection(this.props.jobNum).doc();
      console.log();
      const ehehe = await db
        .collection(this.props.jobNum)
        .doc(ref._delegate._key.path.segments[1])
        .set({
          Type: "Timesheet",
          TypeExtra: null,
          baseId: ref._delegate._key.path.segments[1],
          TimesheetLines: this.state.TimesheetLines,
          TimesheetHeader: this.state.Header,
          id: this.props.job.length,
          signature: this.state.Sig,
          Comment: this.state.Comment,
        });
      /*const ehehe = await response.add({
        Type: "Timesheet",
        baseId: ref._delegate._key.path.segments[1],
      });*/
    };
    return (
      <View style={styles.container} key={1}>
        <View style={styles.newJob} key={1}>
          <TouchableHighlight
            activeOpacity={0.99}
            underlayColor="darkgreen"
            style={styles.EditJobBtn}
            onPress={() => DoBoth()}
          >
            <Text style={{ color: "white" }}>
              New Timesheet From Offline File
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  Text: {
    color: "white",
  },
  newJob: {
    width: "95%",
    height: 40,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  EditJobBtn: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
