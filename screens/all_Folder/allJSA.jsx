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
import { db } from "../FirebaseLink";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function AllJSA(props) {
  // State variable to manage the color of a button
  const [BtnColor, setBtnColor] = useState("black");

  // Async function to delete a JSA (Job Safety Analysis)
  const Delete = async (temp) => {
    // Display an alert to confirm the deletion
    Alert.alert("Delete JSA?", "Are you sure you wish to delete this JSA?", [
      {
        // If the user chooses to delete
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          // Delete the JSA from the Firestore collection
          await db.collection(props.jobNum).doc(temp.baseId).delete();
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
            file.user = props.user;
            if (file.Type === "JSA") {
              if (file.TypeExtra !== "Template") {
                if (
                  file.T1[0].Table.Date !== undefined &&
                  file.hasBeenUpdated === "yes"
                ) {
                  if (
                    (
                      file.T1[0].Table.Date.split(" ")[1] +
                      " " +
                      file.T1[0].Table.Date.split(" ")[2] +
                      " " +
                      file.T1[0].Table.Date.split(" ")[3]
                    )
                      .toLowerCase()
                      .includes(props.searchPhrase.toLowerCase())
                  ) {
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
                                props.navigation.navigate("JSA", { file })
                              }
                            >
                              <Text style={{ color: BtnColor }}>
                                {file.T1[0].Table.Date.split(" ")[1] +
                                  " " +
                                  file.T1[0].Table.Date.split(" ")[2] +
                                  " " +
                                  file.T1[0].Table.Date.split(" ")[3]}
                              </Text>
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
                  } else {
                    null; //View>;
                  }
                } else {
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
                              props.navigation.navigate("JSA", { file })
                            }
                          >
                            <Text style={{ color: BtnColor }}>
                              {file.hasBeenUpdated === "dup"
                                ? "Duplicate"
                                : "New JSA"}
                            </Text>
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
                }
              }
            }
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
    flexDirection: "row",
  },
  existingJob: {
    flexDirection: "row",
    height: 70,
    aspectRatio: 1 / 1,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    flex: 20,
    borderRadius: windowWidth * 0.02,
  },

  existingJobBtn2: {
    width: "100%",
    height: 40,
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
  Del: {
    backgroundColor: "red",
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
  DeleteBtn: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
