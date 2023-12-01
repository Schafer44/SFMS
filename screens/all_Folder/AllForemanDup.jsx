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
import Duplicate from "../FileTypes/Dups/DupFR";

export default function AllForemanReportDup(props) {
  if (props.job != undefined) {
    return props.job.map((file) => {
      file.JobNum = props.jobNum;
      if (file.Type === "Foreman Report") {
        if (file.TypeExtra === "Template") {
          return (
            <View key={1} style={{ flex: 2 }}>
              <View style={styles.container} key={file.baseId}>
                <View style={styles.existingJob} key={file.baseId}>
                  <TouchableHighlight
                    style={styles.existingJobBtn}
                    onPress={() =>
                      props.navigation.navigate("Foreman Report", { file })
                    }
                  >
                    <Text style={{ color: "#272727" }}>{file.TypeExtra}</Text>
                  </TouchableHighlight>
                </View>
              </View>
              <Duplicate
                jobNum={file.JobNum}
                tempKey={file.baseId}
                file={file}
                job={props.job}
              />
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
    flex: 1,
    marginBottom: "1%",
  },
  existingJob: {
    width: "95%",
    height: "100%",
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10%",
  },
  fileTypeBtn: {
    width: "100%",
    height: "100%",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
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
