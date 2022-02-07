import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { db } from "../FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import TimesheetLine from "./TimesheetLine";
import { SignatureCapture } from "./SignatureCapture";
import TimesheetLineComment from "./TimesheetComment";

export default function Timesheet() {
  const [formTestBox, setformTestBox] = useState("");
  const [comment, setComment] = useState("");
  var Name;
  var baseId;
  var id;
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

  const createTimesheet = async (Timesheet) => {
    var TempJob = [];

    console.log("1", Timesheet);
    TempJob = Job + Timesheet;
    console.log("2", TempJob);
    //setJob([...TempJob]);
  };
  console.log(Job);
  return (
    <View style={styles.globalContainer}>
      <View style={styles.header}>
        <View style={styles.hGrid}>
          <View style={styles.hGridColumns}></View>
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
        <Button
          title="test"
          onPress={() => {
            createTimesheet([
              (Name = "TestTimesheet"),
              (baseId = "001"),
              (id = "1"),
            ]);
          }}
        />
        <ScrollView style={styles.bodyScroll}>
          <TimesheetLine
            formTestBox={formTestBox}
            setformTestBox={setformTestBox}
          />
          <TimesheetLine
            formTestBox={formTestBox}
            setformTestBox={setformTestBox}
          />
          <TimesheetLine
            formTestBox={formTestBox}
            setformTestBox={setformTestBox}
          />
          <TimesheetLine
            formTestBox={formTestBox}
            setformTestBox={setformTestBox}
          />
          <TimesheetLine
            formTestBox={formTestBox}
            setformTestBox={setformTestBox}
          />
          <TimesheetLine
            formTestBox={formTestBox}
            setformTestBox={setformTestBox}
          />
          <TimesheetLine
            formTestBox={formTestBox}
            setformTestBox={setformTestBox}
          />
          <TimesheetLine
            formTestBox={formTestBox}
            setformTestBox={setformTestBox}
          />
          <TimesheetLine
            formTestBox={formTestBox}
            setformTestBox={setformTestBox}
          />
          <TimesheetLine
            formTestBox={formTestBox}
            setformTestBox={setformTestBox}
          />
          <TimesheetLine
            formTestBox={formTestBox}
            setformTestBox={setformTestBox}
          />
          <TimesheetLine
            formTestBox={formTestBox}
            setformTestBox={setformTestBox}
          />
          <TimesheetLine
            formTestBox={formTestBox}
            setformTestBox={setformTestBox}
          />
          <TimesheetLine
            formTestBox={formTestBox}
            setformTestBox={setformTestBox}
          />
          <TimesheetLine
            formTestBox={formTestBox}
            setformTestBox={setformTestBox}
          />
          <TimesheetLine
            formTestBox={formTestBox}
            setformTestBox={setformTestBox}
          />
          <TimesheetLine
            formTestBox={formTestBox}
            setformTestBox={setformTestBox}
          />
          <TimesheetLine
            formTestBox={formTestBox}
            setformTestBox={setformTestBox}
          />
          <TimesheetLine
            formTestBox={formTestBox}
            setformTestBox={setformTestBox}
          />
        </ScrollView>
      </View>
      <View style={styles.footerDoc}>
        <TimesheetLineComment comment={comment} setComment={setComment} />
      </View>
      <View style={styles.footerPage}></View>
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
    flexDirection: "row",
    flex: 1.5,
    backgroundColor: "darkgrey",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  footerPage: {
    width: "100%",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "darkgrey",
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    color: "black",
  },
});
