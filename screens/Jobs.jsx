import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { db } from "./FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import { onSnapshot, doc, collection } from "firebase/firestore";
export default function Jobs(props) {
  const [Jobs, setJobs] = useState([]);
  useEffect(() => {
    console.log("1", props.user);
    onSnapshot(collection(db, "PLEnerserv"), (snapshot) => {
      setJobs(snapshot.docs.map((doc) => doc.data()));
    });
    //fetchJobs();
  }, []);
  return Jobs.map((job) => {
    if (job.JobNum.toLowerCase().includes(props.searchPhrase.toLowerCase())) {
      job.user = props.user;
      return (
        <View style={styles.existingJob} key={job.JobNum}>
          <Button
            style={styles.existingJobBtn}
            onPress={() => props.navigation("Job", { job })}
            title={job.JobNum}
            key={job.JobNum}
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
