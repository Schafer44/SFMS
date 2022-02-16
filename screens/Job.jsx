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
  return (
    <View style={styles.container}>
      <View style={styles.newJob}>
        <Text style={styles.Text}>New File</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  Text: {
    color: "white",
  },
  newJob: {
    width: "100%",
    height: 70,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});
