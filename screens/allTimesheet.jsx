import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import React, { setState, useState, useEffect } from "react";

export default function AllTimesheet(props) {
  console.log("dshdjdsfsdfsdfsdfdsf", props.job);
  if (props.job != undefined) {
    console.log("1", props);
    return props.job.map((file) => {
      file.JobNum = props.jobNum;
      //console.log(props);
      //console.log("f", file);
      if (file.Type === "Timesheet")
        return (
          <View style={styles.existingJob} key={file.baseId}>
            <Button
              style={styles.existingJobBtn}
              onPress={() => props.navigation.navigate("Timesheet", { file })}
              title={file.baseId}
            ></Button>
          </View>
        );
    });
  } else {
    console.log("fd");
    return null;
  }
}

const styles = StyleSheet.create({
  bodyScroll: {
    width: "100%",
    flexDirection: "row",
    flexGrow: 1,
  },
  body: {
    width: "100%",
    height: 100,
    flexDirection: "row",
  },

  bGridSmall: {
    height: "100%",
    flex: 2,
    backgroundColor: "white",
    borderColor: "#d4d4d4",
    borderWidth: 1,
  },
  bGridMedium: {
    height: "100%",
    flex: 4,
    backgroundColor: "black",
    borderColor: "#d4d4d4",
    borderWidth: 1,
  },
  bGridLarge: {
    height: "100%",
    flex: 8,
    backgroundColor: "white",
    borderColor: "#d4d4d4",
    borderWidth: 1,
  },
  bGridColumns: {
    height: "100%",
    flex: 1,
    backgroundColor: "white",
  },
  bGridColumnsss: {
    height: "100%",
    flex: 4,
    backgroundColor: "white",
  },
  Text: {
    color: "black",
  },
  textInputTest: {
    fontSize: 15,
    padding: 5,
    width: "100%",
    height: "100%",
    color: "black",
  },
});
