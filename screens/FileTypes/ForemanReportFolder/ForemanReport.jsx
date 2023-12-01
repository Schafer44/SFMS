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
} from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import { SignatureCapture } from "../SignatureCapture";
import { doc, getDoc, setDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";

import FRHeader from "./FRHeader";
import FRT1 from "./FRT1";
import FRT2 from "./FRT2";
import FRT3 from "./FRT3";
import FRT4 from "./FRT4";
import FRT5 from "./FRT5";
import FRT6 from "./FRT6";
import FRT7 from "./FRT7";
import ForemanFooter from "./ForemanFooter";
import { useHeaderHeight } from "@react-navigation/elements";
import Loading from "../../Loading";
import "@expo/match-media";
import { useMediaQuery } from "react-responsive";

export default function ForemanReport(props, jobNum) {
  // States to manage various data related to the form
  const [Job, setJob] = useState([]);
  const [ForemanSignature, setForemanSign] = useState(null);
  const [ClientSignature, setClientSign] = useState(null);
  const [Header, setHeader] = useState([]);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [T1, setT1] = useState([]);
  const [T2, setT2] = useState([]);
  const [T3, setT3] = useState([]);
  const [T4, setT4] = useState([]);
  const [T5, setT5] = useState([]);
  const [T6, setT6] = useState([]);
  const [T7, setT7] = useState([]);
  const [Id, setId] = useState("");
  const [IsTemplete, setIsTemplete] = useState(false);
  const [User, setUser] = useState("");
  const [headerHeight] = useState(useHeaderHeight());
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleDate, setVisibleDate] = useState(false);
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 600px)" });
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 600px)",
  });

  // Function to toggle the date overlay
  const toggleOverlayDate = () => {
    setVisibleDate(!visibleDate);
  };

  // Function to retrieve data from AsyncStorage
  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("@MySuperStore:FR");
      if (value !== null) {
        // Data exists, parse and set various states
        const temp = JSON.parse(value);
        setHeader(temp.Header);
        setClientSign(temp.ClientSignature);
        setForemanSign(temp.ForemanSignature);
        setT1(temp.T1);
        setT2(temp.T2);
        setT3(temp.T3);
        setT4(temp.T4);
        setT5(temp.T5);
        setT6(temp.T6);
        setT7(temp.T7);
      } else {
        // No data found, initialize states with default values
        setHeader([{ Line0: {} }], [{ Line1: {} }], [{ Line2: {} }]);
        setForemanSign(null);
        setClientSign(null);
        setT1([{ Line0: {} }, { Line1: {} }]);
        setT2([{ Line0: {} }]);
        setT3([{ Line0: {} }]);
        setT4([{ Line0: {} }]);
        setT5([{ Line0: {} }]);
        setT6([{ Line0: {} }, { Line1: {} }]);
        setT7([{ Line0: {} }]);
      }
    } catch (error) {
      console.log("Error");
    }
  };

  // Effect hook to handle component initialization and data fetching
  useEffect(() => {
    console.log(2);
    // Flag to track component subscription
    let isSubscribed = true;

    if (isSubscribed) {
      // Check if the component is offline
      if (props.route.params.offline) {
        // Set date in T1 if offline
        setT1({
          ...T1,
          Date: new Date().toString(),
        });

        // Alert the user about existing offline file and options
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
              onPress: async () => {
                // Reset various states if the user chooses to start fresh
                setForemanSign(null);
                setClientSign(null);
                setT1([{ Line0: {} }, { Line1: {} }]);
                setT2([{ Line0: {} }]);
                setT3([{ Line0: {} }]);
                setT4([{ Line0: {} }]);
                setT5([{ Line0: {} }]);
                setT6([{ Line0: {} }, { Line1: {} }]);
                setT7([{ Line0: {} }]);
              },
            },
          ]
        );
      } else {
        // Check if the file is a template
        if (props.route.params.file.TypeExtra === "Template") {
          setIsTemplete(true);
        }

        // Check if various properties exist in the file and set states accordingly
        if (props.route.params.file.Header !== undefined) {
          setHeader(props.route.params.file.Header);
        }
        if (props.route.params.file.ForemanSignature !== undefined) {
          setForemanSign(props.route.params.file.ForemanSignature);
        }
        if (props.route.params.file.ClientSignature !== undefined) {
          setClientSign(props.route.params.file.ClientSignature);
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

        // Set user and id states if they exist in the file
        if (props.route.params.file.user != undefined) {
          setUser(props.route.params.file.user);
        }
        if (props.route.params.file.id != undefined) {
          setId(props.route.params.file.id);
        }
      }
    }

    // Cleanup function to cancel the subscription
    return () => {
      isSubscribed = false;
    };
  }, []);

  // Function to toggle the scrollability of the screen
  const SignInScroll = () => {
    setScrollEnabled(!scrollEnabled);
  };

  return (
    <KeyboardAvoidingView
      style={styles.globalContainer}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={headerHeight}
    >
      {visible ? (
        <SignatureCapture
          visible={visible}
          setVisible={setVisible}
          signature={ForemanSignature}
          setSign={setForemanSign}
          SignInScroll={SignInScroll}
        />
      ) : visible2 ? (
        <SignatureCapture
          visible={visible2}
          setVisible={setVisible2}
          signature={ClientSignature}
          setSign={setClientSign}
          SignInScroll={SignInScroll}
        />
      ) : null}
      <ScrollView scrollEnabled={scrollEnabled} style={styles.body}>
        <View>
          {isLoading ? <Loading /> : null}
          <View style={styles.RowOne}>
            <View style={styles.Header}>
              <FRHeader
                Header={Header}
                setHeader={setHeader}
                offline={props.route.params.offline}
                isBigScreen={isBigScreen}
                toggleOverlayDate={toggleOverlayDate}
              />
            </View>
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
          <View style={isBigScreen ? styles.RowFour : styles.RowFourPhone}>
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
            T7={T7}
            Header={Header}
            route={props.route}
            visible={visible}
            setVisible={setVisible}
            visible2={visible2}
            setVisible2={setVisible2}
            ForemanSignature={ForemanSignature}
            ClientSignature={ClientSignature}
            user={User}
            id={Id}
            IsTemplete={IsTemplete}
          />
        </View>
      </ScrollView>

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
                new Date(
                  Header[0].Line0.Date !== undefined ? Header[0].Line0.Date : 1
                )
              }
              onChange={(event) => {
                /*setT1({
                  ...T1,
                  Date: new Date(event.nativeEvent.timestamp).toString(),
                });*/
                setHeader(
                  Header,
                  (Header[0].Line0.Date = new Date(
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
  body: { height: "100%" },
  RowOne: { flex: 1.2 },
  Header: {
    flex: 1,
    margin: "1%",
  },

  RowTwo: { flex: 2 },
  BT1: {
    flex: 1,
    margin: "1%",
    marginTop: "3%",
  },

  RowThree: { flex: 1.2 },
  BT2: {
    flex: 1,
    margin: "1%",
    marginTop: "3%",
  },

  RowFour: { flex: 2.4, flexDirection: "row" },
  RowFourPhone: { flex: 2.4, flexDirection: "column" },
  BT3: {
    flex: 1,
    margin: "1%",
    marginTop: "3%",
  },
  BT4: {
    flex: 1,
    margin: "1%",
    marginTop: "3%",
  },
  BT5: {
    flex: 1,
    margin: "1%",
    marginTop: "3%",
  },

  RowFive: { flex: 1.4 },
  BT6: {
    flex: 1,
    margin: "1%",
    marginTop: "3%",
  },

  RowSix: { flex: 3 },
  BT7: {
    flex: 1,
    margin: "1%",
    marginTop: "3%",
  },
});
