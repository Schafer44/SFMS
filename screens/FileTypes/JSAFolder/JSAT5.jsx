import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function JSAT5(props) {
  const [Table, setTable] = useState({});
  useEffect(() => {
    if (Object.keys(Table).length !== 0) {
      props.setT5(props.T5, (props.T5[0] = { Table }));
    } else if (props.T5 !== undefined) {
      if (props.T5[0] !== undefined) {
        setTable(props.T5[0].Table);
      }
    }
  }, [props, Table]);
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
            value={Table.ClientWorkPermit}
            onChange={(event) => {
              setTable({ ...Table, ClientWorkPermit: event.nativeEvent.text });
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
            value={Table.HotWorkPermit}
            onChange={(event) => {
              setTable({ ...Table, HotWorkPermit: event.nativeEvent.text });
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
            value={Table.AirMonitoring}
            onChange={(event) => {
              setTable({ ...Table, AirMonitoring: event.nativeEvent.text });
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
            value={Table.GroundDisturbance}
            onChange={(event) => {
              setTable({ ...Table, GroundDisturbance: event.nativeEvent.text });
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
            value={Table.ConfinedSpace}
            onChange={(event) => {
              setTable({ ...Table, ConfinedSpace: event.nativeEvent.text });
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
            value={Table.Excavation}
            onChange={(event) => {
              setTable({ ...Table, Excavation: event.nativeEvent.text });
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
