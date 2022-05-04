import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import React, { setState, useState, useEffect } from "react";
import { db } from "../FirebaseLink";

export default function AllTimesheet(props) {
  const Delete = async (temp) => {
    const ehehe = await db.collection(props.jobNum).doc(temp.baseId).delete();
  };
  if (props.job != undefined) {
    return props.job.map((file) => {
      file.JobNum = props.jobNum;
      file.user = props.user;
      if (file.Type === "Timesheet") {
        if (file.TypeExtra !== "Templete") {
          if (file.TimesheetHeader.Date !== "") {
            return (
              <View style={styles.gc} key={file.baseId}>
                <View style={styles.container} key={file.baseId}>
                  <View style={styles.existingJob} key={file.baseId}>
                    <Button
                      style={styles.existingJobBtn}
                      onPress={() =>
                        props.navigation.navigate("Timesheet", { file })
                      }
                      title={file.TimesheetHeader.Date}
                    ></Button>
                  </View>
                  <View style={styles.existingJob2} key={file.baseId + "2"}>
                    <Button
                      style={styles.existingJobBtn}
                      onPress={() => Delete(file)}
                      title={"X"}
                      color="white"
                    ></Button>
                  </View>
                </View>
              </View>
            );
          } else {
            return (
              <View style={styles.gc} key={file.baseId}>
                <View style={styles.container} key={file.baseId}>
                  <View style={styles.existingJob} key={file.baseId}>
                    <Button
                      style={styles.existingJobBtn}
                      onPress={() =>
                        props.navigation.navigate("Timesheet", { file })
                      }
                      title={"New Sheet"}
                    ></Button>
                  </View>
                  <View style={styles.existingJob2} key={file.baseId + "2"}>
                    <Button
                      style={styles.existingJobBtn}
                      onPress={() => console.log("1")}
                      title={"X"}
                      color="white"
                    ></Button>
                  </View>
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
  gc: {
    width: "95%",
    backgroundColor: "white",
    alignItems: "center",
    marginLeft: "2.5%",
  },
  container: {
    width: "100%",
    flexDirection: "row",
  },
  existingJob: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#272727",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    flex: 20,
    paddingLeft: "5%",
  },
  existingJob2: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    flex: 1,
  },
  Del: {
    backgroundColor: "red",
    flex: 1,
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
