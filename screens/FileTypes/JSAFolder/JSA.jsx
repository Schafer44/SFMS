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
  KeyboardAvoidingView,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect, useMemo } from "react";
import { SignatureCapture } from "../SignatureCapture";
import { doc, getDoc, setDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";

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
import { useHeaderHeight } from "@react-navigation/elements";
import Loading from "../../Loading";
import "@expo/match-media";
import { useMediaQuery } from "react-responsive";

export default function JSA(props, jobNum) {
  //const [Job, setJob] = useState([]);
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
  const [IsTemplete, setIsTemplete] = useState(false);
  const [Id, setId] = useState("");
  const [User, setUser] = useState("");
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [headerHeight] = useState(useHeaderHeight());
  const [isLoading, setIsLoading] = useState(true);
  const [visibleDate, setVisibleDate] = useState(false);
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 600px)" });
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 600px)",
  });

  /*const fetchJob = async () => {
    setIsLoading(true);
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
    setIsLoading(false);
  };*/

  const toggleOverlayDate = () => {
    console.log(T1[0].Table.Date);
    setVisibleDate(!visibleDate);
  };

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("@MySuperStore:JSA");
      if (value !== null) {
        // We have data!!
        const temp = JSON.parse(value);
        setSign(temp.signature);
        setT1(temp.T1);
        setT2(temp.T2);
        setT3(temp.T3);
        setT4(temp.T4);
        setT5(temp.T5);
        setT6(temp.T6);
        setT7(temp.T7);
        setT8(temp.T8);
        setT9(temp.T9);
        setT10(temp.T10);
        setT11(temp.T11);
      } else {
        setT1([{ Table: {} }]);
        setT2([{ Table: {} }]);
        setT3([{ Table: {} }]);
        setT4([{ Table: {} }]);
        setT5([{ Table: {} }]);
        setT6([{ Table: {} }]);
        setT7([{ Table: {} }]);
        setT8([{ Table: {} }]);
        setT9([{ Line0: {} }]);
        setT10([{ Line0: {} }]);
        setT11([{ Line0: {} }]);
        setSign(null);
      }
    } catch (error) {
      console.log("Error");
    }
  };
  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (props.route.params.offline) {
        setT1({
          ...T1,
          Date: new Date().toString(),
        });
        Alert.alert(
          "Existing Offline File?",
          "Do you wish to use a previously created offline file or start fresh?",
          [
            {
              text: "Edit Existing",
              style: "cancel",
              onPress: async () => {
                _retrieveData();
              },
            },
            {
              text: "Start Fresh",
              style: "cancel",
              // If the user confirmed, then we dispatch the action we blocked earlier
              // This will continue the action that had triggered the removal of the screen
              onPress: async () => {
                setT1([{ Table: {} }]);
                setT2([{ Table: {} }]);
                setT3([{ Table: {} }]);
                setT4([{ Table: {} }]);
                setT5([{ Table: {} }]);
                setT6([{ Table: {} }]);
                setT7([{ Table: {} }]);
                setT8([{ Table: {} }]);
                setT9([{ Line0: {} }]);
                setT10([{ Line0: {} }]);
                setT11([{ Line0: {} }]);
                setSign(null);
              },
            },
          ]
        );
        /*setT1([{ Table: {} }]);
        setT2([{ Table: {} }]);
        setT3([{ Table: {} }]);
        setT4([{ Table: {} }]);
        setT5([{ Table: {} }]);
        setT6([{ Table: {} }]);
        setT7([{ Table: {} }]);
        setT8([{ Table: {} }]);
        setT9([{ Line0: {} }]);
        setT10([{ Line0: {} }]);
        setT11([{ Line0: {} }]);
        setSign(null);*/
        //_retrieveData();
      } else {
        if (props.route.params.file.TypeExtra === "Template") {
          setIsTemplete(true);
        }
        //fetchJob();
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
        if (props.route.params.file.user != undefined) {
          setUser(props.route.params.file.user);
        }
        if (props.route.params.file.id != undefined) {
          setId(props.route.params.file.id);
        }
      }
      setIsLoading(false);
    }
    return () => {
      // cancel the subscription
      isSubscribed = false;
    };
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
    <KeyboardAvoidingView
      style={styles.globalContainer}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={headerHeight}
    >
      {/*}
      <TouchableOpacity
        style={styles.SubBtn}
        title="Lock"
        underlayColor="#fff"
        onPress={() => SignInScroll()}
      >
        <Text style={styles.LockText}>Lock Scroll</Text>
  </TouchableOpacity>*/}
      {isLoading ? (
        <View
          style={{
            height: "100%",
            flex: 1,
          }}
        >
          <ActivityIndicator
            color={"black"}
            size="large"
            style={{
              height: "100%",
              flex: 1,
            }}
          />
        </View>
      ) : (
        <ScrollView scrollEnabled={scrollEnabled} style={styles.body}>
          <View>
            <View style={styles.RowOne}>
              <View style={styles.Header}>
                <JSAT1
                  T1={T1}
                  setT1={setT1}
                  offline={props.route.params.offline}
                  id={0}
                  isBigScreen={isBigScreen}
                  isMobileDevice={isMobileDevice}
                  toggleOverlayDate={toggleOverlayDate}
                />
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
                <JSAT4
                  T4={T4}
                  setT4={setT4}
                  id={3}
                  isBigScreen={isBigScreen}
                  isMobileDevice={isMobileDevice}
                />
              </View>
            </View>
            <View style={styles.RowFive}>
              <View style={styles.BJSAT4}>
                <JSAT5
                  T5={T5}
                  setT5={setT5}
                  id={4}
                  isBigScreen={isBigScreen}
                  isMobileDevice={isMobileDevice}
                />
              </View>
            </View>

            <View style={styles.RowSix}>
              <View style={styles.BJSAT5}>
                <JSAT6
                  T6={T6}
                  setT6={setT6}
                  id={5}
                  isBigScreen={isBigScreen}
                  isMobileDevice={isMobileDevice}
                />
              </View>
            </View>
            <View style={styles.RowSeven}>
              <View style={styles.BJSAT6}>
                <JSAT7
                  T7={T7}
                  setT7={setT7}
                  id={6}
                  isBigScreen={isBigScreen}
                  isMobileDevice={isMobileDevice}
                />
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
              user={User}
              id={Id}
              IsTemplete={IsTemplete}
            />
          </View>
        </ScrollView>
      )}
      {visibleDate ? (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <TouchableOpacity
            style={{
              width: "100%",
              flex: 2,
              opacity: 0.2,
              backgroundColor: "grey",
            }}
            onPress={() => {
              toggleOverlayDate();
            }}
          />
          <View
            style={{
              width: "100%",
              flex: 1,
              backgroundColor: "lightgrey",
            }}
          >
            <DateTimePicker
              display="spinner"
              dateFormat="dayofweek month day year"
              themeVariant="light"
              value={
                new Date(T1[0].Table.Date !== undefined ? T1[0].Table.Date : 1)
              }
              onChange={(event) => {
                /*setT1({
                  ...T1,
                  Date: new Date(event.nativeEvent.timestamp).toString(),
                });*/
                setT1(
                  T1,
                  (T1[0].Table.Date = new Date(
                    event.nativeEvent.timestamp
                  ).toString())
                );
              }}
            />
          </View>
        </View>
      ) : null}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  globalContainer: {
    width: "100%",
    flexGrow: 1,
    paddingBottom: "4.2%",
    height: "100%",
  },
  body: { height: "100%", flex: 1 },
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
