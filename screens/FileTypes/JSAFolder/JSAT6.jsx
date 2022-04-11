import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function JSAT6(props) {
  const [Line0, setLine0] = useState({});
  const [Line1, setLine1] = useState({});
  const [Line2, setLine2] = useState({});
  useEffect(() => {
    if (Object.keys(Line0).length !== 0) {
      props.setT6(props.T6, (props.T6[0] = { Line0 }));
    }
    if (Object.keys(Line1).length !== 0) {
      props.setT6(props.T6, (props.T6[1] = { Line1 }));
    }
    if (Object.keys(Line2).length !== 0) {
      props.setT6(props.T6, (props.T6[2] = { Line2 }));
    } else if (props.T6 !== undefined) {
      if (props.T6[0] !== undefined) {
        setLine0(props.T6[0].Line0);
      }
      if (props.T6[1] !== undefined) {
        setLine1(props.T6[1].Line1);
      }
      if (props.T6[2] !== undefined) {
        setLine2(props.T6[2].Line2);
      }
    }
  }, [props, Line0, Line1, Line2]);
  return (
    <View style={styles.body}>
      <View style={styles.ColumnTitle}>
        <View style={styles.Title}>
          <Text style={styles.TitleText1}>Other Equipment:</Text>
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text>Fire Extinguishers</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line0.FireExtinguishers}
            onChange={(event) => {
              setLine0({ ...Line0, FireExtinguishers: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>Gas Monitor</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line0.GasMonitor}
            onChange={(event) => {
              setLine0({ ...Line0, GasMonitor: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>First Aid Kit</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line0.FirstAidKit}
            onChange={(event) => {
              setLine0({ ...Line0, FirstAidKit: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>Lighting</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line0.Lighting}
            onChange={(event) => {
              setLine0({ ...Line0, Lighting: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}></View>
        <View style={styles.Row}></View>
      </View>

      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text>Safety Data Sheets</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line1.SafetyDataSheets}
            onChange={(event) => {
              setLine1({ ...Line1, SafetyDataSheets: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <Text>Stop Paddles</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line1.StopPaddles}
            onChange={(event) => {
              setLine1({ ...Line1, StopPaddles: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>Road Signs</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line1.RoadSigns}
            onChange={(event) => {
              setLine1({ ...Line1, RoadSigns: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <Text>Air Horn</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line1.AirHorn}
            onChange={(event) => {
              setLine1({ ...Line1, AirHorn: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>One Calls</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line1.OneCalls}
            onChange={(event) => {
              setLine1({ ...Line1, OneCalls: event.nativeEvent.text });
            }}
          />
        </View>
      </View>

      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text>Slings/Chains</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line2.Slings}
            onChange={(event) => {
              setLine2({ ...Line2, Slings: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <Text>Two-way Radios</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line2.Two_way_Radios}
            onChange={(event) => {
              setLine2({ ...Line2, Two_way_Radios: event.nativeEvent.text });
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
            value={Line2.Other}
            onChange={(event) => {
              setLine2({ ...Line2, Other: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}></View>
        <View style={styles.Row}></View>
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
