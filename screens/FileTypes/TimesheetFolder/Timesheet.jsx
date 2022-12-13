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
import React, { useState, useEffect } from "react";
import { SignatureCapture } from "../SignatureCapture";
import TimesheetLineComment from "./TimesheetComment";
import { doc, getDoc, setDoc } from "firebase/firestore";
import TimesheetBody from "./TimesheetBody";
import { useHeaderHeight } from "@react-navigation/elements";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../../Loading";

export default function Timesheet(props, jobNum) {
  const [signature, setSign] = useState(null);
  const [Comment, setComment] = useState("");
  const [Lines, setLines] = useState([]);
  const [Header, setHeader] = useState([]);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [Body, setBody] = useState([]);
  const [Job, setJob] = useState([]);
  const [visible, setVisible] = useState(false);
  const [headerHeight] = useState(useHeaderHeight());
  const [isLoading, setIsLoading] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const setDate = (event, date) => {
    console.log(date);
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
    //setLines({ Line: props.route.params.file.Timesheet });
  };
  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (props.route.params.offline) {
        setHeader({
          ...Header,
          Date: new Date().toString(),
        });
        setBody({});
        setComment("");
        setSign(null);
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
        if (props.route.params.file.signature !== undefined) {
          setSign(props.route.params.file.signature);
        }
      }
    }
    return () => {
      // cancel the subscription
      isSubscribed = false;
    };
  }, []);
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
            signature: signature,
          })
        );
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
      if (signature === null) {
        Alert.alert("Signature Required");
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
          signature: signature,
          lastUpdatedBy: props.route.params.file.user,
          TypeExtra: props.route.params.file.TypeExtra,
          id: props.route.params.file.id,
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
      <View style={styles.header}>
        {isLoading ? <Loading /> : <View></View>}
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
                value={new Date(Header.Date)}
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
      <View style={styles.bodyHeader}>
        <View style={styles.bodyHeaderBody}>
          <View style={styles.bGridLarge}>
            <View style={styles.bGridColumns}>
              <Text style={styles.textInputHeaderHeader}>Name</Text>
            </View>
          </View>
          <View style={styles.bGridSmall}>
            <View style={styles.bGridColumns}>
              <Text style={styles.textInputHeaderHeader}>Occ</Text>
            </View>
          </View>
          <View style={styles.bGridSmall}>
            <View style={styles.bGridColumns}>
              <Text style={styles.textInputHeaderHeader}>Hrs.</Text>
            </View>
          </View>
          <View style={styles.bGridSmall}>
            <View style={styles.bGridColumns}>
              <Text style={styles.textInputHeaderHeader}>P/U</Text>
            </View>
          </View>
          <View style={styles.bGridSmall}>
            <View style={styles.bGridColumns}>
              <Text style={styles.textInputHeaderHeader}>Rig</Text>
            </View>
          </View>
          <View style={styles.bGridSmall}>
            <View style={styles.bGridColumns}>
              <Text style={styles.textInputHeaderHeader}>P/D</Text>
            </View>
          </View>
          <View style={styles.bGridMedium}>
            <View style={styles.bGridColumns}>
              <Text style={styles.textInputHeaderHeader}>Equip No.</Text>
            </View>
          </View>
          <View style={styles.bGridLarge}>
            <View style={styles.bGridColumns}>
              <Text style={styles.textInputHeaderHeader}>
                Equip Description
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <TimesheetBody T8={Body} setT8={setBody} />
      </View>
      <View style={styles.footerDoc}>
        <View style={styles.footerViewTitle}>
          <Text style={styles.footerDocTitle}>Additional Comments</Text>
        </View>
        <View style={styles.footerViewContent}>
          <TimesheetLineComment Comment={Comment} setComment={setComment} />
        </View>
      </View>
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
        </View>

        <Image
          resizeMode={"contain"}
          style={styles.prev}
          source={{ uri: signature }}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  globalContainer: {
    width: "100%",
    flex: 1,
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
    paddingLeft: 5,
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    color: "black",
  },
  SubBtn: {
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
    flex: 1,
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
    flex: 2,
    flexDirection: "column",
  },
});
