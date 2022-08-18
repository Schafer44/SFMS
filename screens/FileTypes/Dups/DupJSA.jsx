import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default class DupJSA extends React.Component {
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
          T1: this.props.file.T1,
          T2: this.props.file.T2,
          T3: this.props.file.T3,
          T4: this.props.file.T4,
          T5: this.props.file.T5,
          T6: this.props.file.T6,
          T7: this.props.file.T7,
          T8: this.props.file.T8,
          T9: this.props.file.T9,
          T10: this.props.file.T10,
          T11: this.props.file.T11,
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
  existingJobBtn: {
    color: "white",
  },
});
