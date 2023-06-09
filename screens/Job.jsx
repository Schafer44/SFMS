import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableHighlight,
  Animated,
  Dimensions,
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
import { useMediaQuery } from "react-responsive";
import { AntDesign } from "@expo/vector-icons";

export const Job = (props) => {
  const windowWidth = Dimensions.get("window").width;
  const [contentT, setContentTimesheet] = useState(false);
  const [contentJ, setContentJSA] = useState(false);
  const [contentO, setContentOQ] = useState(false);
  const [contentF, setContentFR] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 600px)" });
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 600px)",
  });
  const [sidebar, setSidebar] = useState(false);

  const componentHideAndShowTimesheet = () => {
    if (isBigScreen) {
      handleAnimation(contentT);
      setContentTimesheet(!contentT);
      console.log(contentT);
    }
  };
  const callSetSidebar = () => {
    if (contentF || contentJ || contentO || contentT) {
      setSidebar(!sidebar);
      handleAnimation(sidebar);
    }
  };
  //
  const [rotateAnimation, setRotateAnimation] = useState(
    new Animated.Value(windowWidth)
  );

  const [rotateAnimationII, setRotateAnimationII] = useState(
    new Animated.Value(0)
  );
  const interpolateRotating = rotateAnimationII.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const animatedStyleRotate = {
    color: "white",
    marginLeft: 5,
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
  };
  const handleAnimation = (prop) => {
    var temp = 0;
    if (isBigScreen) {
      if (prop) {
        if (contentT) {
          temp++;
        }
        if (contentJ) {
          temp++;
        }
        if (contentO) {
          temp++;
        }
        if (contentF) {
          temp++;
        }
        if (temp <= 1) {
          Animated.timing(rotateAnimation, {
            toValue: windowWidth,
            duration: 250,
            useNativeDriver: true,
          }).start();

          Animated.timing(rotateAnimationII, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
          }).start();
        }
      } else {
        Animated.timing(rotateAnimation, {
          toValue: windowWidth - windowWidth / 5,
          duration: 250,
          useNativeDriver: true,
        }).start();
        Animated.timing(rotateAnimationII, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }).start();
      }
    } else {
      if (prop) {
        if (contentT) {
          temp++;
        }
        if (contentJ) {
          temp++;
        }
        if (contentO) {
          temp++;
        }
        if (contentF) {
          temp++;
        }
        if (temp <= 1) {
          Animated.timing(rotateAnimation, {
            toValue: windowWidth,
            duration: 250,
            useNativeDriver: true,
          }).start();
          Animated.timing(rotateAnimationII, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
          }).start();
        }
      } else {
        Animated.timing(rotateAnimation, {
          toValue: windowWidth - windowWidth / 2,
          duration: 250,
          useNativeDriver: true,
        }).start();
        Animated.timing(rotateAnimationII, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }).start();
      }
    }
  };
  const animatedStyle = {
    transform: [{ translateX: rotateAnimation }],
    backgroundColor: "#272727",
    borderColor: "white",
    borderLeftWidth: 1,
    padding: "1%",
    width: "20%",
    position: "absolute",
    height: "100%",
  };
  const animatedStyleSmallScreen = {
    transform: [{ translateX: rotateAnimation }],
    backgroundColor: "#272727",
    borderColor: "white",
    borderLeftWidth: 1,
    padding: "1%",
    width: "50%",
    position: "absolute",
    height: "100%",
  };

  const componentHideAndShowJSA = () => {
    if (isBigScreen) {
      handleAnimation(contentJ);
      setContentJSA(!contentJ);
    }
    //handleAnimation(contentJ);
    //setContentJSA(!contentJ);
  };
  const componentHideAndShowOQ = () => {
    if (isBigScreen) {
      handleAnimation(contentO);
      setContentOQ(!contentO);
    }
    //handleAnimation(contentO);
    //setContentOQ(!contentO);
  };
  const componentHideAndShowFR = () => {
    if (isBigScreen) {
      handleAnimation(contentF);
      setContentFR(!contentF);
    }
    //handleAnimation(contentF);
    //setContentFR(!contentF);
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
      <View style={{ flex: 1 }}>
        <Search
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
        />
      </View>
      <View style={styles.Cont}>
        <View style={styles.CollectionLeft}>
          <ScrollView style={styles.Scroll}>
            <JobTimesheetCol
              moveMargin={isBigScreen ? windowWidth / 10 : 0}
              contentT={contentT}
              contentO={contentO}
              contentF={contentF}
              contentJ={contentJ}
              ParentAnimation={componentHideAndShowTimesheet}
              setContentTimesheet={setContentTimesheet}
              searchPhrase={searchPhrase}
              setSearchPhrase={setSearchPhrase}
              navigation={props.navigation}
              route={props.route}
              Job={Job}
              isBigScreen={isBigScreen}
              sidebar={sidebar}
              setSidebar={setSidebar}
            />
            <JobJSACol
              moveMargin={isBigScreen ? windowWidth / 10 : 0}
              contentT={contentT}
              contentO={contentO}
              contentF={contentF}
              contentJ={contentJ}
              ParentAnimation={componentHideAndShowJSA}
              setContentJSA={setContentJSA}
              searchPhrase={searchPhrase}
              setSearchPhrase={setSearchPhrase}
              navigation={props.navigation}
              route={props.route}
              Job={Job}
              isBigScreen={isBigScreen}
              sidebar={sidebar}
              setSidebar={setSidebar}
            />
            <JobFRCol
              moveMargin={isBigScreen ? windowWidth / 10 : 0}
              contentT={contentT}
              contentO={contentO}
              contentF={contentF}
              contentJ={contentJ}
              ParentAnimation={componentHideAndShowFR}
              setContentFR={setContentFR}
              searchPhrase={searchPhrase}
              setSearchPhrase={setSearchPhrase}
              navigation={props.navigation}
              route={props.route}
              Job={Job}
              isBigScreen={isBigScreen}
              sidebar={sidebar}
              setSidebar={setSidebar}
            />
            <JobOQCol
              moveMargin={isBigScreen ? windowWidth / 10 : 0}
              contentO={contentO}
              contentJ={contentJ}
              ParentAnimation={componentHideAndShowOQ}
              setContentOQ={setContentOQ}
              searchPhrase={searchPhrase}
              setSearchPhrase={setSearchPhrase}
              navigation={props.navigation}
              route={props.route}
              Job={Job}
              isBigScreen={isBigScreen}
              sidebar={sidebar}
              setSidebar={setSidebar}
            />
          </ScrollView>
        </View>
        {!isBigScreen && (contentF || contentJ || contentO || contentT) ? (
          <Animated.View
            style={isBigScreen ? animatedStyle : animatedStyleSmallScreen}
          >
            {!isBigScreen ? (
              <TouchableHighlight
                style={{
                  color: "white",
                  position: "absolute",
                  left: -50,
                  width: 50,
                  height: 50,
                  top: -1,
                  backgroundColor: "red",
                  borderTopLeftRadius: "100%",
                  borderBottomLeftRadius: "100%",
                  borderColor: "white",
                  borderLeftWidth: 1,
                  borderBottomWidth: 1,
                  borderTopWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#272727",
                }}
                onPress={() => callSetSidebar()}
              >
                <Animated.View style={animatedStyleRotate}>
                  <AntDesign name="doubleleft" size={24} color="white" />
                </Animated.View>
              </TouchableHighlight>
            ) : null}
            {sidebar ? (
              <View style={{ height: "100%" }}>
                {contentT ? (
                  <View style={styles.CollectionRight}>
                    <View style={styles.CollectionRightTitleCont}>
                      <View style={styles.CollectionRightTitleContTwo}>
                        <Text style={styles.CollectionRightTitle}>
                          Timesheet
                        </Text>
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
                  <View style={styles.CollectionRightEmpty}></View>
                )}
                {contentJ ? (
                  <View style={styles.CollectionRight}>
                    <View style={styles.CollectionRightTitleCont}>
                      <View style={styles.CollectionRightTitleContTwo}>
                        <Text style={styles.CollectionRightTitle}>JSA</Text>
                      </View>
                    </View>
                    <NewJSA
                      jobNum={props.route.params.job}
                      tempKey={1}
                      job={Job}
                    />
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
                  <View style={styles.CollectionRightEmpty}></View>
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
                  <View style={styles.CollectionRightEmpty}></View>
                )}
                {contentO ? (
                  <View style={styles.CollectionRight}>
                    <View style={styles.CollectionRightTitleCont}>
                      <View style={styles.CollectionRightTitleContTwo}>
                        <Text style={styles.CollectionRightTitle}>OQ</Text>
                      </View>
                    </View>
                    <NewOQ
                      jobNum={props.route.params.job}
                      tempKey={1}
                      job={Job}
                    />
                  </View>
                ) : (
                  <View style={styles.CollectionRightEmpty}></View>
                )}
              </View>
            ) : null}
          </Animated.View>
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
    flex: 8,
    flexDirection: "row",
  },
  CollectionRight: {
    height: "22.5%",
    backgroundColor: "white",
    margin: "2.5%",
    display: "flex",
    borderRadius: "10%",
    padding: "3%",
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
    padding: "0%",
    margin: "1%",
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
  CollectionRightContEmpty: {
    flex: 0,
  },
});
