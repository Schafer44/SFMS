import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function FRT1(props) {
  // States to manage Line0, Line1, Line2, and Line3 data
  const [Line0, setLine0] = useState({});
  const [Line1, setLine1] = useState({});
  const [Line2, setLine2] = useState({});
  const [Line3, setLine3] = useState({});

  // Effect hook to synchronize Line0, Line1, Line2, and Line3 with T1 in props
  useEffect(() => {
    // Check if Line0 has data
    if (Object.keys(Line0).length !== 0) {
      // Update T1 in props with Line0 data
      props.setT1(props.T1, (props.T1[0] = { Line0 }));
    }

    // Check if Line1 has data
    if (Object.keys(Line1).length !== 0) {
      // Update T1 in props with Line1 data
      props.setT1(props.T1, (props.T1[1] = { Line1 }));
    }

    // Check if Line2 has data
    if (Object.keys(Line2).length !== 0) {
      // Update T1 in props with Line2 data
      props.setT1(props.T1, (props.T1[2] = { Line2 }));
    }

    // Check if Line3 has data
    if (Object.keys(Line3).length !== 0) {
      // Update T1 in props with Line3 data
      props.setT1(props.T1, (props.T1[3] = { Line3 }));
    } else if (props.T1 !== undefined) {
      // Check if T1 in props has data
      if (props.T1[0] !== undefined) {
        // Set Line0 state with data from T1 in props
        setLine0(props.T1[0].Line0);
      }
      if (props.T1[1] !== undefined) {
        // Set Line1 state with data from T1 in props
        setLine1(props.T1[1].Line1);
      }
      if (props.T1[2] !== undefined) {
        // Set Line2 state with data from T1 in props
        setLine2(props.T1[2].Line2);
      }
      if (props.T1[3] !== undefined) {
        // Set Line3 state with data from T1 in props
        setLine3(props.T1[3].Line3);
      }
    }
  }, [props, Line0, Line1, Line2, Line3]);

  return (
    <View style={styles.GC}>
      <View style={styles.ColumnTitle}>
        <View style={styles.Title}>
          <Text style={styles.TitleText1}>Progress</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.Column}>
          <View style={styles.Title}>
            <Text style={styles.TitleText1}>
              ACTIVITY (EX: GRADE, EXCAVATING, SEEDING, ETC.)
            </Text>
          </View>
        </View>

        <View style={styles.Column}>
          <View style={styles.Title}>
            <Text style={styles.TitleText1}>BEGIN STATION</Text>
          </View>
        </View>

        <View style={styles.Column}>
          <View style={styles.Title}>
            <Text style={styles.TitleText1}>END STATION</Text>
          </View>
        </View>

        <View style={styles.Column}>
          <View style={styles.Title}>
            <Text style={styles.TitleText1}>FOOTAGE/ AREA</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.Column}>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line0.Activity}
              onChange={(event) => {
                setLine0({ ...Line0, Activity: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line1.Activity}
              onChange={(event) => {
                setLine1({ ...Line1, Activity: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line2.Activity}
              onChange={(event) => {
                setLine2({ ...Line2, Activity: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line3.Activity}
              onChange={(event) => {
                setLine3({ ...Line3, Activity: event.nativeEvent.text });
              }}
            />
          </View>
        </View>
        <View style={styles.Column}>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line0.BeginStation}
              onChange={(event) => {
                setLine0({ ...Line0, BeginStation: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line1.BeginStation}
              onChange={(event) => {
                setLine1({ ...Line1, BeginStation: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line2.BeginStation}
              onChange={(event) => {
                setLine2({ ...Line2, BeginStation: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line3.BeginStation}
              onChange={(event) => {
                setLine3({ ...Line3, BeginStation: event.nativeEvent.text });
              }}
            />
          </View>
        </View>

        <View style={styles.Column}>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line0.EndStation}
              onChange={(event) => {
                setLine0({ ...Line0, EndStation: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line1.EndStation}
              onChange={(event) => {
                setLine1({ ...Line1, EndStation: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line2.EndStation}
              onChange={(event) => {
                setLine2({ ...Line2, EndStation: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line3.EndStation}
              onChange={(event) => {
                setLine3({ ...Line3, EndStation: event.nativeEvent.text });
              }}
            />
          </View>
        </View>

        <View style={styles.Column}>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line0.FOOTAGE}
              onChange={(event) => {
                setLine0({ ...Line0, FOOTAGE: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line1.FOOTAGE}
              onChange={(event) => {
                setLine1({ ...Line1, FOOTAGE: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line2.FOOTAGE}
              onChange={(event) => {
                setLine2({ ...Line2, FOOTAGE: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line3.FOOTAGE}
              onChange={(event) => {
                setLine3({ ...Line3, FOOTAGE: event.nativeEvent.text });
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  GC: {
    width: "100%",
    flexDirection: "column",
  },
  body: {
    flexDirection: "row",
  },
  Title: {
    display: "flex",
    flex: 1.2,
    borderStyle: "solid",
    borderWidth: 1,
    flexDirection: "column",
    height: "100%",
  },
  Row: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
  },
  TitleText1: {
    flex: 10,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  TitleText2: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  Column: { flex: 3 },
  Column2: { flex: 1 },
  ColumnTitle: { flex: 0.3, borderStyle: "solid", borderWidth: 1 },
});
