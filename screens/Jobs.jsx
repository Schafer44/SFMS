import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { db } from "./FirebaseLink";
import React, { setState, useState, useEffect } from "react";
export default function Jobs(props) {
  const [Jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
    var Jobs = [];
    const response = db.collection("PLEnerserv");
    const data = await response.get();
    Jobs = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      baseId: doc.id,
    }));
    data.docs.forEach((item) => {
      setJobs([...Jobs]);
    });
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  return Jobs.map((job) => {
    if (job.JobNum.toLowerCase().includes(props.searchPhrase.toLowerCase())) {
      return (
        <View style={styles.existingJob}>
          <Button
            style={styles.existingJobBtn}
            onPress={() => props.navigation("Job", { job })}
            title={job.JobNum}
          ></Button>
        </View>
      );
    }
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
