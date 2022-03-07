import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { db } from "./FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import { doc, getDoc, setDoc, addDoc, collection } from "firebase/firestore";
import { TextInput } from "react-native-paper";

export default class NewTimesheet extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      jobNum: "",
    };
  }

  render() {
    const DoBoth = async () => {
      const Ref = await NewTimesheet();
    };
    const NewTimesheet = async () => {
      var Job = [];
      const ref = db.collection("PLEnerserv").doc();
      const ehehe = await db
        .collection("PLEnerserv")
        .doc(ref._delegate._key.path.segments[1])
        .set({
          JobNum: this.state.jobNum,
        });
      db.collection(this.state.jobNum).add({ JobNum: this.state.jobNum });
    };
    const handleNum = (text) => {
      console.log(text);
      this.setState({ jobNum: text });
    };
    return (
      <View style={styles.container} key={1}>
        <View style={styles.newJob} key={1}>
          <TouchableOpacity
            key={1}
            underlayColor="#fff"
            style={styles.SubBtn}
            onPress={() => DoBoth()}
            title="New Job"
          ></TouchableOpacity>
          <View style={{ flex: 1 }}>
            <View style={styles.tempText} key={3}>
              <Text style={styles.textInputTest}>Submit</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <View style={styles.temp} key={3}>
              <TextInput
                style={styles.textInputTest}
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
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderRadius: 20,
  },
  newJob: {
    width: "95%",
    flex: 1,
    marginTop: 5,
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: "green",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderRadius: 20,
    flexDirection: "row",
  },
  temp: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
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
