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

export default class DupJSA extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
  }
  render() {
    const DoBoth = async () => {
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
          id: this.props.job.length,
          hasBeenUpdated: "dup",
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
