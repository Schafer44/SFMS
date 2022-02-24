import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { db } from "./FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default class NewTimesheet extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const DoBoth = async () => {
      const Ref = await NewTimesheet();
      this.props.navigation.navigate("Timesheet", { file: {} });
    };
    const NewTimesheet = async () => {
      var Job = [];
      const response = db.collection(this.props.jobNum);
      const ehehe = await response.add({ Type: "Timesheet" });
      return ehehe._delegate._key.path.segments[1];
    };
    return (
      <View style={styles.container} key={1}>
        <View style={styles.newJob} key={1}>
          <Button
            key={1}
            style={styles.existingJobBtn}
            onPress={() => DoBoth() /*props.navigation.navigate("Timesheet")*/}
            title="New Timesheet"
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
    width: "95%",
    height: 70,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
});
