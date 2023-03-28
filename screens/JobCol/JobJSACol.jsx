import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Animated,
} from "react-native";
import React, { useState } from "react";
import AllJSA from "../all_Folder/allJSA";
import NewJSA from "../NewJSA";
import NewJSAFE from "../NewExistingJSA";
import AllJSADup from "../all_Folder/allJSADup";
import Ionicons from "@expo/vector-icons/Ionicons";

export const JobJSACol = (props) => {
  const componentHideAndShowJSA = () => {
    props.setContentJSA(!props.contentJ);
    handleAnimation(props.contentJ);
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
  //const [props.props.Job, setJobs] = useState([]);
  const [fileType, setFileType] = useState("");

  return (
    <View style={styles.GC}>
      <View>
        <View style={styles.existingJob}>
          <TouchableHighlight
            onPress={componentHideAndShowJSA}
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
              <Text style={styles.Text}>JSAs</Text>
            </View>
          </TouchableHighlight>
        </View>
        {props.contentJ ? (
          <View>
            <AllJSA
              job={props.Job}
              navigation={props.navigation}
              jobNum={props.route.params.job}
              user={props.route.params.job.user}
              searchPhrase={props.searchPhrase}
            />
            <NewJSA
              jobNum={props.route.params.job}
              tempKey={2}
              job={props.Job}
            />
            <NewJSAFE
              jobNum={props.route.params.job}
              tempKey={2}
              job={props.Job}
            />
            <AllJSADup
              job={props.Job}
              navigation={props.navigation}
              jobNum={props.route.params.job}
            />
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
