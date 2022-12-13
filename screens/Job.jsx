import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableHighlight,
} from "react-native";
import { db } from "./FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import {
  onSnapshot,
  doc,
  collection,
  orderBy,
  query,
} from "firebase/firestore";
import Timesheet from "./FileTypes/TimesheetFolder/Timesheet";
import AllTimesheet from "./all_Folder/allTimesheet";
import AllForeman from "./all_Folder/allForeman";
import AllJSA from "./all_Folder/allJSA";
import AllOQ from "./all_Folder/allOQ";
import NewForemanReport from "./NewForemanReport";
import NewJSA from "./NewJSA";
import NewTimesheet from "./NewTimesheet";
import NewTimesheetFE from "./NewExistingTS";
import NewJSAFE from "./NewExistingJSA";
import NewForemanReportFE from "./NewExistingFR";
import NewOQ from "./NewOQ";
import AllTimesheetDup from "./all_Folder/allTimesheetDup";
import AllForemanDup from "./all_Folder/AllForemanDup";
import AllJSADup from "./all_Folder/allJSADup";
import Search from "./Search";

export const Job = (props) => {
  const [contentT, setContentTimesheet] = useState(false);
  const [contentJ, setContentJSA] = useState(false);
  const [contentO, setContentOQ] = useState(false);
  const [contentF, setContentFR] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
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
    const unsubscribe = onSnapshot(
      query(
        collection(db, props.route.params.job.JobNum),
        orderBy("id", "desc")
      ),
      (snapshot) => {
        setJobs(snapshot.docs.map((doc) => doc.data()));
      }
    );

    return () => {
      unsubscribe();
    };
    //fetchJobs();
  }, []);

  return (
    <View style={styles.GC}>
      <Search
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      <ScrollView style={styles.Scroll}>
        <View>
          <View style={styles.existingJob}>
            <TouchableHighlight
              onPress={componentHideAndShowTimesheet}
              style={styles.existingJobBtn}
            >
              <Text style={styles.Text}>Timesheets</Text>
            </TouchableHighlight>
          </View>
          {contentT ? (
            <View>
              <AllTimesheet
                job={Job}
                navigation={props.navigation}
                jobNum={props.route.params.job.JobNum}
                user={props.route.params.job.user}
                searchPhrase={searchPhrase}
              />
              <NewTimesheet
                jobNum={props.route.params.job.JobNum}
                tempKey={1}
                job={Job}
              />
              <NewTimesheetFE
                jobNum={props.route.params.job.JobNum}
                tempKey={1}
                job={Job}
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
            <TouchableHighlight
              onPress={componentHideAndShowJSA}
              style={styles.existingJobBtn}
            >
              <Text style={styles.Text}>JSAs</Text>
            </TouchableHighlight>
          </View>
          {contentJ ? (
            <View>
              <AllJSA
                job={Job}
                navigation={props.navigation}
                jobNum={props.route.params.job.JobNum}
                user={props.route.params.job.user}
                searchPhrase={searchPhrase}
              />
              <NewJSA
                jobNum={props.route.params.job.JobNum}
                tempKey={2}
                job={Job}
              />
              <NewJSAFE
                jobNum={props.route.params.job.JobNum}
                tempKey={2}
                job={Job}
              />
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
            <TouchableHighlight
              onPress={componentHideAndShowFR}
              style={styles.existingJobBtn}
            >
              <Text style={styles.Text}>Foreman Reports</Text>
            </TouchableHighlight>
          </View>
          {contentF ? (
            <View>
              <AllForeman
                job={Job}
                navigation={props.navigation}
                jobNum={props.route.params.job.JobNum}
                user={props.route.params.job.user}
                searchPhrase={searchPhrase}
              />
              <NewForemanReport
                jobNum={props.route.params.job.JobNum}
                tempKey={3}
                job={Job}
              />
              <NewForemanReportFE
                jobNum={props.route.params.job.JobNum}
                tempKey={3}
                job={Job}
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
            <TouchableHighlight
              onPress={componentHideAndShowOQ}
              style={styles.existingJobBtn}
            >
              <Text style={styles.Text}>OQs</Text>
            </TouchableHighlight>
          </View>
          {contentO ? (
            <View>
              <AllOQ
                job={Job}
                navigation={props.navigation}
                jobNum={props.route.params.job.JobNum}
              />

              <NewOQ
                jobNum={props.route.params.job.JobNum}
                tempKey={1}
                job={Job}
              />
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
    backgroundColor: "#272727",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
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
