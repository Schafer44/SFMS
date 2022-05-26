import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Alert,
} from "react-native";
import { db } from "./FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import { onSnapshot, doc, collection } from "firebase/firestore";
export default function Jobs(props) {
  const [Jobs, setJobs] = useState([]);
  const [visible, setVisible] = useState(false);
  const Delete = async (temp) => {
    Alert.alert("Delete Job", "Are you sure you want to delete this job?", [
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          await db.collection("PLEnerserv").doc(temp.baseid).delete();
        },
      },
      {
        text: "Cancel",
        style: "cancel",
        // If the user confirmed, then we dispatch the action we blocked earlier
        // This will continue the action that had triggered the removal of the screen
        onPress: async () => {},
      },
    ]);
    //await db.collection("PLEnerserv").doc(temp.baseid).delete();
    //await db.collection().delete();
  };
  useEffect(() => {
    onSnapshot(collection(db, "PLEnerserv"), (snapshot) => {
      setJobs(snapshot.docs.map((doc) => doc.data()));
    });
    //fetchJobs();
  }, []);

  return (
    <View>
      {Jobs.map((job) => {
        if (
          job.JobNum.toLowerCase().includes(props.searchPhrase.toLowerCase())
        ) {
          job.user = props.user;
          return (
            <View style={styles.existingJob} key={job.JobNum}>
              <Button
                style={styles.existingJobBtn}
                onPress={() => props.navigation("Job", { job })}
                title={job.JobNum}
                key={job.JobNum}
                color="white"
              ></Button>
              {visible ? (
                <View style={styles.existingJob2} key={job + "2"}>
                  <Button
                    style={styles.existingJobBtn}
                    onPress={() => Delete(job)}
                    title={"X"}
                    color="white"
                  ></Button>
                </View>
              ) : (
                <View></View>
              )}
            </View>
          );
        }
      })}
      <View style={styles.Edit} key={1}>
        <Button
          style={styles.existingJobBtn}
          onPress={() => setVisible(!visible)}
          title={"Toggle Deletion"}
          color="white"
        ></Button>
      </View>
    </View>
  );
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
  Edit: {
    flexDirection: "row",
    height: 70,
    width: "95%",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    flex: 1,
    alignSelf: "flex-end",
    marginRight: "2.5%",
  },
});
