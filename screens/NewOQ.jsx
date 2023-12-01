import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableHighlight,
} from "react-native";
import React from "react";
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
    }; // Asynchronously perform both file picking and file upload operations
    const DoBoth = async () => {
      // Call the FilePicker function to get a selected file
      const file = await FilePicker();

      // Firebase Storage configuration
      const FBstorage = getStorage(firebaseApp, "gs://sfms-ce695.appspot.com");
      const Ref = ref(FBstorage, this.props.jobNum + "/" + file.name);

      // Check if the file with the same name already exists
      getDownloadURL(Ref).then(
        async () => {
          // Handle case where the file already exists
          Alert.alert(
            "Either this file has already been uploaded or it shares the same file name as another file"
          );
        },
        async () => {
          // If the file does not exist, proceed with the upload process
          const blob = await new Promise((resolve, reject) => {
            // Use XMLHttpRequest to fetch the file as a blob
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

          // Upload the file to Firebase Storage
          let temp3 = "";
          uploadBytes(Ref, blob).then(async (snapshot) => {
            // Get the download URL of the uploaded file
            const temp2 = getDownloadURL(snapshot.ref).then(
              async (downloadURL) => {
                // Call the NewOQ function with the download URL and file name
                await NewOQ(downloadURL, file.name);
              }
            );
          });
        }
      );
    };

    // Asynchronously create a new OQ (Operational Qualification) document
    const NewOQ = async (temp, name) => {
      // Set isLoading to true to indicate that the operation is in progress
      this.setState({
        isLoading: true,
      });

      // Create a reference to a new document in the specified Firestore collection
      var Job = [];
      const ref = db.collection(this.props.jobNum).doc();

      // Use the reference to set initial data for the new OQ document
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

      // Set isLoading to false after the operation is complete
      this.setState({
        isLoading: false,
      });
    };

    return (
      <View style={styles.container} key={1}>
        {this.state.isLoading ? <Loading /> : null}
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
    flex: 1,
  },
  Text: {
    color: "white",
  },
  newJob: {
    width: "95%",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1%",
    borderRadius: 10,
  },
  EditJobBtn: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
