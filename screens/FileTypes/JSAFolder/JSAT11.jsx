import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function JSAT11(props) {
  // State to manage the Line0 object
  const [Line0, setLine0] = useState({});

  // useEffect to synchronize Line0 state with props.T11
  useEffect(() => {
    // Check if Line0 state is not empty
    if (Object.keys(Line0).length !== 0) {
      // Update props.T11 using setT11 and include Line0
      props.setT11(props.T11, (props.T11[0] = { Line0 }));
    } else if (props.T11 !== undefined) {
      // Check if props.T11 is defined
      if (props.T11[0] !== undefined) {
        // Set Line0 state based on props.T11[0].Line0
        setLine0(props.T11[0].Line0);
      }
    }
  }, [props, Line0]);

  // Function to add a new row to Line0
  const addRow = () => {
    // Create a new row with empty values
    var rows = ["", "", ""];

    // Calculate the index for the new row
    var temp = Object.keys(Line0).length;
    var Keys = "Rows" + temp;

    // Update Line0 state by adding the new row
    setLine0({
      ...Line0,
      [Keys]: rows,
    });
  };

  return (
    <View>
      <View style={styles.body}>
        <View style={styles.Column}>
          <View style={styles.Row}>
            <Text>Task/ Job Steps</Text>
          </View>
          {Object.keys(Line0)
            .sort()
            .map((Keys, r) => (
              <View style={styles.Row} key={Keys}>
                <TextInput
                  className="textInputTestSig"
                  placeholder=""
                  value={Line0[Keys][0]}
                  onChange={(event) => {
                    var temp3 = Line0[Keys];
                    temp3[0] = event.nativeEvent.text;
                    //[temp] = [event];
                    setLine0({
                      ...Line0,
                      [Keys]: temp3,
                    });
                  }}
                />
              </View>
            ))}
        </View>
        <View style={styles.Column}>
          <View style={styles.Row}>
            <Text>Potential hazards</Text>
          </View>
          {Object.keys(Line0)
            .sort()
            .map((Keys, r) => (
              <View style={styles.Row} key={Keys}>
                <TextInput
                  className="textInputTestSig"
                  placeholder=""
                  value={Line0[Keys][1]}
                  onChange={(event) => {
                    var temp3 = Line0[Keys];
                    temp3[1] = event.nativeEvent.text;
                    //[temp] = [event];
                    setLine0({
                      ...Line0,
                      [Keys]: temp3,
                    });
                  }}
                />
              </View>
            ))}
        </View>
        <View style={styles.Column}>
          <View style={styles.Row}>
            <Text>Safe Work Recommendations</Text>
          </View>
          {Object.keys(Line0)
            .sort()
            .map((Keys, r) => (
              <View style={styles.Row} key={Keys}>
                <TextInput
                  className="textInputTestSig"
                  placeholder=""
                  value={Line0[Keys][2]}
                  onChange={(event) => {
                    var temp3 = Line0[Keys];
                    temp3[2] = event.nativeEvent.text;
                    //[temp] = [event];
                    setLine0({
                      ...Line0,
                      [Keys]: temp3,
                    });
                  }}
                />
              </View>
            ))}
        </View>
      </View>

      <TouchableOpacity
        style={styles.SubBtn}
        title="Add Row"
        onPress={() => addRow()}
      >
        <Text style={styles.LockText}>Add Row</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    height: "100%",
    borderStyle: "solid",
    borderWidth: 3,
    width: "100%",
    flexDirection: "row",
  },
  body2: {
    flex: 1,
    height: 400,
    borderStyle: "solid",
    borderWidth: 3,
    width: "100%",
    flexDirection: "row",
  },
  SubBtn: {
    width: "100%",
    height: 50,
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "green",
    color: "white",
  },
  prev: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  Title: {
    flex: 1.2,
    borderStyle: "solid",
    borderWidth: 1,
  },

  textInputTestSig: {
    marginLeft: 5,
    width: "100%",
    height: "100%",
    flex: 1,
  },
  Row: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
    height: 50,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  TitleText1: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  Column: { flex: 3 },
  Column2: { flex: 1 },
  ColumnTitle: { flex: 0.3, borderStyle: "solid", borderWidth: 1 },
  LockText: {
    color: "white",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
});
