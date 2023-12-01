import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Alert,
} from "react-native";
import { db } from "./FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "./Loading";

export default class NewJSAFE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      jobNum: "",
      company: props.company,
      id: this.props.job.length,
      Type: "JSA",
      TypeExtra: "null",
      T1: [{ Table: {} }],
      T2: [{ Table: {} }],
      T3: [{ Table: {} }],
      T4: [{ Table: {} }],
      T5: [{ Table: {} }],
      T6: [{ Table: {} }],
      T7: [{ Table: {} }],
      T8: [{ Table: { Row0: ["", ""] } }],
      T9: [{ Line0: { Row0: [""] } }],
      T10: [{ Line0: { Row0: [""] } }],
      T11: [{ Line0: { Row0: ["", "", ""] } }],
      id: this.props.job.length,
      sig: null,
      hasBeenUpdated: "yes",
    };
  }
  render() {
    // Asynchronously retrieve data from AsyncStorage and update Firestore for JSA (Job Safety Analysis)
    const _retrieveData = async () => {
      try {
        // Attempt to retrieve data from AsyncStorage using the specified key
        const value = await AsyncStorage.getItem("@MySuperStore:JSA");

        // Check if retrieved data exists
        if (value !== null) {
          // Parse the retrieved JSON data
          const temp = JSON.parse(value);

          // Update component state with the retrieved data
          this.state.sig = temp.signature;
          this.state.T1 = temp.T1;
          this.state.T2 = temp.T2;
          this.state.T3 = temp.T3;
          this.state.T4 = temp.T4;
          this.state.T5 = temp.T5;
          this.state.T6 = temp.T6;
          this.state.T7 = temp.T7;
          this.state.T8 = temp.T8;
          this.state.T9 = temp.T9;
          this.state.T10 = temp.T10;
          this.state.T11 = temp.T11;
        }

        // Create a reference to a new document in the specified Firestore collection
        var Job = [];
        const ref = db.collection(this.props.jobNum).doc();

        // Use the reference to update Firestore with the retrieved data
        const ehehe = await db
          .collection(this.props.jobNum)
          .doc(ref._delegate._key.path.segments[1])
          .set({
            Type: "JSA",
            TypeExtra: "null",
            baseId: ref._delegate._key.path.segments[1],
            T1: this.state.T1,
            T2: this.state.T2,
            T3: this.state.T3,
            T4: this.state.T4,
            T5: this.state.T5,
            T6: this.state.T6,
            T7: this.state.T7,
            T8: this.state.T8,
            T9: this.state.T9,
            T10: this.state.T10,
            T11: this.state.T11,
            id: this.props.job.length,
            signature: this.state.sig,
          });
      } catch (error) {
        // Handle the case where no local save is found in AsyncStorage
        Alert.alert("No local save found");
      }
    };

    const DoBoth = async () => {
      await _retrieveData();
      //const Ref = await NewJSA();
    };
    const NewJSA = async () => {
      this.setState({
        isLoading: true,
      });
      var Job = [];
      const ref = db.collection(this.props.jobNum).doc();
      const ehehe = await db
        .collection(this.props.jobNum)
        .doc(ref._delegate._key.path.segments[1])
        .set({
          Type: "JSA",
          TypeExtra: "null",
          baseId: ref._delegate._key.path.segments[1],
          T1: this.state.T1,
          T2: this.state.T2,
          T3: this.state.T3,
          T4: this.state.T4,
          T5: this.state.T5,
          T6: this.state.T6,
          T7: this.state.T7,
          T8: this.state.T8,
          T9: this.state.T9,
          T10: this.state.T10,
          T11: this.state.T11,
          id: this.props.job.length,
          signature: this.state.sig,
        });
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
            style={styles.EditJobBtn}
            onPress={() => DoBoth()}
          >
            <Text style={{ color: "white" }}>Copy Offline JSA</Text>
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
  },
  Text: {
    color: "white",
  },
  newJob: {
    width: "95%",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1%",
    borderRadius: 10,
  },
  EditJobBtn: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
