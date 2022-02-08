import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
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

export default function Timesheet() {
  const [formTestBox, setformTestBox] = useState("");
  const [comment, setComment] = useState("");

  const [Proj, setProj] = useState("");
  const [Date, setDate] = useState("");
  const [Day, setDay] = useState("");
  const [Crew, setCrew] = useState("");

  var TempName;
  var TempBaseId;
  var TempId;
  const [Job, setJob] = useState([]);
  const fetchJob = async () => {
    var Job = [];
    const response = db.collection("TestJob101");
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
  console.log(Job);

  const createTimesheet = (Timesheet) => {
    //Job.push(Timesheet);
    const docRef = doc(db, "TestJob101", "YW6v7l5t77zSbvnjUxwg");
    //const reference = ref(db, "TestJob101");
    const docSnap = getDoc(docRef);
    setDoc(docRef, {
      displayName: "TEST2",
    });
    /*setDoc(reference, {
      id: Timesheet.id,
    });*/

    /*
     <TimesheetLine
            Name={Name}
            setName={setName}
            Occ={Occ}
            setOcc={setOcc}
            Hrs={Hrs}
            setHrs={setHrs}
            PU={PU}
            setPu={setPU}
            Rig={Rig}
            setRig={setRig}
            PD={PD}
            setPD={setPD}
            EquipNum={EquipNum}
            setEquipNum={setEquipNum}
            EquipDesc={EquipDesc}
            setEquipDesc={setEquipDesc}
          />
    */
    console.log("3", Job);
  };
  return (
    <View style={styles.globalContainer}>
      <View style={styles.header}>
        <View style={styles.hGrid}>
          <View style={styles.hGridColumns}>
            {/*Job.forEach((file) => {
              file.id;
            })*/}
          </View>
          <View style={styles.hGridColumns}></View>
          <View style={styles.hGridColumns}></View>
          <View style={styles.hGridColumns}></View>
        </View>
        <View style={styles.hGrid}>
          <View style={styles.hGridColumns}></View>
          <View style={styles.hGridColumns}></View>
          <View style={styles.hGridColumns}></View>
          <View style={styles.hGridColumns}></View>
        </View>
      </View>

      <View style={styles.body}>
        <ScrollView style={styles.bodyScroll}>
          <TimesheetLine />
          <TimesheetLine />
          <TimesheetLine />
          <TimesheetLine />
          <TimesheetLine />
          <TimesheetLine />
          <TimesheetLine />
        </ScrollView>
      </View>
      <View style={styles.footerDoc}>
        <View style={styles.footerViewTitle}>
          <Text style={styles.footerDocTitle}>Additional Comments</Text>
        </View>
        <View style={styles.footerViewContent}>
          <TimesheetLineComment comment={comment} setComment={setComment} />
        </View>
      </View>
      <View style={styles.footerPage}>
        <TouchableOpacity
          style={styles.SigCap}
          title="Signature"
          underlayColor="#fff"
          /*onPress={() => {
            createTimesheet({
              TempName: "TestTimesheet",
              TempBaseId: "001",
              TempId: "1",
            });
          }}*/
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
}

const styles = StyleSheet.create({
  globalContainer: {
    marginTop: 20,
    width: "100%",
    flex: 1,
  },
  header: {
    width: "100%",
    flex: 2,
    backgroundColor: "darkgrey",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    flexDirection: "row",
  },
  hGrid: {
    height: "90%",
    flexDirection: "column",
    backgroundColor: "black",
    flex: 1,
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
    backgroundColor: "darkgrey",
    marginBottom: 5,
    borderColor: "black",
    borderBottomWidth: 4,
    borderTopWidth: 4,
  },
  footerDoc: {
    width: "100%",
    flexDirection: "column",
    flex: 1.5,
    backgroundColor: "darkgrey",
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
});
