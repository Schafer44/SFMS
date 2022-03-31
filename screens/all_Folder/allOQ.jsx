import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import React, { setState, useState, useEffect } from "react";

export default function AllOQ(props) {
  if (props.job != undefined) {
    return props.job.map((file) => {
      file.JobNum = props.jobNum;
      if (file.Type === "OQ")
        return (
          <View style={styles.container} key={file.baseId}>
            <View style={styles.existingJob} key={file.baseId}>
              <Button
                style={styles.existingJobBtn}
                onPress={() => props.navigation.navigate("Timesheet", { file })}
                title={file.baseId}
              ></Button>
            </View>
          </View>
        );
    });
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-end",
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
