import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function JSAT6(props) {
  const [Table, setTable] = useState({});
  useEffect(() => {
    if (Object.keys(Table).length !== 0) {
      props.setT6(props.T6, (props.T6[0] = { Table }));
    } else if (props.T6 !== undefined) {
      if (props.T6[0] !== undefined) {
        setTable(props.T6[0].Table);
      }
    }
  }, [props, Table]);
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
            value={Table.FireExtinguishers}
            onChange={(event) => {
              setTable({ ...Table, FireExtinguishers: event.nativeEvent.text });
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
            value={Table.GasMonitor}
            onChange={(event) => {
              setTable({ ...Table, GasMonitor: event.nativeEvent.text });
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
            value={Table.FirstAidKit}
            onChange={(event) => {
              setTable({ ...Table, FirstAidKit: event.nativeEvent.text });
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
            value={Table.Lighting}
            onChange={(event) => {
              setTable({ ...Table, Lighting: event.nativeEvent.text });
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
            value={Table.SafetyDataSheets}
            onChange={(event) => {
              setTable({ ...Table, SafetyDataSheets: event.nativeEvent.text });
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
            value={Table.StopPaddles}
            onChange={(event) => {
              setTable({ ...Table, StopPaddles: event.nativeEvent.text });
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
            value={Table.RoadSigns}
            onChange={(event) => {
              setTable({ ...Table, RoadSigns: event.nativeEvent.text });
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
            value={Table.AirHorn}
            onChange={(event) => {
              setTable({ ...Table, AirHorn: event.nativeEvent.text });
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
            value={Table.OneCalls}
            onChange={(event) => {
              setTable({ ...Table, OneCalls: event.nativeEvent.text });
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
            value={Table.Slings}
            onChange={(event) => {
              setTable({ ...Table, Slings: event.nativeEvent.text });
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
            value={Table.Two_way_Radios}
            onChange={(event) => {
              setTable({ ...Table, Two_way_Radios: event.nativeEvent.text });
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
            value={Table.Other}
            onChange={(event) => {
              setTable({ ...Table, Other: event.nativeEvent.text });
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
