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

export default class NewJSAFE extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const [signature, setSign] = useState(null);
    const [T1, setT1] = useState([]);
    const [T2, setT2] = useState([]);
    const [T3, setT3] = useState([]);
    const [T4, setT4] = useState([]);
    const [T5, setT5] = useState([]);
    const [T6, setT6] = useState([]);
    const [T7, setT7] = useState([]);
    const [T8, setT8] = useState([]);
    const [T9, setT9] = useState([]);
    const [T10, setT10] = useState([]);
    const [T11, setT11] = useState([]);
    const _retrieveData = async () => {
      console.log("1");
      try {
        const value = await AsyncStorage.getItem("@MySuperStore:JSA");
        if (value !== null) {
          // We have data!!
          const temp = JSON.parse(value);
          console.log("temp", temp);
          setSign(temp.signature);
          setT1(temp.T1);
          setT2(temp.T2);
          setT3(temp.T3);
          setT4(temp.T4);
          setT5(temp.T5);
          setT6(temp.T6);
          setT7(temp.T7);
          setT8(temp.T8);
          setT9(temp.T9);
          setT10(temp.T10);
          setT11(temp.T11);
        }
      } catch (error) {
        console.log("Error");
      }
    };
    const DoBoth = async () => {
      const Ref = await NewJSA();
    };
    const NewJSA = async () => {
      var Job = [];
      const ref = db.collection(this.props.jobNum).doc();
      const ehehe = await db
        .collection(this.props.jobNum)
        .doc(ref._delegate._key.path.segments[1])
        .set({
          Type: "JSA",
          TypeExtra: "null",
          baseId: ref._delegate._key.path.segments[1],
          T1: T1,
          T2: T2,
          T3: T3,
          T4: T4,
          T5: T5,
          T6: T6,
          T7: T7,
          T8: T8,
          T9: T9,
          T10: T10,
          T11: T11,
          id: this.props.job.length,
          signature: signature,
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
