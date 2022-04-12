import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function JSAT4(props) {
  const [Table, setTable] = useState({});
  useEffect(() => {
    if (Object.keys(Table).length !== 0) {
      props.setT4(props.T4, (props.T4[0] = { Table }));
    } else if (props.T4 !== undefined) {
      if (props.T4[0] !== undefined) {
        setTable(props.T4[0].Table);
      }
    }
  }, [props, Table]);
  return (
    <View style={styles.body}>
      <View style={styles.ColumnTitle}>
        <View style={styles.Title}>
          <Text style={styles.TitleText1}>PPE Required:</Text>
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text>Safety Glasses</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.SafetyGlasses}
            onChange={(event) => {
              setTable({ ...Table, SafetyGlasses: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <Text>Hard Hat</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.HardHat}
            onChange={(event) => {
              setTable({ ...Table, HardHat: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>Safety Vest</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.SafetyVest}
            onChange={(event) => {
              setTable({ ...Table, SafetyVest: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>Safety-Toe Boots</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.SafetyToeBoots}
            onChange={(event) => {
              setTable({ ...Table, SafetyToeBoots: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>Gloves</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.Gloves}
            onChange={(event) => {
              setTable({ ...Table, Gloves: event.nativeEvent.text });
            }}
          />
        </View>
      </View>

      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text>FR Clothing</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.FRClothing}
            onChange={(event) => {
              setTable({ ...Table, FRClothing: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <Text>Fall Protection</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.FallProtection}
            onChange={(event) => {
              setTable({ ...Table, FallProtection: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>Winter Footwear</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.WinterFootwear}
            onChange={(event) => {
              setTable({ ...Table, WinterFootwear: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <Text>Hearing Protection</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.HearingProtection}
            onChange={(event) => {
              setTable({ ...Table, HearingProtection: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>Resporatory Protection</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.ResporatoryProtection}
            onChange={(event) => {
              setTable({
                ...Table,
                ResporatoryProtection: event.nativeEvent.text,
              });
            }}
          />
        </View>
      </View>

      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text>Chain Saw Chaps</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.ChainSawChaps}
            onChange={(event) => {
              setTable({ ...Table, ChainSawChaps: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>Metalarsal Guards</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.MetalarsalGuards}
            onChange={(event) => {
              setTable({ ...Table, MetalarsalGuards: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <Text>Life Vest</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.LifeVest}
            onChange={(event) => {
              setTable({ ...Table, LifeVest: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <Text>Face Shielding</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.FaceShielding}
            onChange={(event) => {
              setTable({ ...Table, FaceShielding: event.nativeEvent.text });
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
