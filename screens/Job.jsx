import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { db } from "./FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import { onSnapshot, doc, collection } from "firebase/firestore";
import Timesheet from "./FileTypes/TimesheetFolder/Timesheet";
import AllTimesheet from "./all_Folder/allTimesheet";
import AllForeman from "./all_Folder/allForeman";
import AllJSA from "./all_Folder/allJSA";
import AllOQ from "./all_Folder/allOQ";
import NewForemanReport from "./NewForemanReport";
import NewJSA from "./NewJSA";
import NewTimesheet from "./NewTimesheet";
import NewOQ from "./NewOQ";
import AllTimesheetDup from "./all_Folder/allTimesheetDup";
import AllForemanDup from "./all_Folder/AllForemanDup";
import AllJSADup from "./all_Folder/allJSADup";

export const Job = (props) => {
  const [contentT, setContentTimesheet] = useState(false);
  const [contentJ, setContentJSA] = useState(false);
  const [contentO, setContentOQ] = useState(false);
  const [contentF, setContentFR] = useState(false);
  const componentHideAndShowTimesheet = () => {
    setContentTimesheet(!contentT);
  };
  const componentHideAndShowJSA = () => {
    setContentJSA(!contentJ);
  };
  const componentHideAndShowOQ = () => {
    setContentOQ(!contentO);
  };
  const componentHideAndShowFR = () => {
    setContentFR(!contentF);
  };
  //const [Job, setJobs] = useState([]);
  const [fileType, setFileType] = useState("");
  const [Job, setJobs] = useState([]);
  useEffect(() => {
    onSnapshot(collection(db, props.route.params.job.JobNum), (snapshot) => {
      setJobs(snapshot.docs.map((doc) => doc.data()));
    });
    //fetchJobs();
  }, []);

  return (
    <View style={styles.GC}>
      <ScrollView style={styles.Scroll}>
        <View>
          <View style={styles.existingJob}>
            <Button
              title="Timesheet"
              onPress={componentHideAndShowTimesheet}
              style={styles.existingJobBtn}
            />
          </View>
          {contentT ? (
            <View>
              <AllTimesheet
                job={Job}
                navigation={props.navigation}
                jobNum={props.route.params.job.JobNum}
                user={props.route.params.job.user}
              />
              <NewTimesheet
                jobNum={props.route.params.job.JobNum}
                tempKey={1}
              />
              <AllTimesheetDup
                job={Job}
                navigation={props.navigation}
                jobNum={props.route.params.job.JobNum}
              />
            </View>
          ) : null}
        </View>
        <View>
          <View style={styles.existingJob}>
            <Button
              title="JSA"
              onPress={componentHideAndShowJSA}
              style={styles.existingJobBtn}
            />
          </View>
          {contentJ ? (
            <View>
              <AllJSA
                job={Job}
                navigation={props.navigation}
                jobNum={props.route.params.job.JobNum}
                user={props.route.params.job.user}
              />
              <NewJSA jobNum={props.route.params.job.JobNum} tempKey={2} />
              <AllJSADup
                job={Job}
                navigation={props.navigation}
                jobNum={props.route.params.job.JobNum}
              />
            </View>
          ) : null}
        </View>
        <View>
          <View style={styles.existingJob}>
            <Button
              title="Foreman Report"
              onPress={componentHideAndShowFR}
              style={styles.existingJobBtn}
            />
          </View>
          {contentF ? (
            <View>
              <AllForeman
                job={Job}
                navigation={props.navigation}
                jobNum={props.route.params.job.JobNum}
                user={props.route.params.job.user}
              />
              <NewForemanReport
                jobNum={props.route.params.job.JobNum}
                tempKey={3}
              />
              <AllForemanDup
                job={Job}
                navigation={props.navigation}
                jobNum={props.route.params.job.JobNum}
              />
            </View>
          ) : null}
        </View>
        <View>
          <View style={styles.existingJob}>
            <Button
              title="OQ"
              onPress={componentHideAndShowOQ}
              style={styles.existingJobBtn}
            />
          </View>
          {contentO ? (
            <View>
              <AllOQ
                job={Job}
                navigation={props.navigation}
                jobNum={props.route.params.job.JobNum}
              />

              <NewOQ jobNum={props.route.params.job.JobNum} tempKey={1} />
            </View>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  existingJob: {
    width: "100%",
    height: 100,
    backgroundColor: "#272727",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  fileTypeBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    color: "white",
  },
  btn: {
    height: 100,
    width: 100,
  },
  existingJobBtn: {
    width: "100%",
    height: 100,
    backgroundColor: "white",
  },
  Text: {
    color: "white",
  },
  Scroll: {
    maxHeight: "100%",
  },
  GC: {
    maxHeight: "100%",
  },
});
