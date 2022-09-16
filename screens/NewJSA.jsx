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

export default class NewJSA extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
          id: this.props.job.length,
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
            <Text style={{ color: "white" }}>New JSA</Text>
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
