import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  alert,
  Alert,
} from "react-native";
import { db } from "./FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import { doc, getDoc, setDoc, addDoc, collection } from "firebase/firestore";
import { TextInput } from "react-native-paper";
import Loading from "./Loading";

export default class NewTimesheet extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      jobNum: "",
      isLoading: false,
      company: props.company,
    };
  }

  render() {
    const DoBoth = async () => {
      const Ref = await NewTimesheet();
    };
    const NewTimesheet = async () => {
      var Job = [];
      if (this.state.jobNum === "") {
        Alert.alert("Please Insert Job Number");
      } else if (this.state.jobNum.includes("/")) {
        Alert.alert("Job number cannot include any /");
      } else if (this.state.jobNum.includes("%20")) {
        Alert.alert("Job number cannot include any %20");
      } else if (this.state.jobNum.includes("_")) {
        Alert.alert("Job number cannot include any _");
      } else {
        this.setState({
          isLoading: true,
        });
        let TempJSA = "";
        let TempFR = "";
        let TempTS = "";
        const ref = db.collection(this.state.company).doc();
        /*await db
          .collection(props.company)
          .doc(ref._delegate._key.path.segments[1])
          .set({
            JobNum:
              this.state.jobNum + "_" + props.company,
            baseid: ref._delegate._key.path.segments[1],
          });*/
        await db
          .collection(this.state.jobNum + "_" + this.state.company)
          .limit(1)
          .get()
          .then(async (snapshot) => {
            if (snapshot.size === 0) {
              await db
                .collection(this.state.jobNum + "_" + this.state.company)
                .add({})
                .then((docRef) => {
                  TempTS = docRef.id;
                  console.log("121", docRef.id);
                  setDoc(docRef, {
                    TimesheetHeader: {},
                    TimesheetLines: {},
                    Comment: "",
                    Type: "Timesheet",
                    baseId: docRef.id,
                    signature: "",
                    lastUpdatedBy: "Admin",
                    TypeExtra: "Template",
                    id: 0,
                  });
                });

              await db
                .collection(this.state.jobNum + "_" + this.state.company)
                .add({})
                .then((docRef) => {
                  TempFR = docRef.id;
                  console.log("121", docRef.id);
                  setDoc(docRef, {
                    Type: "Foreman Report",
                    TypeExtra: "Template",
                    ForemanSignature: "",
                    ClientSignature: "",
                    baseId: docRef.id,
                    Header: [{ Line0: {} }],
                    T1: [{ Line0: {} }, { Line1: {} }],
                    T2: [{ Line0: {} }],
                    T3: [{ Line0: {} }],
                    T4: [{ Line0: {} }],
                    T5: [{ Line0: {} }],
                    T6: [{ Line0: {} }, { Line1: {} }],
                    T7: [{ Line0: {} }],
                    id: 1,
                  });
                });

              await db
                .collection(this.state.jobNum + "_" + this.state.company)
                .add({})
                .then((docRef) => {
                  TempJSA = docRef.id;
                  console.log("121", docRef.id);
                  setDoc(docRef, {
                    Type: "JSA",
                    TypeExtra: "Template",
                    signature: "",
                    baseId: docRef.id,
                    T1: [{ Table: {} }],
                    T2: [{ Table: {} }],
                    T3: [{ Table: {} }],
                    T4: [{ Table: {} }],
                    T5: [{ Table: {} }],
                    T6: [{ Table: {} }],
                    T7: [{ Table: {} }],
                    T8: [{ Table: {} }],
                    T9: [{ Line0: {} }],
                    T10: [{ Line0: {} }],
                    T11: [{ Line0: {} }],
                    id: 2,
                  });
                });
              console.log("Test1", ref._delegate._key.path.segments[1]);
              await db
                .collection(this.state.company)
                .doc(ref._delegate._key.path.segments[1])
                .set({
                  JobNum: this.state.jobNum + "_" + this.state.company,
                  baseid: ref._delegate._key.path.segments[1],
                });
              this.setState({
                isLoading: false,
              });
            } else {
              Alert.alert("Job already exists");
            }
          });
      } /*else {
        const ref = db.collection(props.company).doc();
        const ehehe = await db
          .collection(props.company)
          .doc(ref._delegate._key.path.segments[1])
          .set({
            JobNum: this.state.jobNum,
            baseid: ref._delegate._key.path.segments[1],
          });
        db.collection(this.state.jobNum).add({});
      }*/
    };
    const handleNum = (text) => {
      this.setState({ jobNum: text });
    };
    return (
      <View style={styles.container} key={1}>
        {this.state.isLoading ? <Loading /> : <View></View>}
        <View style={styles.newJob} key={1}>
          <TouchableOpacity
            key={1}
            underlayColor="#fff"
            style={styles.SubBtn}
            onPress={() => DoBoth()}
            title="New Job"
            color="white"
          >
            <View style={styles.tempText} key={3}>
              <Text style={styles.textInputTest}>Submit</Text>
            </View>
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <View style={styles.temp} key={3}>
              <TextInput
                style={styles.textInputTest2}
                placeholder="Job Number"
                onChangeText={handleNum}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flex: 0.15,
  },
  Text: {
    color: "white",
  },
  textInputTest: {
    width: "100%",
    color: "white",
    fontSize: 20,
  },

  textInputTest2: {
    width: "100%",
    color: "white",
    flex: 1,
    justifyContent: "center",
  },
  newJob: {
    width: "95%",
    flex: 1,
    marginTop: 5,
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: "green",
    flexDirection: "row",
  },
  temp: {
    alignItems: "center",
    justifyContent: "center",

    flex: 0.75,
    width: "98%",
  },
  tempText: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "98%",
    marginLeft: "50%",
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    justifyContent: "center",
    flex: 1,
  },
  SubBtn: {
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
