import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity,
} from "react-native";
import Jobs from "./Jobs";
import { db } from "./FirebaseLink";
import Search from "./Search";
import { useHeaderHeight } from "@react-navigation/elements";
import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import PopupWithInput from "./Popup";
import { handleSignOut } from "./FirebaseLink";

export default function Home(props) {
  // State variables for count and visibility
  const [visible, setVisible] = useState(false);

  // Function to create a new Timesheet with validation
  const NewTimesheet = async (jobNum) => {
    // Validation checks for job number
    if (jobNum === "") {
      Alert.alert("Please Insert Job Number");
    } else if (jobNum.includes("/")) {
      Alert.alert("Job number cannot include any /");
    } else if (jobNum.includes("%20")) {
      Alert.alert("Job number cannot include any %20");
    } else if (jobNum.includes("_")) {
      Alert.alert("Job number cannot include any _");
    } else {
      // Initialize temporary variables for JSA, FR, and Timesheet IDs
      let TempJSA = "";
      let TempFR = "";
      let TempTS = "";

      // Check if the job already exists
      await db
        .collection(props.route.params[1] + "_" + jobNum)
        .limit(1)
        .get()
        .then(async (snapshot) => {
          if (snapshot.size === 0) {
            // Create a new Timesheet
            await db
              .collection(props.route.params[1] + "_" + jobNum)
              .add({})
              .then((docRef) => {
                TempTS = docRef.id;
                setDoc(docRef, {
                  TimesheetHeader: {},
                  TimesheetLines: { line0: ["", "", "", "", "", "", ""] },
                  Comment: "",
                  Type: "Timesheet",
                  baseId: docRef.id,
                  lastUpdatedBy: "Admin",
                  TypeExtra: "Template",
                  id: 0,
                });
              });

            // Create a new Foreman Report
            await db
              .collection(props.route.params[1] + "_" + jobNum)
              .add({})
              .then((docRef) => {
                TempFR = docRef.id;
                setDoc(docRef, {
                  Type: "Foreman Report",
                  TypeExtra: "Template",
                  baseId: docRef.id,
                  Header: [{ Line0: {} }],
                  T1: [{ Line0: {} }, { Line1: {} }],
                  T2: [{ Line0: {} }],
                  T3: [{ Line0: {} }],
                  T4: [{ Line0: {} }],
                  T5: [{ Line0: {} }],
                  T6: [{ Line0: {} }, { Line1: {} }],
                  T7: [{ Line0: {} }],
                  id: 1,
                });
              });

            // Create a new JSA
            await db
              .collection(props.route.params[1] + "_" + jobNum)
              .add({})
              .then((docRef) => {
                TempJSA = docRef.id;
                setDoc(docRef, {
                  Type: "JSA",
                  TypeExtra: "Template",
                  baseId: docRef.id,
                  T1: [{ Table: {} }],
                  T2: [{ Table: {} }],
                  T3: [{ Table: {} }],
                  T4: [{ Table: {} }],
                  T5: [{ Table: {} }],
                  T6: [{ Table: {} }],
                  T7: [{ Table: {} }],
                  T8: [{ Table: { Row0: ["", ""] } }],
                  T9: [{ Line0: { Row0: [""] } }],
                  T10: [{ Line0: { Row0: [""] } }],
                  T11: [{ Line0: { Row0: ["", "", ""] } }],
                  id: 2,
                });
              });

            // Update the Jobs array in the master document
            const docRef = doc(db, props.route.params[1], "master");
            var temp = await getDoc(docRef);
            let tempAry = temp.data().Jobs;
            tempAry.push(props.route.params[1] + "_" + jobNum);
            setDoc(docRef, { Jobs: tempAry });
          } else {
            Alert.alert("Job already exists");
          }
        });
    }
  };

  // useEffect to set navigation options and update count on component mount
  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
          {/* PopupWithInput component with handleInputSubmit function */}
          <PopupWithInput onSubmit={handleInputSubmit} />
          {/* Toggle visibility of the component */}
          <TouchableOpacity onPress={() => setVisible(!visible)} title="-">
            <View
              style={{
                justifyContent: "center",
                paddingLeft: 10,
                paddingRight: 10,
                padding: 5,
              }}
            >
              <Text
                style={{
                  color: "#007AFF",
                }}
              >
                Remove
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ),
      // Logout button in the headerLeft
      headerLeft: () => (
        <Button
          onPress={() => {
            props.navigation.goBack();
            handleSignOut();
          }}
          title="Logout"
        />
      ),
    });
  }, []);
  // Additional state variables and functions
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 600px)" });
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [headerHeight] = useState(useHeaderHeight());
  const handleInputSubmit = (value) => {
    NewTimesheet(value);
  };

  return (
    <View style={{ height: "100%" }}>
      <KeyboardAvoidingView
        style={styles.Gloablcontainer}
        behavior={Platform.OS === "ios" ? "height" : null}
      >
        <View style={!isBigScreen ? { height: "100%" } : { height: "100%" }}>
          <View style={{ flex: 1, marginTop: 15 }}>
            <Search
              searchPhrase={searchPhrase}
              setSearchPhrase={setSearchPhrase}
              clicked={clicked}
              setClicked={setClicked}
            />
          </View>
          <View style={styles.Container}>
            <ScrollView>
              <Jobs
                company={props.route.params[1]}
                searchPhrase={searchPhrase}
                navigation={props.navigation.navigate}
                user={props.route.params[0]}
                Admin={props.route.params[2]}
                visible={visible}
                setVisible={setVisible}
              />
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  Gloablcontainer: {
    flexDirection: "column",
    backgroundColor: "white",
    height: "100%",
  },
  blank: {
    flex: 1,
    backgroundColor: "white",
  },
  Container: {
    flex: 8,
    backgroundColor: "white",
  },
  prev: { width: "100%", height: "100%" },
});
