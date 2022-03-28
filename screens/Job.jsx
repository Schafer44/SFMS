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
import AllTimesheetDup from "./all_Folder/allTimesheetDup";

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
  const fetchJobs = async () => {
    var Job = [];
    const response = db.collection(props.route.params.job.JobNum);
    const data = await response.get();
    Job = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      baseId: doc.id,
    }));
    data.docs.forEach(() => {
      setJobs([...Job]);
    });
  };
  const [Job, setJobs] = useState([]);
  useEffect(() => {
    onSnapshot(collection(db, props.route.params.job.JobNum), (snapshot) => {
      setJobs(snapshot.docs.map((doc) => doc.data()));
    });
    //fetchJobs();
  }, []);

  return (
    <View>
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
            />
            <NewTimesheet jobNum={props.route.params.job.JobNum} tempKey={1} />
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
            />
            <NewJSA />
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
            />
            <NewForemanReport />
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
          </View>
        ) : null}
      </View>
    </View>
  );
  /*return (
    <View>
      <View style={styles.fileTypeBtn} key={"Timesheet"}>
        <Button
          style={styles.existingJobBtn}
          onPress={() => {
            return Job.map((file) => {
              file.JobNum = props.route.params.job.JobNum;
              console.log("f");
              return (
                <View style={styles.existingJob} key={file.baseId}>
                  <Button
                    style={styles.existingJobBtn}
                    onPress={() =>
                      props.navigation.navigate("Timesheet", { file })
                    }
                    title={file.baseId}
                  ></Button>
                </View>
              );
            });
          }}
          title={"Timesheet"}
        ></Button>
      </View>
      <View style={styles.fileTypeBtn} key={"JSA"}>
        <Button
          style={styles.existingJobBtn}
          onPress={() => setFileType("JSA")}
          title={"JSA"}
        ></Button>
      </View>
      <View style={styles.fileTypeBtn} key={"OQ"}>
        <Button
          style={styles.existingJobBtn}
          onPress={() => setFileType("OQ")}
          title={"OQ"}
        ></Button>
      </View>
      <View style={styles.fileTypeBtn} key={"ForemanReport"}>
        <Button
          style={styles.fileTypeBtn}
          onPress={() => setFileType("ForemanReport")}
          title={"Foreman Report"}
        ></Button>
      </View>
    </View>
  );*/

  /*return Job.map((file) => {
    if (job.JobNum.toLowerCase().includes(props.searchPhrase.toLowerCase())) {
      return (
        <View style={styles.existingJob} key={job.JobNum}>
          <Button
            style={styles.existingJobBtn}
            onPress={() => props.navigation("Job", { job })}
            title={job.JobNum}
            key={job.JobNum}
          ></Button>
        </View>
      );
    }
  });*/
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
});
