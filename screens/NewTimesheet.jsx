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
import Loading from "./Loading";

export default class NewTimesheet extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
  }
  render() {
    const DoBoth = async () => {
      const Ref = await NewTimesheet();
    };
    const NewTimesheet = async () => {
      this.setState({
        isLoading: true,
      });
      var Job = [];
      const ref = db.collection(this.props.jobNum).doc();
      const ehehe = await db
        .collection(this.props.jobNum)
        .doc(ref._delegate._key.path.segments[1])
        .set({
          Type: "Timesheet",
          TypeExtra: "null",
          baseId: ref._delegate._key.path.segments[1],
          TimesheetLines: {},
          TimesheetHeader: {},
          id: this.props.job.length,
        });
      /*const ehehe = await response.add({
        Type: "Timesheet",
        baseId: ref._delegate._key.path.segments[1],
      });*/
      this.setState({
        isLoading: false,
      });
    };
    return (
      <View style={styles.container} key={1}>
        {this.state.isLoading ? <Loading /> : <View></View>}
        <View style={styles.newJob} key={1}>
          <TouchableHighlight
            activeOpacity={0.99}
            underlayColor="darkgreen"
            style={styles.EditJobBtn}
            onPress={() => DoBoth()}
          >
            <Text style={{ color: "white" }}>New Timesheet</Text>
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
