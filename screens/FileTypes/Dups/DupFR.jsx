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

export default class DupFR extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
  }
  render() {
    // Async function to perform both NewFR and set isLoading state
    const DoBoth = async () => {
      // Call the NewFR function
      const Ref = await NewFR();
    };

    // Async function to create a new Field Report (FR) and update Firestore
    const NewFR = async () => {
      // Set isLoading state to true during the operation
      this.setState({
        isLoading: true,
      });

      // Create a new Firestore document for the Field Report (FR)
      var Job = [];
      const ref = db.collection(this.props.jobNum).doc();
      const ehehe = await db
        .collection(this.props.jobNum)
        .doc(ref._delegate._key.path.segments[1])
        .set({
          Header: this.props.file.Header,
          T1: this.props.file.T1,
          T2: this.props.file.T2,
          T3: this.props.file.T3,
          T4: this.props.file.T4,
          T5: this.props.file.T5,
          T6: this.props.file.T6,
          T7: this.props.file.T7,
          Type: this.props.file.Type,
          ForemanSignature: this.props.file.ForemanSignature,
          ClientSignature: this.props.file.ClientSignature,
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
