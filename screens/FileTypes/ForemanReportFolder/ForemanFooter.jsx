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
  const [isLoading, setIsLoading] = useState(false);

  const createTimesheet = async (Timesheet) => {
    setIsLoading(true);
    if (props.route.params.offline === true) {
      try {
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
          })
        ).then(Alert.alert("Success"));
      } catch (error) {
        console.log("Error");
      }
    } else {
      //Job.push(Timesheet);
      const docRef = doc(
        db,
        props.route.params.file.JobNum,
        props.route.params.file.baseId
      );
      //const reference = ref(db, "TestJob101");
      const docSnap = getDoc(docRef);
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
          lastUpdatedBy: props.user,
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
    setIsLoading(false);
  };
  const toggleOverlay = () => {
    props.setVisible(!props.visible);
  };
  const toggleOverlay2 = () => {
    props.setVisible2(!props.visible2);
  };
  return (
    <View style={styles.footerPage}>
      {isLoading ? <Loading /> : <View></View>}
      <View style={styles.footerPageSig}>
        <View style={styles.SigView}>
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

        <View style={styles.SigView}>
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
});
