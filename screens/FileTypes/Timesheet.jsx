import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { db } from "../FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import TimesheetLine from "./TimesheetLine";
import { SignatureCapture } from "./SignatureCapture";
import TimesheetLineComment from "./TimesheetComment";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export default function Timesheet(props, jobNum) {
  const [Comment, setComment] = useState("");
  const [Proj, setProj] = useState("");
  const [Date, setDate] = useState("");
  const [Day, setDay] = useState("");
  const [Crew, setCrew] = useState("");
  const [Lines, setLines] = useState([]);
  const [Header, setHeader] = useState([]);
  var TempName;
  var TempBaseId;
  var TempId;
  const [Job, setJob] = useState([]);

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
    fetchJob();
    if (props.route.params.file.TimesheetLines != undefined) {
      setLines(props.route.params.file.TimesheetLines);
    }
    if (props.route.params.file.TimesheetHeader !== undefined) {
      setHeader(props.route.params.file.TimesheetHeader);
    }
  }, []);
  const createTimesheet = (Timesheet) => {
    //Job.push(Timesheet);
    const docRef = doc(
      db,
      props.route.params.file.JobNum,
      props.route.params.file.baseId
    );
    //const reference = ref(db, "TestJob101");
    const docSnap = getDoc(docRef);

    console.log("ji", Header);
    setDoc(docRef, {
      TimesheetHeader: Header,
      TimesheetLines: Lines,
    });
  };
  return (
    <View style={styles.globalContainer}>
      <View style={styles.header}>
        <View style={styles.hGridTitles}>
          <View style={styles.TextInputTwo}>
            <Text style={styles.textInputHeader}>Project: </Text>
          </View>
          <View style={styles.TextInputTwo}>
            <Text style={styles.textInputHeader}>Date: </Text>
          </View>
          <View style={styles.TextInputTwo}>
            <Text style={styles.textInputHeader}>Day of the week: </Text>
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
          <View style={styles.TextInputOne}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Header.Date}
              onChange={(event) => {
                setHeader({ ...Header, Date: event.nativeEvent.text });
              }}
            />
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
        <ScrollView style={styles.bodyScroll}>
          <TimesheetLine Lines={Lines} setLines={setLines} id={0} />
          <TimesheetLine Lines={Lines} setLines={setLines} id={1} />
        </ScrollView>
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
        <TouchableOpacity
          style={styles.SigCap}
          title="Signature"
          underlayColor="#fff"
          onPress={() => {
            navigator;
            createTimesheet({
              TempName: "TestTimesheet",
              TempBaseId: "001",
              TempId: "1",
            });
          }}
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
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  /* <TimesheetLine
            Lines={Lines}
            setLines={setLines}
            id={1}
            tempLine={props.route.params.file.Timesheet}
          />
          <TimesheetLine
            Lines={Lines}
            setLines={setLines}
            id={2}
            tempLine={props.route.params.file.Timesheet.Lines[2]}
          />
          <TimesheetLine
            Lines={Lines}
            setLines={setLines}
            id={3}
            tempLine={props.route.params.file.Timesheet.Lines[3]}
          />
          <TimesheetLine
            Lines={Lines}
            setLines={setLines}
            id={4}
            tempLine={props.route.params.file.Timesheet.Lines[4]}
          />
          <TimesheetLine
            Lines={Lines}
            setLines={setLines}
            id={5}
            tempLine={props.route.params.file.Timesheet.Lines[5]}
          />
          <TimesheetLine
            Lines={Lines}
            setLines={setLines}
            id={6}
            tempLine={props.route.params.file.Timesheet.Lines[6]}
          />*/
}

const styles = StyleSheet.create({
  globalContainer: {
    width: "100%",
    flex: 1,
  },
  header: {
    width: "100%",
    flex: 2,
    backgroundColor: "#d4d4d4",
    alignItems: "center",
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
  hGridColumns: {
    flex: 1,
    margin: 4,
    backgroundColor: "white",
  },
  bodyScroll: {
    width: "100%",
  },
  body: {
    width: "100%",
    flex: 6,
    backgroundColor: "#d4d4d4",
    marginBottom: 5,
    borderColor: "black",
    borderBottomWidth: 4,
    borderTopWidth: 4,
  },
  footerDoc: {
    width: "100%",
    flexDirection: "column",
    flex: 1.5,
    backgroundColor: "#d4d4d4",
    marginTop: 5,
  },
  footerPage: {
    flexDirection: "column",
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
    paddingLeft: 5,
    borderColor: "black",
    borderBottomWidth: 4,
    backgroundColor: "white",
    width: "100%",
  },
  footerViewTitle: {
    flex: 1,
    width: "100%",
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
  },
  TextInputOne: {
    height: "100%",
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 5,
    borderColor: "black",
    borderWidth: 2,
    textAlign: "center",
  },
  TextInputTwo: {
    height: "100%",
    flex: 1,
    backgroundColor: "#d4d4d4",
    paddingTop: 10,
  },
  TextInputEmpty: {
    height: "100%",
    flex: 1,
    backgroundColor: "#d4d4d4",
    borderColor: "#d4d4d4",
    borderWidth: 2,
  },
});
