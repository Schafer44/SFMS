import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Loading from "../../Loading";

export default class Duplicate extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
  }
  // Render function for the component
  render() {
    // Async function to perform both NewTimesheet and set isLoading state
    const DoBoth = async () => {
      // Call the NewTimesheet function
      const Ref = await NewTimesheet();
    };

    // Async function to create a new timesheet and update Firestore
    const NewTimesheet = async () => {
      // Set isLoading state to true during the operation
      this.setState({
        isLoading: true,
      });

      // Create a new Firestore document for the timesheet
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
          FRsignature: this.props.file.FRsignature,
          CRsignature: this.props.file.CRsignature,
          Csignature: this.props.file.Csignature,
          TypeExtra: "null",
          baseId: ref._delegate._key.path.segments[1],
          id: this.props.job.length,
          hasBeenUpdated: "dup",
        });

      // Set isLoading state to false after the operation is completed
      this.setState({
        isLoading: false,
      });
    };

    return (
      <View style={styles.container} key={1}>
        {this.state.isLoading ? <Loading /> : null}
        <View style={styles.newJob} key={1}>
          <TouchableHighlight
            activeOpacity={0.99}
            underlayColor="darkgreen"
            style={styles.existingJobBtn}
            onPress={() => DoBoth()}
          >
            <Text style={{ color: "white" }}>Duplicate Template</Text>
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
    flex: 1,
    marginBottom: "1%",
  },
  Text: {
    color: "white",
  },
  newJob: {
    flexDirection: "row",
    height: "100%",
    width: "95%",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    alignSelf: "flex-end",
    marginRight: "2.5%",
    borderRadius: 10,
  },
  existingJobBtn: {
    color: "white",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
