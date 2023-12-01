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

export default function JSAFooter(props) {
  // State to manage the loading state
  const [isLoading, setIsLoading] = useState(false);

  // Function to create and submit a timesheet
  const createTimesheet = async (Timesheet) => {
    // Set loading state to true
    setIsLoading(true);

    // Check if offline mode is enabled
    if (props.route.params.offline === true) {
      try {
        // Save timesheet data to local storage
        await AsyncStorage.setItem(
          "@MySuperStore:JSA",
          JSON.stringify({
            signature: props.signature,
            T1: props.T1,
            T2: props.T2,
            T3: props.T3,
            T4: props.T4,
            T5: props.T5,
            T6: props.T6,
            T7: props.T7,
            T8: props.T8,
            T9: props.T9,
            T10: props.T10,
            T11: props.T11,
            TypeExtra: "null",
          })
        ).then(Alert.alert("Successfully saved to local device"));
      } catch (error) {
        console.log(error);
      }
    } else {
      // Retrieve the document reference based on JobNum and baseId
      const docRef = doc(
        db,
        props.route.params.file.JobNum,
        props.route.params.file.baseId
      );

      // Check if the timesheet is not a template
      if (!props.IsTemplete) {
        // Check if signature is null
        if (props.signature === null) {
          Alert.alert("Signature Required");
        } else if (
          // Check if Date is undefined, null, or an empty string
          props.T1[0].Table.Date === undefined ||
          props.T1[0].Table.Date === null ||
          props.T1[0].Table.Date === ""
        ) {
          Alert.alert("Date Required");
        } else {
          // Update the document with timesheet data
          setDoc(docRef, {
            T1: props.T1,
            T2: props.T2,
            T3: props.T3,
            T4: props.T4,
            T5: props.T5,
            T6: props.T6,
            T7: props.T7,
            T8: props.T8,
            T9: props.T9,
            T10: props.T10,
            T11: props.T11,
            Type: props.route.params.file.Type,
            baseId: props.route.params.file.baseId,
            signature: props.signature,
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
        // Check if Date is undefined, null, or an empty string
        if (
          props.T1[0].Table.Date === undefined ||
          props.T1[0].Table.Date === null ||
          props.T1[0].Table.Date === ""
        ) {
          Alert.alert("Date Required");
        } else {
          // Update the document with timesheet data for a template
          setDoc(docRef, {
            T1: props.T1,
            T2: props.T2,
            T3: props.T3,
            T4: props.T4,
            T5: props.T5,
            T6: props.T6,
            T7: props.T7,
            T8: props.T8,
            T9: props.T9,
            T10: props.T10,
            T11: props.T11,
            Type: props.route.params.file.Type,
            baseId: props.route.params.file.baseId,
            signature: null,
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

    // Set loading state to false
    setIsLoading(false);
  };

  // Function to toggle the overlay visibility
  const toggleOverlay = () => {
    props.setVisible(!props.visible);
  };

  return (
    <View style={styles.footerPage}>
      {isLoading ? <Loading /> : null}

      {props.IsTemplete ? (
        <View style={styles.SigViewMiddle}>
          <View
            title="Signature"
            underlayColor="#fff"
            style={{ ...styles.SignBtn, ...{ backgroundColor: "gray" } }}
            onPress={() => toggleOverlay()}
          >
            <Text style={styles.loginText}>Signature</Text>
          </View>

          <Image
            resizeMode={"contain"}
            style={styles.prev}
            source={{ uri: props.signature }}
          />
        </View>
      ) : (
        <View style={styles.SigViewMiddle}>
          <TouchableOpacity
            title="Signature"
            underlayColor="#fff"
            style={styles.SubBtn}
            onPress={() => toggleOverlay()}
          >
            <Text style={styles.loginText}>Signature</Text>
          </TouchableOpacity>

          <Image
            resizeMode={"contain"}
            style={styles.prev}
            source={{ uri: props.signature }}
          />
        </View>
      )}
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
    flexDirection: "column",
    width: "100%",
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
  SigViewMiddle: {
    height: "100%",
    width: "100%",
    flex: 1,
    borderWidth: 1,
    borderColor: "#d4d4d4",
  },
});
