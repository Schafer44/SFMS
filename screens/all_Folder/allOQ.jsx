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
import React, { setState, useState, useEffect } from "react";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import { getStorage } from "firebase/storage";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { db, firebaseApp } from "../FirebaseLink";

export default function AllOQ(props) {
  // State variable to manage the color of a button
  const [BtnColor, setBtnColor] = useState("black");

  // Async function to delete an OQ (Operational Qualification)
  const Delete = async (temp) => {
    // Display an alert to confirm the deletion
    Alert.alert("Delete OQ?", "Are you sure you wish to delete this OQ?", [
      {
        // If the user chooses to delete
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          // Delete the OQ document from the Firestore collection
          await db.collection(props.jobNum).doc(temp.baseId).delete();

          // Access Firebase Storage and create a reference to the OQ file
          const FBstorage = getStorage(
            firebaseApp,
            "gs://sfms-ce695.appspot.com"
          );
          const Ref = ref(FBstorage, temp.JobNum + "/" + temp.name);

          // Delete the OQ file from Firebase Storage
          deleteObject(Ref);
        },
      },
      {
        // If the user cancels the deletion
        text: "Cancel",
        style: "cancel",
        onPress: async () => {},
      },
    ]);
    // Note: The actual deletion (e.g., 'await db.collection(props.jobNum).doc(temp.baseId).delete();') is commented out.
  };

  if (props.job != undefined) {
    return (
      <View
        style={
          props.isBigScreen
            ? [
                styles.Cont,
                {
                  marginRight: "25%",
                },
              ]
            : [
                styles.Cont,
                {
                  marginRight: "0%",
                },
              ]
        }
        key={1}
      >
        <View style={styles.globalFiles} key={2}>
          {props.job.map((file) => {
            file.JobNum = props.jobNum;
            if (file.Type === "OQ")
              return (
                <View style={styles.gc} key={file.baseId}>
                  <View style={styles.container} key={file.baseId}>
                    <View style={styles.existingJob} key={file.baseId}>
                      <TouchableHighlight
                        underlayColor="#272727"
                        onPressIn={() => setBtnColor("lightgrey")}
                        onPressOut={() => setBtnColor("black")}
                        style={styles.existingJobBtn}
                        onPress={() =>
                          props.navigation.navigate("OQ", { file })
                        }
                      >
                        <Text style={{ color: BtnColor }}>{file.name}</Text>
                      </TouchableHighlight>
                    </View>
                    {
                      props.visible ? (
                        <TouchableHighlight
                          onPress={() => Delete(file)}
                          style={styles.existingJob2}
                          key={file.baseId + "2"}
                        >
                          <Text style={styles.DeleteBtn} color="white">
                            -
                          </Text>
                        </TouchableHighlight>
                      ) : null //View>
                    }
                  </View>
                </View>
              );
          })}
        </View>
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  gc: {
    alignItems: "center",
    margin: "1.665%",
    aspectRatio: 1 / 1,
    flexBasis: "30%",
  },
  Cont: {
    flexDirection: "column",
    marginRight: "20%",
  },
  globalFiles: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
  },
  Edit: {
    flexDirection: "row",
    height: 40,
    width: "95%",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    flex: 1,
    alignSelf: "flex-end",
    marginRight: "2.5%",
  },
  existingJob: {
    flexDirection: "row",
    height: "100%",
    aspectRatio: 1 / 1,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    flex: 20,
    borderRadius: windowWidth * 0.02,
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

  existingJob2: {
    position: "absolute",
    flexDirection: "row",
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    flex: 1,
    width: windowWidth * 0.06,
    height: windowWidth * 0.06,
    borderRadius: (windowWidth * 0.2) / 2,
    right: 0,
  },
  btn: {
    height: 100,
    width: 100,
  },
  existingJobBtn: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
    borderRadius: windowWidth * 0.02,
  },
  Text: {
    color: "white",
  },

  EditJobBtn: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  DeleteBtn: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
