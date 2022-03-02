import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import React, { setState, useState, useEffect } from "react";
import Duplicate from "./Duplicate";

export default function AllTimesheet(props) {
  if (props.job != undefined) {
    return props.job.map((file) => {
      file.JobNum = props.jobNum;
      if (file.Type === "Timesheet") {
        if (file.TypeExtra === "null") {
          return (
            <View style={styles.container} key={file.baseId}>
              <View style={styles.existingJob} key={file.baseId}>
                <Button
                  style={styles.existingJobBtn}
                  onPress={() =>
                    props.navigation.navigate("Timesheet", { file })
                  }
                  title={file.baseId}
                ></Button>
              </View>
            </View>
          );
        } else if (file.TypeExtra === "Templete") {
          console.log("2", file);
          return (
            <View>
              <Duplicate jobNum={file.JobNum} tempKey={2} file={file} />
              <View style={styles.container} key={file.baseId}>
                <View style={styles.existingJob} key={file.baseId}>
                  <Button
                    style={styles.existingJobBtn}
                    onPress={() =>
                      props.navigation.navigate("Timesheet", { file })
                    }
                    title={file.TypeExtra}
                  ></Button>
                </View>
              </View>
            </View>
          );
        }
      }
    });
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  existingJob: {
    width: "95%",
    height: 70,
    backgroundColor: "#272727",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  fileTypeBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    color: "white",
  },
  btn: {
    height: 100,
    width: 100,
  },
  existingJobBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "white",
  },
  Text: {
    color: "white",
  },
});
