import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { db } from "./FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import Timesheet from "./FileTypes/Timesheet";
import AllTimesheet from "./allTimesheet";
export const Job = (props) => {
  const [content, setContent] = useState(true);
  componentHideAndShow = () => {
    setContent(!content);
  };
  const [Job, setJobs] = useState([]);
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
    data.docs.forEach((item) => {
      setJobs([...Job]);
    });
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  console.log("qw", props);
  return (
    <View>
      <Button title="Hide Text Component" onPress={componentHideAndShow} />
      {content ? (
        <View>
          <AllTimesheet
            job={Job}
            navigation={props.navigation}
            jobNum={props.route.params.job.JobNum}
          />
        </View>
      ) : null}
    </View>
  );
  return (
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
  );

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
    height: 70,
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
    backgroundColor: "white",
  },
  Text: {
    color: "white",
  },
});
