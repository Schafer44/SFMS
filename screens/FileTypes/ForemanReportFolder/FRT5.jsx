import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function FRT5(props) {
  const [Line, setLine] = useState({});
  /*useEffect(() => {
    if (Object.keys(Line).length !== 0) {
      props.setLines(props.Lines, (props.Lines[props.id] = { Line }));
    } else if (props.Lines[props.id] !== undefined) {
      setLine(props.Lines[props.id].Line);
    }
  });*/
  return (
    <View style={styles.body}>
      <View style={styles.ColumnTitle}>
        <View style={styles.Title}>
          <Text style={styles.TitleText1}>SUBCONTRACTOR'S UTILIZED</Text>
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.TitleRow}>
          <Text style={styles.TitleText1}>HOT TAP/STOPPLE</Text>
        </View>
        <View style={styles.Row}></View>
      </View>
      <View style={styles.Column}>
        <View style={styles.TitleRow}>
          <Text style={styles.TitleText1}>HDD CREW</Text>
        </View>
        <View style={styles.Row}></View>
      </View>
      <View style={styles.Column}>
        <View style={styles.TitleRow}>
          <Text style={styles.TitleText1}>HELICAL PIERS</Text>
        </View>
        <View style={styles.Row}></View>
      </View>
      <View style={styles.Column}>
        <View style={styles.TitleRow}>
          <Text style={styles.TitleText1}>ELECTRICAL</Text>
        </View>
        <View style={styles.Row}></View>
      </View>
      <View style={styles.Column}>
        <View style={styles.TitleRow}>
          <Text style={styles.TitleText1}>PAINTING</Text>
        </View>
        <View style={styles.Row}></View>
      </View>
      <View style={styles.Column}>
        <View style={styles.TitleRow}>
          <Text style={styles.TitleText1}>HYDRO-EXCAVATION</Text>
        </View>
        <View style={styles.Row}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  Title: {
    flex: 1.2,
    borderStyle: "solid",
    borderWidth: 1,
  },
  TitleRow: {
    flex: 2,
    borderStyle: "solid",
    borderWidth: 1,
    justifyContent: "center",
    alignContent: "center",
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
