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
  const [signature, setSign] = useState(null);
  const [Header, setHeader] = useState([]);
  const createTimesheet = (Timesheet) => {
    //Job.push(Timesheet);
    const docRef = doc(
      db,
      props.route.params.file.JobNum,
      props.route.params.file.baseId
    );
    //const reference = ref(db, "TestJob101");
    const docSnap = getDoc(docRef);
    console.log("fdjfhdj", props);
    setDoc(docRef, {
      T1: props.T1,
      Type: props.route.params.file.Type,
      baseId: props.route.params.file.baseId,
      signature: signature,
      TypeExtra: props.route.params.file.TypeExtra,
    });
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
        source={{ uri: signature }}
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
