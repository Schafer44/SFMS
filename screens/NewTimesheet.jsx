import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { db } from "./FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default class NewTimesheet extends React.Component {
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
          Type: "Timesheet",
          TypeExtra: "null",
          baseId: ref._delegate._key.path.segments[1],
          TimesheetLines: {},
          TimesheetHeader: { Date: "" },
        });
      /*const ehehe = await response.add({
        Type: "Timesheet",
        baseId: ref._delegate._key.path.segments[1],
      });*/
    };
    return (
      <View style={styles.container} key={1}>
        <View style={styles.newJob} key={1}>
          <Button
            key={1}
            style={styles.existingJobBtn}
            onPress={() => DoBoth() /*props.navigation.navigate("Timesheet")*/}
            title="New Timesheet"
            color="white"
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
});
