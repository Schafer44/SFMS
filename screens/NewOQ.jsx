import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableHighlight,
} from "react-native";
import React, { setState, useState, useEffect } from "react";
import * as DocumentPicker from "expo-document-picker";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getStorage } from "firebase/storage";
import { db, firebaseApp } from "./FirebaseLink";
import Loading from "./Loading";

export default class NewOQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      url: "",
    };
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
      this.setState({
        isLoading: true,
      });
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
          id: this.props.job.length,
        });
      this.setState({
        isLoading: false,
      });
    };
    return (
      <View style={styles.container} key={1}>
        {this.state.isLoading ? <Loading /> : <View></View>}
        <View style={styles.newJob} key={1}>
          <TouchableHighlight
            activeOpacity={0.99}
            underlayColor="darkgreen"
            style={styles.EditJobBtn}
            onPress={() => DoBoth()}
          >
            <Text style={{ color: "white" }}>New OQ</Text>
          </TouchableHighlight>
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
