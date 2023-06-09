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
  setDoc,
} from "firebase/firestore";
import Loading from "./Loading";
import Ionicons from "@expo/vector-icons/Ionicons";
import "@expo/match-media";
import { useMediaQuery } from "react-responsive";

export default function Jobs(props) {
  const [Jobs, setJobs] = useState([]);
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 600px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const Delete = async (temp) => {
    // here Need user baseID
    if (props.Admin === true) {
      Alert.alert("Delete Job", "Are you sure you want to delete this job?", [
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            const updatedJobs = Jobs.filter((job) => job !== temp);
            // Updating the Jobs state with the updatedJobs array
            setJobs(updatedJobs);

            const docRef = doc(db, props.company, "master");
            setDoc(docRef, { Jobs: updatedJobs });
            //await db.collection(props.company).doc(temp.baseid).delete();
            await deleteCollection(temp);
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
    }
    //await db.collection("PLEnerserv").doc(temp.baseid).delete();
    //await db.collection().delete();
  };
  const deleteCollection = async (jobNum) => {
    db.collection(jobNum)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((snapshot) => {
          snapshot.ref.delete();
        });
      });
  };
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(doc(db, props.company, "master")),
      (snapshot) => {
        setIsLoading(true);
        //const tempAry = snapshot.docs.map((doc) => doc.data());
        console.log(snapshot.data().Jobs);
        setJobs(snapshot.data().Jobs);
        console.log("2", Jobs);
        setIsLoading(false);
      }
    );
    return () => {
      unsubscribe();
    };
    //fetchJobs();
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
                {visible ? (
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
      <View style={styles.Edit} key={1}>
        <TouchableHighlight
          underlayColor="darkgreen"
          onPress={() => setVisible(!visible)}
          style={styles.EditJobBtn}
        >
          <View style={{ justifyContent: "center" }}>
            <Text style={styles.Text}>Edit</Text>
          </View>
        </TouchableHighlight>
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
    backgroundColor: "red",
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
