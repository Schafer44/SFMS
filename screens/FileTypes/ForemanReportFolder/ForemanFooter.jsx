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
} from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import ExportDataToExcel from "../../ExportToExcel";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function ForemanFooter(props) {
  const createTimesheet = (Timesheet) => {
    //Job.push(Timesheet);
    const docRef = doc(
      db,
      props.route.params.file.JobNum,
      props.route.params.file.baseId
    );
    //const reference = ref(db, "TestJob101");
    const docSnap = getDoc(docRef);
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
      signature: props.signature,
      TypeExtra: props.route.params.file.TypeExtra,
    });
  };
  const toggleOverlay = () => {
    props.setVisible(!props.visible);
  };
  return (
    <View style={styles.footerPage}>
      <View style={styles.footerPageSig}>
        <TouchableOpacity
          title="Signature"
          underlayColor="#fff"
          style={styles.SubBtn}
          onPress={() => toggleOverlay()}
        >
          <Text style={styles.loginText}>Signature</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.SubBtn}
          title="Submit"
          underlayColor="#fff"
          onPress={() => {
            createTimesheet({
              TempName: "TestTimesheet",
              TempBaseId: "001",
              TempId: "1",
            });
          }}
        >
          <Text style={styles.loginText}>Submit</Text>
        </TouchableOpacity>
        <ExportDataToExcel />
      </View>

      <Image
        resizeMode={"contain"}
        style={styles.prev}
        source={{ uri: props.signature }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  footerPage: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  footerPageSig: {
    flex: 2,
    flexDirection: "column",
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
});
