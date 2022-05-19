import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { db, FBstorage, firebaseApp } from "./FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import * as DocumentPicker from "expo-document-picker";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import storage from "firebase/storage";

export default class NewOQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: "" };
  }
  render() {
    const FilePicker = async () => {
      const DocumentPicked = await DocumentPicker.getDocumentAsync();
      return DocumentPicked;
    };
    const DoBoth = async () => {
      const file = await FilePicker();
      const Ref = ref(FBstorage, file.name);
      //let temp = "gs://sfms-ce695.appspot.com/" + file.name;
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function (e) {
          reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", file.uri, true);
        xhr.send(null);
      });
      //console.log(file);
      ///*
      let temp3 = "";
      uploadBytes(Ref, blob).then(async (snapshot) => {
        const temp2 = getDownloadURL(snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);
          await NewOQ(downloadURL, file.name);
        });
      }); //*/
      console.log("fdffgdsfsdf", temp3);
      //await NewOQ(temp, file.name);
    };
    const NewOQ = async (temp, name) => {
      var Job = [];
      const ref = db.collection(this.props.jobNum).doc();
      const ehehe = await db
        .collection(this.props.jobNum)
        .doc(ref._delegate._key.path.segments[1])
        .set({
          Type: "OQ",
          baseId: ref._delegate._key.path.segments[1],
          URI: temp,
          name: name,
        });
      /*const ehehe = await response.add({
        Type: "Timesheet",
        baseId: ref._delegate._key.path.segments[1],
      });*/
    };
    return (
      <View style={styles.container} key={1}>
        <View style={styles.newJob} key={1}>
          <Button
            key={1}
            style={styles.existingJobBtn}
            onPress={() => DoBoth()}
            title="New OQ"
            color="white"
          ></Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  Text: {
    color: "white",
  },
  newJob: {
    width: "95%",
    height: 70,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
});
