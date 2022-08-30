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
      <View>
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
                            color="white"
                            style={styles.existingJobBtn}
                            onPress={() =>
                              props.navigation.navigate("JSA", { file })
                            }
                            title={file.T1[0].Table.Date}
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
                              title={"X"}
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
                          color="white"
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
                            title={"X"}
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
    width: "95%",
    backgroundColor: "white",
    alignItems: "center",
    marginLeft: "2.5%",
  },
  container: {
    width: "100%",
    flexDirection: "row",
  },
  existingJob: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#272727",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    flex: 20,
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
    flexDirection: "row",
    height: 70,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    flex: 1,
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
