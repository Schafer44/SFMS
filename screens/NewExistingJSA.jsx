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
      TypeExtra: null,
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
    const _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem("@MySuperStore:JSA");
        if (value !== null) {
          // We have data!!
          const temp = JSON.parse(value);
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
      } catch (error) {
        console.log("Error");
      }
    };
    const DoBoth = async () => {
      await _retrieveData();
      const Ref = await NewJSA();
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
      /*const ehehe = await response.add({
        Type: "Timesheet",
        baseId: ref._delegate._key.path.segments[1],
      });*/
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
            <Text style={{ color: "white" }}>New JSA From Offline File</Text>
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
