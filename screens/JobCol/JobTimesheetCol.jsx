import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Animated,
} from "react-native";
import React, { useState } from "react";
import AllTimesheet from "../all_Folder/allTimesheet";
import Ionicons from "@expo/vector-icons/Ionicons";

export const JobTimesheetCol = (props) => {
  // Function to toggle visibility of Timesheet component and handle animations
  const componentHideAndShowTimesheet = () => {
    // Toggle visibility and trigger animations
    props.setContentTimesheet(!props.contentT);
    handleAnimation(props.contentT);
    props.ParentAnimation(props.contentT);
  };

  // State variables for rotate and move animations
  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));
  const [moveAnimation, setMoveAnimation] = useState(new Animated.Value(0));

  // Function to handle animations based on the given property
  const handleAnimation = (prop) => {
    if (prop) {
      // Reverse animations when property is true
      Animated.timing(rotateAnimation, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        rotateAnimation.setValue(0);
      });

      Animated.timing(moveAnimation, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        moveAnimation.setValue(0);
      });
    } else {
      // Forward animations when property is false
      Animated.timing(rotateAnimation, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        rotateAnimation.setValue(1);
      });

      if (props.isBigScreen || props.sidebar) {
        Animated.timing(moveAnimation, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }).start(() => {
          moveAnimation.setValue(1);
        });
      }
    }
  };

  // Interpolation for rotating animation
  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });

  // Interpolation for movement animation
  const interpolateMovement = moveAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -props.moveMargin], // Assuming moveMargin is a prop
  });

  // Styles for rotating animation and movement animation
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

  const animatedStyleII = {
    transform: [
      {
        translateX: interpolateMovement,
      },
    ],
  };

  // State variable for file type
  const [fileType, setFileType] = useState("");

  return (
    <View style={styles.GC}>
      <View>
        <View style={styles.existingJob}>
          <TouchableHighlight
            onPress={componentHideAndShowTimesheet}
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
              <Animated.View style={animatedStyleII}>
                <Text style={styles.Text}>Timesheets</Text>
              </Animated.View>
            </View>
          </TouchableHighlight>
        </View>
        {props.contentT ? (
          <View style={styles.Collection}>
            <View style={styles.CollectionRight}>
              <AllTimesheet
                job={props.Job}
                navigation={props.navigation}
                jobNum={props.route.params.job}
                user={props.route.params.job.user}
                searchPhrase={props.searchPhrase}
                visible={props.visibleEdit}
                isBigScreen={props.isBigScreen}
              />
            </View>
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
  Collection: { display: "flex", flexDirection: "row-reverse" },
  CollectionRight: { flex: 3 },
  CollectionLeft: {
    flex: 1,
  },
  CollectionLeftCont: {},
});
