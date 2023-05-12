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
  };
  const componentHideAndShowOQ = () => {
    setContentOQ(!contentO);
  };
  const componentHideAndShowFR = () => {
    setContentFR(!contentF);
  };
  const [fileType, setFileType] = useState("");
  const [Job, setJobs] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, props.route.params.job), orderBy("id", "desc")),
      (snapshot) => {
        setJobs(snapshot.docs.map((doc) => doc.data()));
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.GC}>
      <Search
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      <View style={styles.Cont}>
        <View style={styles.CollectionLeft}>
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
          </ScrollView>
        </View>
        {contentT || contentJ || contentO || contentF ? (
          <View style={styles.CollectionRightCont}>
            {contentT ? (
              <View style={styles.CollectionRight}>
                <View style={styles.CollectionRightTitleCont}>
                  <View style={styles.CollectionRightTitleContTwo}>
                    <Text style={styles.CollectionRightTitle}>Timesheet</Text>
                  </View>
                </View>
                <NewTimesheet
                  jobNum={props.route.params.job}
                  tempKey={1}
                  job={Job}
                />
                <NewTimesheetFE
                  jobNum={props.route.params.job}
                  tempKey={1}
                  job={Job}
                />
                <AllTimesheetDup
                  job={Job}
                  navigation={props.navigation}
                  jobNum={props.route.params.job}
                />
              </View>
            ) : (
              <View style={styles.CollectionRight}></View>
            )}
            {contentJ ? (
              <View style={styles.CollectionRight}>
                <View style={styles.CollectionRightTitleCont}>
                  <View style={styles.CollectionRightTitleContTwo}>
                    <Text style={styles.CollectionRightTitle}>JSA</Text>
                  </View>
                </View>
                <NewJSA jobNum={props.route.params.job} tempKey={1} job={Job} />
                <NewJSAFE
                  jobNum={props.route.params.job}
                  tempKey={1}
                  job={Job}
                />
                <AllJSADup
                  job={Job}
                  navigation={props.navigation}
                  jobNum={props.route.params.job}
                />
              </View>
            ) : (
              <View style={styles.CollectionRight}></View>
            )}
            {contentF ? (
              <View style={styles.CollectionRight}>
                <View style={styles.CollectionRightTitleCont}>
                  <View style={styles.CollectionRightTitleContTwo}>
                    <Text style={styles.CollectionRightTitle}>
                      Foreman Report
                    </Text>
                  </View>
                </View>
                <NewForemanReport
                  jobNum={props.route.params.job}
                  tempKey={1}
                  job={Job}
                />
                <NewForemanReportFE
                  jobNum={props.route.params.job}
                  tempKey={1}
                  job={Job}
                />
                <AllForemanDup
                  job={Job}
                  navigation={props.navigation}
                  jobNum={props.route.params.job}
                />
              </View>
            ) : (
              <View style={styles.CollectionRight}></View>
            )}
            {contentO ? (
              <View style={styles.CollectionRight}>
                <View style={styles.CollectionRightTitleCont}>
                  <View style={styles.CollectionRightTitleContTwo}>
                    <Text style={styles.CollectionRightTitle}>OQ</Text>
                  </View>
                </View>
                <NewOQ jobNum={props.route.params.job} tempKey={1} job={Job} />
              </View>
            ) : (
              <View style={styles.CollectionRight}></View>
            )}
          </View>
        ) : null}
      </View>
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
    height: "100%",
  },
  GC: {
    height: "100%",
    maxHeight: "100%",
  },
  Cont: {
    display: "flex",
    flexDirection: "row",
  },
  CollectionRight: {
    height: "22.5%",
    backgroundColor: "white",
    margin: "2.5%",
    display: "flex",
  },
  CollectionRightTitleCont: {
    flex: 1,
    width: "100%",
    padding: "0%",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  },

  CollectionRightTitleContTwo: {
    width: "95%",
    flex: 1,
    width: "95%",
    padding: "0%",
    margin: "1%",
    width: "95%",
    backgroundColor: "#272727",
    marginBottom: "1%",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  CollectionRightTitle: {
    color: "white",
  },
  CollectionRightCont: {
    flex: 1,
    borderLeftWidth: 1,
    backgroundColor: "#272727",
    padding: "1%",
  },
  CollectionLeft: {
    flex: 4,
    maxHeight: "100%",
    height: "93%",
  },
});
