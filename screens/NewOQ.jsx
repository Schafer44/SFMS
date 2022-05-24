import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React, { setState, useState, useEffect } from "react";
import * as DocumentPicker from "expo-document-picker";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getStorage } from "firebase/storage";
import { db, firebaseApp } from "./FirebaseLink";

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
      //    /*
      const FBstorage = getStorage(firebaseApp, "gs://sfms-ce695.appspot.com");
      const Ref = ref(FBstorage, this.props.jobNum + "/" + file.name);
      getDownloadURL(Ref).then(
        async () => {
          Alert.alert(
            "Either this file has already been uploaded or it shares the same file name as another file"
          );
        },
        async () => {
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
          let temp3 = "";
          uploadBytes(Ref, blob).then(async (snapshot) => {
            const temp2 = getDownloadURL(snapshot.ref).then(
              async (downloadURL) => {
                await NewOQ(downloadURL, file.name);
              }
            );
          });
        }
      );
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
