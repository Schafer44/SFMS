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
import ForemanFooter from "./ForemanFooter";

export default function ForemanReport(props, jobNum) {
  const [signature, setSign] = useState(null);
  const [visible, setVisible] = useState(false);
  const [Header, setHeader] = useState([]);
  const [Job, setJob] = useState([]);
  const [T1, setT1] = useState([]);
  const [T2, setT2] = useState([]);
  const [T3, setT3] = useState([]);
  const [T4, setT4] = useState([]);
  const [T5, setT5] = useState([]);
  const [T7, setT6] = useState([]);
  const [T6, setT7] = useState([]);
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
    console.log("props", props.route.params);
    fetchJob();
    if (props.route.params.file.T1 != undefined) {
      setT1(props.route.params.file.T1);
    }
    if (props.route.params.file.T2 != undefined) {
      setT2(props.route.params.file.T2);
    }
    if (props.route.params.file.T3 != undefined) {
      setT3(props.route.params.file.T3);
    }
    if (props.route.params.file.T4 != undefined) {
      setT4(props.route.params.file.T4);
    }
    if (props.route.params.file.T5 != undefined) {
      setT5(props.route.params.file.T5);
    }
    if (props.route.params.file.T6 != undefined) {
      setT6(props.route.params.file.T6);
    }
  }, []);

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
          <FRT1 T1={T1} setT1={setT1} id={0} />
        </View>
      </View>
      <View style={styles.RowThree}>
        <View style={styles.BT2}>
          <FRT2 T2={T2} setT2={setT2} id={1} />
        </View>
      </View>
      <View style={styles.RowFour}>
        <View style={styles.BT3}>
          <FRT3 T3={T3} setT3={setT3} id={2} />
        </View>
        <View style={styles.BT4}>
          <FRT4 T4={T4} setT4={setT4} id={3} />
        </View>
        <View style={styles.BT5}>
          <FRT5 T5={T5} setT5={setT5} id={4} />
        </View>
      </View>
      <View style={styles.RowFive}>
        <View style={styles.BT6}>
          <FRT6 T6={T6} setT6={setT6} id={5} />
        </View>
      </View>
      <View style={styles.RowSix}>
        <View style={styles.BT7}>
          <FRT7 T7={T7} setT7={setT7} id={6} />
        </View>
      </View>
      <ForemanFooter
        T1={T1}
        T2={T2}
        T3={T3}
        T4={T4}
        T5={T5}
        T6={T6}
        route={props.route}
      />
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