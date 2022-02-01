import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { db } from "./FirebaseLink";
import React, { setState, useState, useEffect } from "react";
export default function Jobs() {
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
  console.log("de", Jobs);
  return Jobs.map((job) => {
    return (
      <View style={styles.existingJob}>
        <Text style={styles.Text}>{job.JSANum}</Text>
      </View>
    );
  });

  /*<View style={styles.container}>
      <View style={styles.search}>
        <Text style={styles.searchText}>Search</Text>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 001</Text>
        </View>
      </ScrollView>
    </View>*/
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "white",
  },
  search: {
    width: "95%",
    height: 70,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 4,
    borderRadius: 20,
    margin: "2.5%",
  },
  existingJob: {
    width: "100%",
    height: 70,
    backgroundColor: "#272727",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  Text: {
    color: "white",
  },
});
