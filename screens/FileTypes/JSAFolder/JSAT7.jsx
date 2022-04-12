import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function JSAT7(props) {
  const [Table, setTable] = useState({});
  useEffect(() => {
    if (Object.keys(Table).length !== 0) {
      props.setT7(props.T7, (props.T7[0] = { Table }));
    } else if (props.T7 !== undefined) {
      if (props.T7[0] !== undefined) {
        setTable(props.T7[0].Table);
      }
    }
  }, [props, Table]);
  return (
    <View style={styles.body}>
      <View style={styles.ColumnTitle}>
        <View style={styles.Title}>
          <Text style={styles.TitleText1}>ROW Conditions:</Text>
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text>Dry</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.Dry}
            onChange={(event) => {
              setTable({ ...Table, Dry: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <Text>Rocky</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.Rocky}
            onChange={(event) => {
              setTable({ ...Table, Rocky: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>Muddy</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.Muddy}
            onChange={(event) => {
              setTable({ ...Table, Muddy: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>Sandy</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.Sandy}
            onChange={(event) => {
              setTable({ ...Table, Sandy: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>Ice/Snow</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.Ice_Snow}
            onChange={(event) => {
              setTable({ ...Table, Ice_Snow: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>Steep Slope</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.SteepSlope}
            onChange={(event) => {
              setTable({ ...Table, SteepSlope: event.nativeEvent.text });
            }}
          />
        </View>
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
