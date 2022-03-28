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
import { SignatureCapture } from "../SignatureCapture";
import { doc, getDoc, setDoc } from "firebase/firestore";
import ExportDataToExcel from "../../ExportToExcel";

export default function JSA(props, jobNum) {
  const [signature, setSign] = useState(null);
  const [visible, setVisible] = useState(false);
  const [Header, setHeader] = useState([]);
  const [Job, setJob] = useState([]);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const fetchJob = async () => {
    var Job = [];
    const response = db.collection(props.route.params.file.JobNum);
    const data = await response.get();
    Job = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      baseId: doc.id,
    }));
    data.docs.forEach((item) => {
      setJob([...Job]);
    });
  };
  useEffect(() => {
    fetchJob();
  }, []);
  const createJSA = (JSA) => {
    const docRef = doc(db);
    setDoc(docRef, {
      JSAHeader: Header,
      Type: props.route.params.file.Type,
      baseId: props.route.params.file.baseId,
      signature: signature,
    });
  };
  return visible ? (
    <SignatureCapture
      visible={visible}
      setVisible={setVisible}
      signature={signature}
      setSign={setSign}
    />
  ) : (
    <View style={styles.globalContainer}></View>
  );
}

const styles = StyleSheet.create({
  globalContainer: {
    width: "100%",
    flex: 1,
  },
});
