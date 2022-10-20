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

export default class NewForemanReportFE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobNum: "",
      company: props.company,
      Type: "Foreman Report",
      TypeExtra: null,
      Header: [{ Line0: {} }],
      T1: [{ Line0: {} }, { Line1: {} }],
      T2: [{ Line0: {} }],
      T3: [{ Line0: {} }],
      T4: [{ Line0: {} }],
      T5: [{ Line0: {} }],
      T6: [{ Line0: {} }, { Line1: {} }],
      T7: [{ Line0: {} }],
      id: this.props.job.length,
    };
  }

  render() {
    const _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem("@MySuperStore:FR");
        if (value !== null) {
          // We have data!!
          const temp = JSON.parse(value);
          console.log("temp", temp);
          this.state.Header = temp.Header;
          this.state.ClientSignature = temp.ClientSignature;
          this.state.ForemanSignature = temp.ForemanSignature;
          this.state.T1 = temp.T1;
          this.state.T2 = temp.T2;
          this.state.T3 = temp.T3;
          this.state.T4 = temp.T4;
          this.state.T5 = temp.T5;
          this.state.T6 = temp.T6;
          this.state.T7 = temp.T7;
        }
      } catch (error) {
        console.log("Error");
      }
    };
    const DoBoth = async () => {
      await _retrieveData();
      const Ref = await NewFR();
    };
    const NewFR = async () => {
      var Job = [];
      const ref = db.collection(this.props.jobNum).doc();
      console.log("state", this.state);
      const ehehe = await db
        .collection(this.props.jobNum)
        .doc(ref._delegate._key.path.segments[1])
        .set({
          Type: "Foreman Report",
          TypeExtra: "null",
          baseId: ref._delegate._key.path.segments[1],
          Header: this.state.Header,
          T1: this.state.T1,
          T2: this.state.T2,
          T3: this.state.T3,
          T4: this.state.T4,
          T5: this.state.T5,
          T6: this.state.T6,
          T7: this.state.T7,
          id: this.props.job.length,
          ForemanSignature: this.state.ForemanSignature,
          ClientSignature: this.state.ClientSignature,
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
              New Foreman Report From Offline File
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
    flexDirection: "row",
    height: 40,
    width: "95%",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    flex: 1,
    alignSelf: "flex-end",
    marginRight: "2.5%",
  },
  EditJobBtn: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
