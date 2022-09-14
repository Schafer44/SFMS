import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Alert,
} from "react-native";
import React, { setState, useState, useEffect } from "react";
import { db } from "../FirebaseLink";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function AllJSA(props) {
  const [visible, setVisible] = useState(false);
  const Delete = async (temp) => {
    Alert.alert("Delete JSA?", "Are you sure you wish to delete this JSA?", [
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
    ]);
    //const ehehe = await db.collection(props.jobNum).doc(temp.baseId).delete();
  };
  if (props.job != undefined) {
    return (
      <View style={styles.Cont} key={1}>
        <View style={styles.globalFiles} key={2}>
          {props.job.map((file) => {
            file.JobNum = props.jobNum;
            file.user = props.user;
            if (file.Type === "JSA") {
              if (file.TypeExtra !== "Templete") {
                if (file.T1[0].Table.Date !== undefined) {
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
                            <Button
                              color="black"
                              style={styles.existingJobBtn}
                              onPress={() =>
                                props.navigation.navigate("JSA", { file })
                              }
                              title={
                                file.T1[0].Table.Date.split(" ")[1] +
                                " " +
                                file.T1[0].Table.Date.split(" ")[2] +
                                " " +
                                file.T1[0].Table.Date.split(" ")[3]
                              }
                            ></Button>
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
                          <Button
                            color="black"
                            style={styles.existingJobBtn}
                            onPress={() =>
                              props.navigation.navigate("JSA", { file })
                            }
                            title={"New JSA"}
                          ></Button>
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
          <Button
            style={styles.existingJobBtn2}
            onPress={() => setVisible(!visible)}
            title={"Toggle Deletion"}
            color="white"
          ></Button>
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
    width: "100%",
    height: 70,
    backgroundColor: "white",
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
});
