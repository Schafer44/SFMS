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
  TouchableWithoutFeedback,
} from "react-native";
import { db } from "../../FirebaseLink";
import React, { useState, useEffect, useMemo } from "react";
import { SignatureCapture } from "../SignatureCapture";
import TimesheetLineComment from "./TimesheetComment";
import { doc, getDoc, setDoc } from "firebase/firestore";
import TimesheetBody from "./TimesheetBody";
import { useHeaderHeight } from "@react-navigation/elements";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../../Loading";

export default function Timesheet(props, jobNum) {
  const [FRsignature, setFRSign] = useState(null);
  const [CRsignature, setCRSign] = useState(null);
  const [Csignature, setCSign] = useState(null);
  const [Comment, setComment] = useState("");
  //const [Lines, setLines] = useState([]);
  const [Header, setHeader] = useState([]);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [Body, setBody] = useState([]);
  //const [Job, setJob] = useState([]);
  const [headerHeight] = useState(useHeaderHeight());
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const toggleOverlay2 = () => {
    setVisible2(!visible2);
  };
  const toggleOverlay3 = () => {
    setVisible3(!visible3);
  };
  const setDate = (event, date) => {};
  /*const fetchJob = async () => {
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
    //setLines({ Line: props.route.params.file.Timesheet });
  };*/
  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("@MySuperStore:TS");

      if (value !== null) {
        // We have data!!
        const temp = JSON.parse(value);
        setBody(temp.TimesheetLines);
        setHeader(temp.TimesheetHeader);
        setComment(temp.Comment);
        setFRSign(temp.FRsignature);
        setCSign(temp.Csignature);
        setCRSign(temp.CRsignature);
      } else {
        setHeader({
          ...Header,
          Date: new Date().toString(),
        });
        setBody({});
        setComment("");
        setFRSign(null);
        setCSign(null);
        setCRSign(null);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (props.route.params.offline) {
        setHeader({
          ...Header,
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
                setBody({ line0: ["", "", "", "", "", "", ""] });
                setComment("");
                setFRSign(null);
                setCSign(null);
                setCRSign(null);
              },
            },
          ]
        );
      } else {
        //fetchJob();
        if (props.route.params.file.TimesheetLines !== undefined) {
          setBody(props.route.params.file.TimesheetLines);
        }
        if (props.route.params.file.TimesheetHeader !== undefined) {
          setHeader(props.route.params.file.TimesheetHeader);
          if (props.route.params.file.TimesheetHeader.Date === undefined) {
            setHeader({
              ...Header,
              Date: new Date().toString(),
            });
          }
        }
        if (props.route.params.file.Comment !== undefined) {
          setComment(props.route.params.file.Comment);
        }
        if (props.route.params.file.FRsignature !== undefined) {
          setFRSign(props.route.params.file.FRsignature);
        }
        if (props.route.params.file.CRsignature !== undefined) {
          setCRSign(props.route.params.file.CRsignature);
        }
        if (props.route.params.file.Csignature !== undefined) {
          setCSign(props.route.params.file.Csignature);
        }
      }
    }
    return () => {
      // cancel the subscription
      isSubscribed = false;
    };
  }, []);
  /*useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (props.route.params.offline) {
        setHeader({
          ...Header,
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
                setBody({ line0: ["", "", "", "", "", "", ""] });
                setComment("");
                setFRSign(null);
                setCSign(null);
                setCRSign(null);
              },
            },
          ]
        );
      } else {
        fetchJob();
        if (props.route.params.file.TimesheetLines !== undefined) {
          setBody(props.route.params.file.TimesheetLines);
        }
        if (props.route.params.file.TimesheetHeader !== undefined) {
          setHeader(props.route.params.file.TimesheetHeader);
          if (props.route.params.file.TimesheetHeader.Date === undefined) {
            setHeader({
              ...Header,
              Date: new Date().toString(),
            });
          }
        }
        if (props.route.params.file.Comment !== undefined) {
          setComment(props.route.params.file.Comment);
        }
        if (props.route.params.file.FRsignature !== undefined) {
          setFRSign(props.route.params.file.FRsignature);
        }
        if (props.route.params.file.CRsignature !== undefined) {
          setCRSign(props.route.params.file.CRsignature);
        }
        if (props.route.params.file.Csignature !== undefined) {
          setCSign(props.route.params.file.Csignature);
        }
      }
    }
    return () => {
      // cancel the subscription
      isSubscribed = false;
    };
  }, []);*/
  const createTimesheet = async (Timesheet) => {
    setIsLoading(true);
    if (props.route.params.offline) {
      try {
        await AsyncStorage.setItem(
          "@MySuperStore:TS",
          JSON.stringify({
            TimesheetHeader: Header,
            TimesheetLines: Body,
            Comment: Comment,
            Type: "Timesheet",
            CRsignature: CRsignature,
            Csignature: Csignature,
            FRsignature: FRsignature,
          })
        ).then(Alert.alert("successfully saved to local device"));
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
      if (FRsignature === null) {
        Alert.alert("Foreman Signature Required");
      } else if (
        Header.Date === undefined ||
        Header.Date == "" ||
        Header.Date == null
      ) {
        Alert.alert("Date Required");
      } else {
        setDoc(docRef, {
          TimesheetHeader: Header,
          TimesheetLines: Body,
          Comment: Comment,
          Type: props.route.params.file.Type,
          baseId: props.route.params.file.baseId,
          FRsignature: FRsignature,
          CRsignature: CRsignature,
          Csignature: Csignature,
          lastUpdatedBy: props.route.params.file.user,
          TypeExtra: props.route.params.file.TypeExtra,
          id: props.route.params.file.id,
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
  const SignInScroll = () => {
    setScrollEnabled(!scrollEnabled);
  };
  return visible ? (
    <SignatureCapture
      visible={visible}
      setVisible={setVisible}
      Sign={FRsignature}
      setSign={setFRSign}
      SignInScroll={SignInScroll}
    />
  ) : visible2 ? (
    <SignatureCapture
      visible={visible2}
      setVisible={setVisible2}
      Sign={CRsignature}
      setSign={setCRSign}
      SignInScroll={SignInScroll}
    />
  ) : visible3 ? (
    <SignatureCapture
      visible={visible3}
      setVisible={setVisible3}
      Sign={Csignature}
      setSign={setCSign}
      SignInScroll={SignInScroll}
    />
  ) : (
    <View style={styles.globalContainer}>
      <KeyboardAvoidingView
        style={styles.Top}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={headerHeight + 40}
      >
        <View style={styles.header}>
          {isLoading ? <Loading /> : null}
          <View style={styles.hGridTitles}>
            <View style={styles.TextInputTwo}>
              <Text style={styles.textInputHeader}>Project: </Text>
            </View>
            <View style={styles.TextInputTwo}>
              <Text style={styles.textInputHeader}>Date: </Text>
            </View>
            <View style={styles.TextInputTwo}>
              <Text style={styles.textInputHeader}>Day: </Text>
            </View>
            <View style={styles.TextInputTwo}>
              <Text style={styles.textInputHeader}>Crew #: </Text>
            </View>
          </View>

          <View style={styles.hGridInputs}>
            <View style={styles.TextInputOne}>
              <TextInput
                style={styles.textInputTest}
                placeholder=""
                value={Header.Project}
                onChange={(event) => {
                  setHeader({ ...Header, Project: event.nativeEvent.text });
                }}
              />
            </View>
            <View style={styles.DatePickerCont}>
              <View style={styles.DatePicker}>
                <DateTimePicker
                  dateFormat="dayofweek month day year"
                  themeVariant="light"
                  value={new Date(Header.Date !== undefined ? Header.Date : 1)}
                  onChange={(event) => {
                    setHeader({
                      ...Header,
                      Date: new Date(event.nativeEvent.timestamp).toString(),
                    });
                  }}
                />
              </View>
            </View>
            <View style={styles.TextInputOne}>
              <TextInput
                style={styles.textInputTest}
                placeholder=""
                value={Header.Day}
                onChange={(event) => {
                  setHeader({ ...Header, Day: event.nativeEvent.text });
                }}
              />
            </View>
            <View style={styles.TextInputOne}>
              <TextInput
                style={styles.textInputTest}
                placeholder=""
                value={Header.Crew}
                onChange={(event) => {
                  setHeader({ ...Header, Crew: event.nativeEvent.text });
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <TimesheetBody
            T8={Body}
            setT8={setBody}
            Comment={Comment}
            setComment={setComment}
          />
        </View>
      </KeyboardAvoidingView>
      {/*<View style={styles.footerDoc}>
        <View style={styles.footerViewTitle}>
          <Text style={styles.footerDocTitle}>Additional Comments</Text>
        </View>
        <View style={styles.footerViewContent}>
          <TimesheetLineComment Comment={Comment} setComment={setComment} />
        </View>
      </View>*/}
      <View style={styles.TitleTextBox}>
        <Text style={styles.TitleText}>Signatures</Text>
      </View>
      <View style={styles.footerPage}>
        <View style={styles.footerPageSig}>
          <View style={styles.SigViewLeft}>
            <TouchableOpacity
              title="Signature"
              underlayColor="#fff"
              style={styles.SignBtn}
              onPress={() => toggleOverlay()}
            >
              <Text style={styles.loginText}>Foreman</Text>
            </TouchableOpacity>

            <Image
              resizeMode={"contain"}
              style={styles.prev}
              source={{ uri: FRsignature }}
            />
          </View>

          <View style={styles.SigViewMiddle}>
            <TouchableOpacity
              title="Signature"
              underlayColor="#fff"
              style={styles.SignBtn}
              onPress={() => toggleOverlay2()}
            >
              <Text style={styles.loginText}>Client Rep</Text>
            </TouchableOpacity>

            <Image
              resizeMode={"contain"}
              style={styles.prev}
              source={{ uri: CRsignature }}
            />
          </View>

          <View style={styles.SigViewRight}>
            <TouchableOpacity
              title="Signature"
              underlayColor="#fff"
              style={styles.SignBtn}
              onPress={() => toggleOverlay3()}
            >
              <Text style={styles.loginText}>Company</Text>
            </TouchableOpacity>

            <Image
              resizeMode={"contain"}
              style={styles.prev}
              source={{ uri: Csignature }}
            />
          </View>
        </View>
      </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  globalContainer: {
    width: "100%",
    flex: 1,
  },
  Top: { flex: 8 },
  TitleTextBox: {
    justifyContent: "center",
    backgroundColor: "white",
    alignContent: "center",
    alignItems: "center",
  },
  TitleText: {
    color: "black",
  },
  header: {
    width: "100%",
    flex: 2.3,
    backgroundColor: "white",
    justifyContent: "center",
    flexDirection: "row",
  },
  hGridTitles: {
    height: "90%",
    flexDirection: "column",
    backgroundColor: "black",
    flex: 1,
    margin: 5,
    alignSelf: "flex-start",
  },
  hGridInputs: {
    height: "90%",
    flexDirection: "column",
    backgroundColor: "black",
    flex: 5,
    margin: 5,
    alignSelf: "flex-start",
  },

  DatePicker: {
    flex: 1,
    justifyContent: "center",
    width: 75,
  },
  DatePickerCont: {
    backgroundColor: "white",
    height: "100%",
    backgroundColor: "white",
    paddingRight: 5,
    borderColor: "#d4d4d4",
    borderWidth: 2,
    flex: 1,
    display: "flex",
    alignItems: "flex-start",
    paddingLeft: 0,
  },
  hGridColumns: {
    flex: 1,
    margin: 4,
    backgroundColor: "white",
  },
  bodyHeader: {
    width: "100%",
    flex: 0.5,
    backgroundColor: "white",
    flexDirection: "row",
  },
  bodyScroll: {
    width: "100%",
  },
  body: {
    width: "100%",
    flex: 6,
    backgroundColor: "white",
    marginBottom: 5,
  },
  footerDoc: {
    width: "100%",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "white",
    marginTop: 5,
  },
  footerPage: {
    flexDirection: "row",
    width: "100%",
    flex: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    color: "black",
  },
  SubBtn: {
    width: "100%",
    flex: 0.75,
    backgroundColor: "green",
    justifyContent: "center",
    alignContent: "center",
  },
  SignBtn: {
    width: "100%",
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignContent: "center",
  },
  SigCap: {
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
  footerDocTitle: {
    paddingLeft: 10,
    backgroundColor: "white",
    width: "100%",
  },
  footerViewTitle: {
    flex: 1.5,
    width: "100%",
    borderBottomWidth: 2,
    borderColor: "#ededed",
  },
  footerViewContent: {
    flex: 4,
    height: "100%",
  },
  textInputTest: {
    fontSize: 15,
    width: "100%",
    height: "100%",
    color: "black",
  },
  textInputHeader: {
    fontSize: 15,
    width: "100%",
    height: "100%",
    color: "black",
    textAlign: "center",
    backgroundColor: "#ededed",
    borderWidth: 1,
    borderColor: "#d4d4d4",
    justifyContent: "center",
  },
  textInputHeaderHeader: {
    fontSize: 15,
    width: "100%",
    height: "100%",
    color: "black",
    textAlign: "center",
    backgroundColor: "#ededed",
    borderWidth: 1,
    borderColor: "#d4d4d4",
  },
  TextInputOne: {
    height: "100%",
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 5,
    borderColor: "#d4d4d4",
    borderWidth: 2,
    textAlign: "center",
  },
  TextInputTwo: {
    height: "25%",
    backgroundColor: "white",
    alignItems: "center",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  TextInputEmpty: {
    height: "100%",
    flex: 1,
    backgroundColor: "white",
    borderColor: "#d4d4d4",
    borderWidth: 1,
  },
  bGridSmall: {
    height: "100%",
    flex: 2,
    backgroundColor: "white",
    borderColor: "#d4d4d4",
    borderWidth: 1,
    flexDirection: "row",
  },
  bGridMedium: {
    height: "100%",
    flex: 4,
    backgroundColor: "black",
    borderColor: "#d4d4d4",
    borderWidth: 1,
  },
  bGridLarge: {
    height: "100%",
    flex: 8,
    backgroundColor: "white",
    borderColor: "#d4d4d4",
    borderWidth: 1,
  },
  bGridColumns: {
    backgroundColor: "#ededed",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  bodyHeaderBody: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    backgroundColor: "white",
  },
  prev: {
    flex: 2,
    height: "100%",
    width: "100%",
  },
  sigBtn: {
    width: "50%",
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignContent: "center",
  },
  footerPageSig: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  SigViewLeft: {
    height: "100%",
    flex: 1,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: "#d4d4d4",
  },
  SigViewMiddle: {
    height: "100%",
    flex: 1,
    borderWidth: 1,
    borderColor: "#d4d4d4",
  },
  SigViewRight: {
    height: "100%",
    flex: 1,
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: "#d4d4d4",
  },
});
