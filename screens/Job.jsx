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
import Ionicons from "@expo/vector-icons/Ionicons";
import { JobTimesheetCol } from "./JobCol/JobTimesheetCol";
import { JobOQCol } from "./JobCol/JobOQCol";
import { JobJSACol } from "./JobCol/JobJSACol";
import { JobFRCol } from "./JobCol/JobFRCol";

export const Job = (props) => {
  const [contentT, setContentTimesheet] = useState(false);
  const [contentJ, setContentJSA] = useState(false);
  const [contentO, setContentOQ] = useState(false);
  const [contentF, setContentFR] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  const componentHideAndShowJSA = () => {
    setContentJSA(!contentJ);
    //handleAnimation(contentJ);
  };
  const componentHideAndShowOQ = () => {
    setContentOQ(!contentO);
    // handleAnimation(contentO);
  };
  const componentHideAndShowFR = () => {
    setContentFR(!contentF);
    // handleAnimation(contentF);
  };
  //
  /*const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));
  const handleAnimation = (prop) => {
    if (prop) {
      Animated.timing(rotateAnimation, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        rotateAnimation.setValue(0);
      });
    } else {
      Animated.timing(rotateAnimation, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        rotateAnimation.setValue(1);
      });
    }
  };
  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });
  const animatedStyle = {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 20,
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
  };*/
  //
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
        <JobTimesheetCol
          contentT={contentT}
          setContentTimesheet={setContentTimesheet}
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          navigation={props.navigation}
          route={props.route}
          Job={Job}
        />
        <JobJSACol
          contentJ={contentJ}
          setContentJSA={setContentJSA}
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          navigation={props.navigation}
          route={props.route}
          Job={Job}
        />
        <JobFRCol
          contentF={contentF}
          setContentFR={setContentFR}
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          navigation={props.navigation}
          route={props.route}
          Job={Job}
        />
        <JobOQCol
          contentO={contentO}
          setContentOQ={setContentOQ}
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          navigation={props.navigation}
          route={props.route}
          Job={Job}
        />
        {/*
        <View>
          <View style={styles.existingJob}>
            <TouchableHighlight
              onPress={componentHideAndShowTimesheet}
              style={styles.existingJobBtn}
            >
              <View style={styles.existingJobBtnView}>
                <Ionicons
                  name="menu"
                  size={32}
                  color="white"
                  style={[styles.existingJobBtnViewTextIcon1]}
                />
                <Text style={styles.Text}>Timesheets</Text>
              </View>
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
              <View style={styles.existingJobBtnView}>
                <Ionicons
                  name="menu"
                  size={32}
                  color="white"
                  style={[styles.existingJobBtnViewTextIcon1]}
                />
                <Text style={styles.Text}>JSAs</Text>
              </View>
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
              <View style={styles.existingJobBtnView}>
                <Ionicons
                  name="menu"
                  size={32}
                  color="white"
                  style={[
                    contentF
                      ? styles.existingJobBtnViewTextIcon2
                      : styles.existingJobBtnViewTextIcon1,
                  ]}
                />
                <Text style={styles.Text}>Foreman Reports</Text>
              </View>
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
              <View style={styles.existingJobBtnView}>
                <Ionicons
                  name="menu"
                  size={32}
                  color="white"
                  style={[
                    contentO
                      ? styles.existingJobBtnViewTextIcon2
                      : styles.existingJobBtnViewTextIcon1,
                  ]}
                />
                <Text style={styles.Text}>OQs</Text>
              </View>
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
          </View>*/}
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
    height: 70,
    backgroundColor: "#272727",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  existingJobBtnView: {
    width: "100%",
    height: "100%",
    backgroundColor: "#272727",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    marginTop: 27,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    color: "white",
    fontSize: 16,
  },
  existingJobBtnViewTextIcon1: {
    position: "absolute",
    marginLeft: 10,
  },
  existingJobBtnViewTextIcon2: {
    position: "absolute",
    transform: [{ rotateZ: "90deg" }],
  },
  Scroll: {
    maxHeight: "100%",
  },
  GC: {
    maxHeight: "100%",
  },
});
