import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { db } from "./FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default class Duplicate extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const DoBoth = async () => {
      const Ref = await NewTimesheet();
    };
    const NewTimesheet = async () => {
      var Job = [];
      const ref = db.collection(this.props.jobNum).doc();
      const ehehe = await db
        .collection(this.props.jobNum)
        .doc(ref._delegate._key.path.segments[1])
        .set({
          Comment: this.props.file.Comment,
          JobNum: this.props.file.JobNum,
          TimesheetHeader: this.props.file.TimesheetHeader,
          TimesheetLines: this.props.file.TimesheetLines,
          Type: this.props.file.Type,
          signature: this.props.file.signature,
          TypeExtra: "null",
          baseId: ref._delegate._key.path.segments[1],
        });
    };
    return (
      <View style={styles.container} key={1}>
        <View style={styles.newJob} key={1}>
          <Button
            style={styles.existingJobBtn}
            onPress={() => DoBoth()}
            title="Duplicate Templete"
          ></Button>
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
    height: 70,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  existingJobBtn: {
    color: "white",
  },
});
