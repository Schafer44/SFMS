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

import { getStorage } from "firebase/storage";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { db, firebaseApp } from "../FirebaseLink";

export default function AllOQ(props) {
  const [visible, setVisible] = useState(false);
  const Delete = async (temp) => {
    Alert.alert("Delete OQ?", "Are you sure you wish to delete this OQ?", [
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          await db.collection(props.jobNum).doc(temp.baseId).delete();
          const FBstorage = getStorage(
            firebaseApp,
            "gs://sfms-ce695.appspot.com"
          );
          const Ref = ref(FBstorage, temp.JobNum + "/" + temp.name);
          deleteObject(Ref);
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
          if (file.Type === "OQ")
            return (
              <View style={styles.container} key={file.baseId}>
                <View style={styles.existingJob} key={file.baseId}>
                  <Button
                    color="white"
                    style={styles.existingJobBtn}
                    onPress={() => props.navigation.navigate("OQ", { file })}
                    title={file.name}
                  ></Button>
                </View>
                {visible ? (
                  <View style={styles.existingJob2} key={file.baseId + "2"}>
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
            );
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
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    marginLeft: "2.5%",
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
    flex: 20,
    height: 70,
    backgroundColor: "#272727",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
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
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    flex: 1,
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
});
