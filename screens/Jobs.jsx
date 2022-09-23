import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Alert,
  TouchableHighlight,
} from "react-native";
import { db } from "./FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import {
  onSnapshot,
  doc,
  collection,
  query,
  orderBy,
} from "firebase/firestore";
export default function Jobs(props) {
  const [Jobs, setJobs] = useState([]);
  const [visible, setVisible] = useState(false);
  const Delete = async (temp) => {
    Alert.alert("Delete Job", "Are you sure you want to delete this job?", [
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          await db.collection(props.company).doc(temp.baseid).delete();
          await deleteCollection(temp.JobNum);
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
  const deleteCollection = async (path) => {
    db.collection(path)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((snapshot) => {
          snapshot.ref.delete();
        });
      });
  };
  useEffect(() => {
    onSnapshot(
      query(collection(db, props.company), orderBy("JobNum")),
      (snapshot) => {
        setJobs(snapshot.docs.map((doc) => doc.data()));
      }
    );
    //fetchJobs();
  }, []);

  return (
    <View>
      {Jobs.map((job) => {
        if (
          job.JobNum.toLowerCase()
            .split("_")[0]
            .includes(props.searchPhrase.toLowerCase())
        ) {
          job.user = props.user;
          return (
            <View style={styles.existingJob} key={job.JobNum}>
              <TouchableHighlight
                onPress={() => props.navigation("Job", { job })}
                style={styles.existingJobBtn}
              >
                <Text style={styles.Text}>
                  {job.JobNum.split("_" + props.company)[0]}
                </Text>
              </TouchableHighlight>
              {visible ? (
                <View style={styles.existingJob2} key={job + "2"}>
                  <TouchableHighlight
                    underlayColor="darkred"
                    onPress={() => Delete(job)}
                    style={styles.existingJob2}
                  >
                    <Text style={styles.Text}>X</Text>
                  </TouchableHighlight>
                </View>
              ) : (
                <View></View>
              )}
            </View>
          );
        }
      })}
      <View style={styles.Edit} key={1}>
        <TouchableHighlight
          underlayColor="darkgreen"
          onPress={() => setVisible(!visible)}
          style={styles.EditJobBtn}
        >
          <Text style={styles.Text}>Toggle Deletion</Text>
        </TouchableHighlight>
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
    display: "flex",
    flexDirection: "row",
  },
  existingJob2: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  existingJobBtn: {
    flex: 10,
    width: "100%",
    height: 70,
    backgroundColor: "#272727",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
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
  EditJobBtn: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
