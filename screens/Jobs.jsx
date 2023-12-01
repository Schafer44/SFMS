import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableHighlight,
} from "react-native";
import { db } from "./FirebaseLink";
import React, { useState, useEffect } from "react";
import { onSnapshot, doc, query, setDoc } from "firebase/firestore";
import Loading from "./Loading";
import Ionicons from "@expo/vector-icons/Ionicons";
import "@expo/match-media";
import { useMediaQuery } from "react-responsive";

export default function Jobs(props) {
  // State variables for Jobs, loading indicator, and media query for screen size
  const [Jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 600px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  // Function to delete a job
  const Delete = async (temp) => {
    // Check if the user has admin privileges
    if (props.Admin === true) {
      Alert.alert("Delete Job", "Are you sure you want to delete this job?", [
        {
          text: "Delete",
          style: "destructive",
          // Handle job deletion
          onPress: async () => {
            // Filter out the deleted job from the Jobs array
            const updatedJobs = Jobs.filter((job) => job !== temp);
            // Update the Jobs state with the updatedJobs array
            setJobs(updatedJobs);

            // Update the Firestore document with the updatedJobs array
            const docRef = doc(db, props.company, "master");
            setDoc(docRef, { Jobs: updatedJobs });

            // Delete the entire collection associated with the job
            await deleteCollection(temp);
          },
        },
        {
          text: "Cancel",
          style: "cancel",
          // If the user cancels, do nothing
          onPress: async () => {},
        },
      ]);
    }
  };

  // Function to delete an entire Firestore collection
  const deleteCollection = async (jobNum) => {
    db.collection(jobNum)
      .get()
      .then((querySnapshot) => {
        // Delete each document in the collection
        querySnapshot.docs.forEach((snapshot) => {
          snapshot.ref.delete();
        });
      });
  };

  // useEffect hook to subscribe to changes in the Firestore document
  useEffect(() => {
    // Subscribe to changes in the "master" document of the specified company
    const unsubscribe = onSnapshot(
      query(doc(db, props.company, "master")),
      (snapshot) => {
        // Set loading indicator to true
        setIsLoading(true);

        // Update the Jobs state with the Jobs array from the document
        setJobs(snapshot.data().Jobs);

        // Set loading indicator to false
        setIsLoading(false);
      }
    );

    // Cleanup function to unsubscribe from the snapshot listener
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.GlobalCont}>
      <View style={styles.JobCont}>
        {Jobs.map((job) => {
          if (
            job
              .toLowerCase()
              .split("_")[0]
              .includes(props.searchPhrase.toLowerCase())
          ) {
            job.user = props.user;
            return (
              <View style={styles.existingJob} key={job}>
                <TouchableHighlight
                  onPress={() => props.navigation("Job", { job })}
                  style={styles.existingJobBtn}
                >
                  <View style={styles.existingJobBtnView}>
                    <Ionicons
                      name="menu"
                      size={24}
                      color="white"
                      style={styles.existingJobBtnViewTextIcon}
                    />
                    <View
                      style={{
                        justifyContent: "center",
                      }}
                    >
                      <Text style={styles.Text}>
                        {job.split(props.company + "_")}
                      </Text>
                    </View>
                  </View>
                </TouchableHighlight>
                {props.visible ? (
                  <View style={styles.existingJob2} key={job + "2"}>
                    <TouchableHighlight
                      underlayColor="darkred"
                      onPress={() => Delete(job)}
                      style={styles.existingJob2}
                    >
                      <View
                        style={{
                          justifyContent: "center",
                        }}
                      >
                        <Text style={styles.Text}>X</Text>
                      </View>
                    </TouchableHighlight>
                  </View>
                ) : null}
              </View>
            );
          }
        })}
      </View>

      {isLoading ? <Loading /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  GlobalCont: {
    width: "100%",
    height: "100%",
  },
  existingJob: {
    width: "100%",
    height: 70,
    backgroundColor: "#272727",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
    marginBottom: 5,
    display: "flex",
    flexDirection: "row",
  },
  JobCont: { height: "100%", flex: 10 },
  existingJob2: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
  },
  existingJobBtn: {
    flex: 10,
    width: "100%",
    height: 70,
    backgroundColor: "#272727",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
  },
  existingJobBtnView: {
    width: "100%",
    height: "100%",
    backgroundColor: "#272727",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
  },
  Text: {
    color: "white",
    fontSize: 16,
  },
  existingJobBtnViewTextIcon: {
    position: "absolute",
    left: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
  },
  Edit: {
    flexDirection: "row",
    height: 50,
    width: "95%",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
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
    textAlign: "center",
    textAlignVertical: "center",
  },
});
