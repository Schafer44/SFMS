import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function JSAT5(props) {
  const [Line0, setLine0] = useState({});
  const [Line1, setLine1] = useState({});
  useEffect(() => {
    if (Object.keys(Line0).length !== 0) {
      props.setT5(props.T5, (props.T5[0] = { Line0 }));
    }
    if (Object.keys(Line1).length !== 0) {
      props.setT5(props.T5, (props.T5[1] = { Line1 }));
    } else if (props.T5 !== undefined) {
      if (props.T5[0] !== undefined) {
        setLine0(props.T5[0].Line0);
      }
      if (props.T5[1] !== undefined) {
        setLine1(props.T5[1].Line1);
      }
    }
  }, [props, Line0, Line1]);
  return (
    <View style={styles.body}>
      <View style={styles.ColumnTitle}>
        <View style={styles.Title}>
          <Text style={styles.TitleText1}>Permits Required:</Text>
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text>Client Work Permit</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line0.ClientWorkPermit}
            onChange={(event) => {
              setLine0({ ...Line0, ClientWorkPermit: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>Hot Work Permit</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line0.HotWorkPermit}
            onChange={(event) => {
              setLine0({ ...Line0, HotWorkPermit: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>Air Monitoring</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line0.AirMonitoring}
            onChange={(event) => {
              setLine0({ ...Line0, AirMonitoring: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>Ground Disturbance</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line0.GroundDisturbance}
            onChange={(event) => {
              setLine0({ ...Line0, GroundDisturbance: event.nativeEvent.text });
            }}
          />
        </View>
      </View>

      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text>Confined Space</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line1.ConfinedSpace}
            onChange={(event) => {
              setLine1({ ...Line1, ConfinedSpace: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>Excavation</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line1.Excavation}
            onChange={(event) => {
              setLine1({ ...Line1, Excavation: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>Other</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line1.Other}
            onChange={(event) => {
              setLine1({ ...Line1, Other: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}></View>
        <View style={styles.Row}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    borderStyle: "solid",
    borderWidth: 3,
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  Title: {
    flex: 1.2,
    borderStyle: "solid",
    borderWidth: 1,
  },
  Row: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  Column: { flex: 1, flexDirection: "row" },
  ColumnTitle: {
    flex: 2,
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: -1,
  },
  TitleText1: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  TitleText2: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
});
