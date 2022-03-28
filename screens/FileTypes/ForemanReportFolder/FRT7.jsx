import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function FRT7(props) {
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
        <View style={styles.Title}></View>
      </View>
      <View style={styles.Column}>
        <View style={styles.Title}></View>
        <View style={styles.Row}></View>
        <View style={styles.Row}></View>
        <View style={styles.Row}></View>
        <View style={styles.Row}></View>
      </View>
      <View style={styles.Column}>
        <View style={styles.Title}></View>
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
    width: "100%",
    height: "100%",
    flexDirection: "row",
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
  },
  Column: { flex: 1 },
  ColumnTitle: { flex: 0.1, borderStyle: "solid", borderWidth: 1 },
});
