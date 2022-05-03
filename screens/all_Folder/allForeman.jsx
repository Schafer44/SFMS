import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import React, { setState, useState, useEffect } from "react";

export default function AllForeman(props) {
  if (props.job != undefined) {
    return props.job.map((file) => {
      file.JobNum = props.jobNum;
      file.user = props.user;
      if (file.Type === "Foreman Report") {
        if (file.TypeExtra !== "Templete") {
          if (file.Header[0].Line0.Date !== undefined) {
            return (
              <View style={styles.container} key={file.baseId}>
                <View style={styles.existingJob} key={file.baseId}>
                  <Button
                    style={styles.existingJobBtn}
                    onPress={() =>
                      props.navigation.navigate("Foreman Report", { file })
                    }
                    title={file.Header[0].Line0.Date}
                  ></Button>
                </View>
              </View>
            );
          } else {
            return (
              <View style={styles.container} key={file.baseId}>
                <View style={styles.existingJob} key={file.baseId}>
                  <Button
                    style={styles.existingJobBtn}
                    onPress={() =>
                      props.navigation.navigate("Foreman Report", { file })
                    }
                    title={"New Report"}
                  ></Button>
                </View>
              </View>
            );
          }
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
