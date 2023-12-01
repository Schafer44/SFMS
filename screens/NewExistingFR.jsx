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

export default class NewForemanReportFE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      jobNum: "",
      company: props.company,
      Type: "Foreman Report",
      TypeExtra: "null",
      Header: [{ Line0: {} }],
      T1: [{ Line0: {} }, { Line1: {} }],
      T2: [{ Line0: {} }],
      T3: [{ Line0: {} }],
      T4: [{ Line0: {} }],
      T5: [{ Line0: {} }],
      T6: [{ Line0: {} }, { Line1: {} }],
      T7: [{ Line0: {} }],
      id: this.props.job.length,
      hasBeenUpdated: "yes",
    };
  }

  render() {
    const _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem("@MySuperStore:FR");
        if (value !== null) {
          // We have data!!
          const temp = JSON.parse(value);
          this.state.Header = temp.Header;
          this.state.ClientSignature = temp.ClientSignature;
          this.state.ForemanSignature = temp.ForemanSignature;
          this.state.T1 = temp.T1;
          this.state.T2 = temp.T2;
          this.state.T3 = temp.T3;
          this.state.T4 = temp.T4;
          this.state.T5 = temp.T5;
          this.state.T6 = temp.T6;
          this.state.T7 = temp.T7;
        }
        var Job = [];
        const ref = db.collection(this.props.jobNum).doc();

        const ehehe = await db
          .collection(this.props.jobNum)
          .doc(ref._delegate._key.path.segments[1])
          .set({
            Type: "Foreman Report",
            TypeExtra: "null",
            baseId: ref._delegate._key.path.segments[1],
            Header: this.state.Header,
            T1: this.state.T1,
            T2: this.state.T2,
            T3: this.state.T3,
            T4: this.state.T4,
            T5: this.state.T5,
            T6: this.state.T6,
            T7: this.state.T7,
            id: this.props.job.length,
            ForemanSignature: this.state.ForemanSignature,
            ClientSignature: this.state.ClientSignature,
          });
      } catch (error) {
        Alert.alert("No local save found");
      }
    };
    const DoBoth = async () => {
      await _retrieveData();
      //const Ref = await NewFR();
    };
    const NewFR = async () => {
      this.setState({
        isLoading: true,
      });
      var Job = [];
      const ref = db.collection(this.props.jobNum).doc();

      const ehehe = await db
        .collection(this.props.jobNum)
        .doc(ref._delegate._key.path.segments[1])
        .set({
          Type: "Foreman Report",
          TypeExtra: "null",
          baseId: ref._delegate._key.path.segments[1],
          Header: this.state.Header,
          T1: this.state.T1,
          T2: this.state.T2,
          T3: this.state.T3,
          T4: this.state.T4,
          T5: this.state.T5,
          T6: this.state.T6,
          T7: this.state.T7,
          id: this.props.job.length,
          ForemanSignature: this.state.ForemanSignature,
          ClientSignature: this.state.ClientSignature,
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
        {this.state.isLoading ? <Loading /> : null}
        <View style={styles.newJob} key={1}>
          <TouchableHighlight
            activeOpacity={0.99}
            underlayColor="darkgreen"
            style={styles.EditJobBtn}
            onPress={() => DoBoth()}
          >
            <Text
              style={{
                color: "white",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                padding: "1%",
              }}
            >
              Copy Offline Foreman Report
            </Text>
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
    minHeight: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
