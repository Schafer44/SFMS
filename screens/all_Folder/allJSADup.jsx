import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableHighlight,
} from "react-native";
import React, { setState, useState, useEffect } from "react";
import Duplicate from "../FileTypes/Dups/DupJSA";

export default function AllJSADup(props) {
  if (props.job != undefined) {
    return props.job.map((file) => {
      file.JobNum = props.jobNum;
      if (file.Type === "JSA") {
        if (file.TypeExtra === "Template") {
          return (
            <View key={1}>
              <View style={styles.container} key={file.baseId}>
                <View style={styles.existingJob} key={file.baseId}>
                  <TouchableHighlight
                    style={styles.existingJobBtn}
                    onPress={() => props.navigation.navigate("JSA", { file })}
                  >
                    <Text style={{ color: "white" }}>{file.TypeExtra}</Text>
                  </TouchableHighlight>
                </View>
              </View>
              <View key={2}>
                <Duplicate
                  jobNum={file.JobNum}
                  tempKey={file.baseId}
                  file={file}
                  job={props.job}
                />
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
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  Text: {
    color: "white",
  },
});
