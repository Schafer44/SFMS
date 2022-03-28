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

import FRT1 from "./FRT1";
import FRT2 from "./FRT2";
import FRT3 from "./FRT3";
import FRT4 from "./FRT4";
import FRT5 from "./FRT5";
import FRT6 from "./FRT6";
import FRT7 from "./FRT7";

export default function ForemanReport(props, jobNum) {
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
  const createForemanReport = (ForemanReport) => {
    const docRef = doc(db);
    setDoc(docRef, {
      ForemanReportHeader: Header,
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
    <View style={styles.globalContainer}>
      <View style={styles.RowOne}>
        <View style={styles.Header}></View>
      </View>
      <View style={styles.RowTwo}>
        <View style={styles.BT1}>
          <FRT1></FRT1>
        </View>
      </View>
      <View style={styles.RowThree}>
        <View style={styles.BT2}>
          <FRT2></FRT2>
        </View>
      </View>
      <View style={styles.RowFour}>
        <View style={styles.BT3}>
          <FRT3></FRT3>
        </View>
        <View style={styles.BT4}>
          <FRT4></FRT4>
        </View>
        <View style={styles.BT5}>
          <FRT5></FRT5>
        </View>
      </View>
      <View style={styles.RowFive}>
        <View style={styles.BT6}>
          <FRT6></FRT6>
        </View>
      </View>
      <View style={styles.RowSix}>
        <View style={styles.BT7}>
          <FRT7></FRT7>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  globalContainer: {
    width: "100%",
    flex: 1,
  },
  RowOne: { flex: 1.2 },
  Header: {
    flex: 1,
    margin: "1%",
  },

  RowTwo: { flex: 2 },
  BT1: {
    flex: 1,
    margin: "1%",
  },

  RowThree: { flex: 1.2 },
  BT2: {
    flex: 1,
    margin: "1%",
  },

  RowFour: { flex: 2.4, flexDirection: "row" },
  BT3: {
    flex: 1,
    margin: "1%",
  },
  BT4: {
    flex: 1,
    margin: "1%",
  },
  BT5: {
    flex: 1,
    margin: "1%",
  },

  RowFive: { flex: 1.4 },
  BT6: {
    flex: 1,
    margin: "1%",
  },

  RowSix: { flex: 3 },
  BT7: {
    flex: 1,
    margin: "1%",
  },
});
