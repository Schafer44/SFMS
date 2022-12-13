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

export default function AllForeman(props) {
  const [visible, setVisible] = useState(false);
  const [BtnColor, setBtnColor] = useState("black");
  const Delete = async (temp) => {
    Alert.alert(
      "Delete Report?",
      "Are you sure you wish to delete this Foreman Report?",
      [
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            await db.collection(props.jobNum).doc(temp.baseId).delete();
          },
        },
        {
          text: "Cancel",
          style: "cancel",
          // If the user confirmed, then we dispatch the action we blocked earlier
          // This will continue the action that had triggered the removal of the screen
          onPress: async () => {},
        },
      ]
    );
    //const ehehe = await db.collection(props.jobNum).doc(temp.baseId).delete();
  };
  if (props.job != undefined) {
    return (
      <View style={styles.Cont} key={1}>
        <View style={styles.globalFiles} key={2}>
          {props.job.map((file) => {
            file.JobNum = props.jobNum;
            file.user = props.user;
            if (file.Type === "Foreman Report") {
              if (file.TypeExtra !== "Template") {
                if (
                  file.Header[0].Line0.Date !== undefined &&
                  file.Header[0].Line0.Date !== null &&
                  file.Header[0].Line0.Date !== "" &&
                  file.hasBeenUpdated === "yes"
                ) {
                  if (
                    (
                      file.Header[0].Line0.Date.split(" ")[1] +
                      " " +
                      file.Header[0].Line0.Date.split(" ")[2] +
                      " " +
                      file.Header[0].Line0.Date.split(" ")[3]
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
                                props.navigation.navigate("Foreman Report", {
                                  file,
                                })
                              }
                            >
                              <Text style={{ color: BtnColor }}>
                                {file.Header[0].Line0.Date.split(" ")[1] +
                                  " " +
                                  file.Header[0].Line0.Date.split(" ")[2] +
                                  " " +
                                  file.Header[0].Line0.Date.split(" ")[3]}
                              </Text>
                            </TouchableHighlight>
                          </View>
                          {visible ? (
                            <View
                              style={styles.existingJob2}
                              key={file.baseId + "2"}
                            >
                              <Button
                                style={styles.existingJobBtn}
                                onPress={() => Delete(file)}
                                title={"-"}
                                color="white"
                              ></Button>
                            </View>
                          ) : (
                            <View></View>
                          )}
                        </View>
                      </View>
                    );
                  } else {
                    <View></View>;
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
                              props.navigation.navigate("Foreman Report", {
                                file,
                              })
                            }
                          >
                            <Text style={{ color: BtnColor }}>
                              {file.hasBeenUpdated === "dup"
                                ? "Duplicate"
                                : "New Report"}
                            </Text>
                          </TouchableHighlight>
                        </View>
                        {visible ? (
                          <View
                            style={styles.existingJob2}
                            key={file.baseId + "2"}
                          >
                            <Button
                              style={styles.existingJobBtn}
                              onPress={() => Delete(file)}
                              title={"-"}
                              color="white"
                            ></Button>
                          </View>
                        ) : (
                          <View></View>
                        )}
                      </View>
                    </View>
                  );
                }
              }
            }
          })}
        </View>
        <View style={styles.Edit} key={1}>
          <TouchableHighlight
            activeOpacity={0.99}
            underlayColor="darkgreen"
            style={styles.EditJobBtn}
            onPress={() => setVisible(!visible)}
          >
            <Text style={{ color: "white" }}>Toggle Deletion</Text>
          </TouchableHighlight>
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
  EditJobBtn: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
