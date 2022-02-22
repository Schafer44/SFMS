import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { db } from "./FirebaseLink";
import React, { setState, useState, useEffect } from "react";
export default function Job(props) {
  const [Job, setJobs] = useState([]);
  const fetchJobs = async () => {
    var Job = [];
    const response = db.collection(props.route.params.job.JobNum);
    const data = await response.get();
    Job = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      baseId: doc.id,
    }));
    console.log("hnn", Job);
    data.docs.forEach((item) => {
      setJobs([...Job]);
    });
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  console.log("please", props.route.params.job.JobNum);
  console.log("gfhgf", Job);
  console.log("props2", props);
  return Job.map((file) => {
    console.log("/n", file.baseId);
    file.JobNum = props.route.params.job.JobNum;
    return (
      <View style={styles.existingJob}>
        <Button
          style={styles.existingJobBtn}
          onPress={() => props.navigation.navigate("Timesheet", { file })}
          title={file.baseId}
        ></Button>
      </View>
    );
  });
}

const styles = StyleSheet.create({
  existingJob: {
    width: "100%",
    height: 70,
    backgroundColor: "#272727",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
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
