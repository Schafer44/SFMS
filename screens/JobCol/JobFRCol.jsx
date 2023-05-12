import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Animated,
} from "react-native";
import React, { useState } from "react";
import AllForeman from "../all_Folder/allForeman";
import NewForemanReport from "../NewForemanReport";
import NewForemanReportFE from "../NewExistingFR";
import AllForemanDup from "../all_Folder/AllForemanDup";
import Ionicons from "@expo/vector-icons/Ionicons";

export const JobFRCol = (props) => {
  const componentHideAndShowFR = () => {
    props.setContentFR(!props.contentF);
    handleAnimation(props.contentF);
  };
  //
  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));
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
  };
  //
  //const [props.Job, setJobs] = useState([]);
  const [fileType, setFileType] = useState("");

  return (
    <View style={styles.GC}>
      <View>
        <View style={styles.existingJob}>
          <TouchableHighlight
            onPress={componentHideAndShowFR}
            style={styles.existingJobBtn}
          >
            <View style={styles.existingJobBtnView}>
              <Animated.View style={animatedStyle}>
                <Ionicons
                  name="menu"
                  size={24}
                  color="white"
                  style={[styles.existingJobBtnViewTextIcon1]}
                />
              </Animated.View>
              <Text style={styles.Text}>Foreman Reports</Text>
            </View>
          </TouchableHighlight>
        </View>
        {props.contentF ? (
          <View>
            <AllForeman
              job={props.Job}
              navigation={props.navigation}
              jobNum={props.route.params.job}
              user={props.route.params.job.user}
              searchPhrase={props.searchPhrase}
            />
            {/*<NewForemanReport
              jobNum={props.route.params.job}
              tempKey={3}
              job={props.Job}
            />
            <NewForemanReportFE
              jobNum={props.route.params.job}
              tempKey={3}
              job={props.Job}
            />
            <AllForemanDup
              job={props.Job}
              navigation={props.navigation}
              jobNum={props.route.params.job}
        />*/}
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
  animatedStyle: {},
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
  GC: {},
});
