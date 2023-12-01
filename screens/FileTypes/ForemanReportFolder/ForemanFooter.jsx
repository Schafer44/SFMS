import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../../Loading";

export default function ForemanFooter(props) {
  // State to manage loading status
  const [isLoading, setIsLoading] = useState(false);

  // Function to create and save a timesheet
  const createTimesheet = async (Timesheet) => {
    // Set loading state to true while the operation is in progress
    setIsLoading(true);

    // Check if the component is offline
    if (props.route.params.offline === true) {
      try {
        // Save data to AsyncStorage when offline
        await AsyncStorage.setItem(
          "@MySuperStore:FR",
          JSON.stringify({
            ForemanSignature: props.ForemanSignature,
            ClientSignature: props.ClientSignature,
            Header: props.Header,
            T1: props.T1,
            T2: props.T2,
            T3: props.T3,
            T4: props.T4,
            T5: props.T5,
            T6: props.T6,
            T7: props.T7,
            TypeExtra: "null",
          })
        ).then(Alert.alert("Successfully saved to local device"));
      } catch (error) {
        console.log("Error");
      }
    } else {
      // Obtain a reference to the document in Firestore
      const docRef = doc(
        db,
        props.route.params.file.JobNum,
        props.route.params.file.baseId
      );

      // Check if the document exists
      const docSnap = await getDoc(docRef);

      // Check if the file is not a template
      if (!props.IsTemplete) {
        // Check for required signatures and date
        if (props.ForemanSignature === null) {
          Alert.alert("Foreman Signature Required");
        } else if (props.ClientSignature === null) {
          Alert.alert("Client Signature Required");
        } else if (
          props.Header[0].Line0.Date === undefined ||
          props.Header[0].Line0.Date === null ||
          props.Header[0].Line0.Date === ""
        ) {
          Alert.alert("Date Required");
        } else {
          // Set document data and update Firestore
          setDoc(docRef, {
            T1: props.T1,
            T2: props.T2,
            T3: props.T3,
            T4: props.T4,
            T5: props.T5,
            T6: props.T6,
            T7: props.T7,
            Header: props.Header,
            Type: props.route.params.file.Type,
            baseId: props.route.params.file.baseId,
            ForemanSignature: props.ForemanSignature,
            ClientSignature: props.ClientSignature,
            TypeExtra: props.route.params.file.TypeExtra,
            id: props.id,
            hasBeenUpdated: "yes",
          })
            .then(() => {
              Alert.alert("Success");
            })
            .catch((error) => {
              Alert.alert("Submit Failed");
            });
        }
      } else {
        // Check for required date for template files
        if (
          props.Header[0].Line0.Date === undefined ||
          props.Header[0].Line0.Date === null ||
          props.Header[0].Line0.Date === ""
        ) {
          Alert.alert("Date Required");
        } else {
          // Set document data and update Firestore for template files
          setDoc(docRef, {
            T1: props.T1,
            T2: props.T2,
            T3: props.T3,
            T4: props.T4,
            T5: props.T5,
            T6: props.T6,
            T7: props.T7,
            Header: props.Header,
            Type: props.route.params.file.Type,
            baseId: props.route.params.file.baseId,
            ForemanSignature: null,
            ClientSignature: null,
            TypeExtra: props.route.params.file.TypeExtra,
            id: props.id,
            hasBeenUpdated: "yes",
          })
            .then(() => {
              Alert.alert("Success");
            })
            .catch((error) => {
              Alert.alert("Submit Failed");
            });
        }
      }
    }

    // Set loading state to false after the operation is completed
    setIsLoading(false);
  };

  // Function to toggle the visibility overlay
  const toggleOverlay = () => {
    props.setVisible(!props.visible);
  };

  // Function to toggle another visibility overlay
  const toggleOverlay2 = () => {
    props.setVisible2(!props.visible2);
  };

  return (
    <View style={styles.footerPage}>
      {isLoading ? <Loading /> : null}
      <View style={styles.footerPageSig}>
        {props.IsTemplete ? (
          <View style={styles.SigViewLeft}>
            <View
              title="Signature"
              underlayColor="#fff"
              style={{ ...styles.SignBtn, ...{ backgroundColor: "gray" } }}
              onPress={() => toggleOverlay2()}
            >
              <Text style={styles.loginText}>Client Rep Signature</Text>
            </View>

            <Image
              resizeMode={"contain"}
              style={styles.prev}
              source={{ uri: props.ClientSignature }}
            />
          </View>
        ) : (
          <View style={styles.SigViewLeft}>
            <TouchableOpacity
              title="Signature"
              underlayColor="#fff"
              style={styles.SubBtn}
              onPress={() => toggleOverlay2()}
            >
              <Text style={styles.loginText}>Client Rep Signature</Text>
            </TouchableOpacity>

            <Image
              resizeMode={"contain"}
              style={styles.prev}
              source={{ uri: props.ClientSignature }}
            />
          </View>
        )}

        {props.IsTemplete ? (
          <View style={styles.SigViewRight}>
            <View
              title="Signature"
              underlayColor="#fff"
              style={{ ...styles.SignBtn, ...{ backgroundColor: "gray" } }}
              onPress={() => toggleOverlay()}
            >
              <Text style={styles.loginText}>Foreman Signature</Text>
            </View>
            <Image
              resizeMode={"contain"}
              style={styles.prev}
              source={{ uri: props.ForemanSignature }}
            />
          </View>
        ) : (
          <View style={styles.SigViewRight}>
            <TouchableOpacity
              title="Signature"
              underlayColor="#fff"
              style={styles.SubBtn}
              onPress={() => toggleOverlay()}
            >
              <Text style={styles.loginText}>Foreman Signature</Text>
            </TouchableOpacity>

            <Image
              resizeMode={"contain"}
              style={styles.prev}
              source={{ uri: props.ForemanSignature }}
            />
          </View>
        )}
      </View>
      <TouchableOpacity
        style={styles.SubBtn}
        title="Submit"
        underlayColor="#fff"
        onPress={() => {
          createTimesheet({});
        }}
      >
        <Text style={styles.loginText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footerPage: {
    flexDirection: "column",
    width: "100%",
    height: 200,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  footerPageSig: {
    flex: 2,
    flexDirection: "row",
  },
  SubBtn: {
    width: "100%",
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignContent: "center",
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
  },
  prev: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  SigView: {
    height: "100%",
    flex: 2,
  },
  SigViewLeft: {
    height: "100%",
    flex: 1,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: "#d4d4d4",
  },
  SigViewRight: {
    height: "100%",
    flex: 1,
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: "#d4d4d4",
  },
});
