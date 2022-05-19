import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { db, FBstorage, firebaseApp } from "./FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import * as DocumentPicker from "expo-document-picker";
import { ref, uploadBytes } from "firebase/storage";
import storage from "firebase/storage";

export default class NewOQ extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const FilePicker = async () => {
      const DocumentPicked = await DocumentPicker.getDocumentAsync();
      return DocumentPicked;
    };
    const DoBoth = async () => {
      const file = await FilePicker();
      console.log(file);
      const Ref = ref(FBstorage, file.name);
      console.log(Ref);
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function (e) {
          console.log(e);
          reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", file.uri, true);
        xhr.send(null);
      });
      //console.log(file);
      ///*
      uploadBytes(Ref, blob).then((snapshot) => {
        console.log("Uploaded!");
      }); //*/
      //const Ref = await NewOQ();
    };
    const NewOQ = async () => {
      var Job = [];
      const ref = db.collection(this.props.jobNum).doc();
      const ehehe = await db
        .collection(this.props.jobNum)
        .doc(ref._delegate._key.path.segments[1])
        .set({
          baseId: ref._delegate._key.path.segments[1],
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
