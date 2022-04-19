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

import JSAT1 from "./JSAT1";
import JSAT2 from "./JSAT2";
import JSAT3 from "./JSAT3";
import JSAT4 from "./JSAT4";
import JSAT5 from "./JSAT5";
import JSAT6 from "./JSAT6";
import JSAT7 from "./JSAT7";
import JSAT8 from "./JSAT8";
import JSAT9 from "./JSAT9";
import JSAT10 from "./JSAT10";
import JSAT11 from "./JSAT11";
import JSAFooter from "./JSAFooter";

export default function JSA(props, jobNum) {
  const [Job, setJob] = useState([]);
  const [signature, setSign] = useState(null);
  const [visible, setVisible] = useState(false);
  const [T1, setT1] = useState([]);
  const [T2, setT2] = useState([]);
  const [T3, setT3] = useState([]);
  const [T4, setT4] = useState([]);
  const [T5, setT5] = useState([]);
  const [T6, setT6] = useState([]);
  const [T7, setT7] = useState([]);
  const [T8, setT8] = useState([]);
  const [T9, setT9] = useState([]);
  const [T10, setT10] = useState([]);
  const [T11, setT11] = useState([]);
  const [scrollEnabled, setScrollEnabled] = useState(true);
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
    console.log("test", props.route.params.file);
    if (props.route.params.file.signature !== undefined) {
      setSign(props.route.params.file.signature);
    }
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
    if (props.route.params.file.T7 != undefined) {
      setT7(props.route.params.file.T7);
    }
    if (props.route.params.file.T8 != undefined) {
      setT8(props.route.params.file.T8);
    }
    if (props.route.params.file.T9 != undefined) {
      setT9(props.route.params.file.T9);
    }
    if (props.route.params.file.T10 != undefined) {
      setT10(props.route.params.file.T10);
    }
    if (props.route.params.file.T11 != undefined) {
      setT11(props.route.params.file.T11);
    }
  }, []);

  const SignInScroll = () => {
    setScrollEnabled(!scrollEnabled);
  };
  return visible ? (
    <SignatureCapture
      visible={visible}
      setVisible={setVisible}
      signature={signature}
      setSign={setSign}
      SignInScroll={SignInScroll}
    />
  ) : (
    <View style={styles.globalContainer}>
      <TouchableOpacity
        style={styles.SubBtn}
        title="Lock"
        underlayColor="#fff"
        onPress={() => SignInScroll()}
      >
        <Text style={styles.LockText}>Lock Scroll</Text>
      </TouchableOpacity>
      <ScrollView scrollEnabled={scrollEnabled}>
        <View>
          <View style={styles.RowOne}>
            <View style={styles.Header}>
              <JSAT1 T1={T1} setT1={setT1} id={0} />
            </View>
          </View>
          <View style={styles.RowTwo}>
            <View style={styles.BJSAT1}>
              <JSAT2 T2={T2} setT2={setT2} id={1} />
            </View>
          </View>
          <View style={styles.RowThree}>
            <View style={styles.BJSAT2}>
              <JSAT3 T3={T3} setT3={setT3} id={2} />
            </View>
          </View>
          <View style={styles.RowFour}>
            <View style={styles.BJSAT3}>
              <JSAT4 T4={T4} setT4={setT4} id={3} />
            </View>
          </View>
          <View style={styles.RowFive}>
            <View style={styles.BJSAT4}>
              <JSAT5 T5={T5} setT5={setT5} id={4} />
            </View>
          </View>

          <View style={styles.RowSix}>
            <View style={styles.BJSAT5}>
              <JSAT6 T6={T6} setT6={setT6} id={5} />
            </View>
          </View>
          <View style={styles.RowSeven}>
            <View style={styles.BJSAT6}>
              <JSAT7 T7={T7} setT7={setT7} id={6} />
            </View>
          </View>
          <View style={styles.RowEight}>
            <View style={styles.BJSAT7}>
              <JSAT8
                T8={T8}
                setT8={setT8}
                id={7}
                setSign={setSign}
                SignInScroll={SignInScroll}
              />
            </View>
          </View>
          <View style={styles.RowNine}>
            <View style={styles.BJSAT8}>
              <JSAT9
                T9={T9}
                setT9={setT9}
                id={8}
                setSign={setSign}
                SignInScroll={SignInScroll}
              />
            </View>
          </View>

          <View style={styles.RowTen}>
            <View style={styles.BJSAT9}>
              <JSAT10
                T10={T10}
                setT10={setT10}
                id={9}
                setSign={setSign}
                SignInScroll={SignInScroll}
              />
            </View>
          </View>
          <View style={styles.RowEleven}>
            <View style={styles.BJSAT10}>
              <JSAT11
                T11={T11}
                setT11={setT11}
                id={10}
                setSign={setSign}
                SignInScroll={SignInScroll}
              />
            </View>
          </View>

          <JSAFooter
            T1={T1}
            T2={T2}
            T3={T3}
            T4={T4}
            T5={T5}
            T6={T6}
            T7={T7}
            T8={T8}
            T9={T9}
            T10={T10}
            T11={T11}
            route={props.route}
            visible={visible}
            setVisible={setVisible}
            signature={signature}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  globalContainer: {
    width: "100%",
    flexGrow: 1,
    paddingBottom: "3%",
  },
  RowOne: { flex: 1.2 },
  Header: {
    flex: 1,
    margin: "1%",
  },

  RowTwo: { flex: 2 },
  BJSAT1: {
    flex: 1,
    margin: "1%",
  },

  RowThree: { flex: 1.2 },
  BJSAT2: {
    flex: 1,
    margin: "1%",
  },

  RowFour: { flex: 2.4, flexDirection: "row" },
  BJSAT3: {
    flex: 1,
    margin: "1%",
  },
  RowFive: { flex: 1.4 },
  BJSAT4: {
    flex: 1,
    margin: "1%",
  },

  RowSix: { flex: 3 },
  BJSAT5: {
    flex: 1,
    margin: "1%",
  },
  RowSeven: { flex: 3 },
  BJSAT6: {
    flex: 1,
    margin: "1%",
  },
  RowEight: { flex: 3 },
  BJSAT7: {
    flex: 1,
    margin: "1%",
  },
  RowNine: {},
  BJSAT8: {
    flex: 1,
    margin: "1%",
  },
  RowTen: { flex: 1 },
  BJSAT9: {
    flex: 1,
    margin: "1%",
  },
  RowEleven: { flex: 1 },
  BJSAT10: {
    flex: 1,
    margin: "1%",
  },
  SubBtn: { backgroundColor: "green", padding: "1%" },
  LockText: { color: "white", marginLeft: "45%" },
});
