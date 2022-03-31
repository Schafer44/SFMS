import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function FRT7(props) {
  const [Line0, setLine0] = useState({});
  useEffect(() => {
    if (Object.keys(Line0).length !== 0) {
      props.setT7(props.T7, (props.T7[0] = { Line0 }));
    } else if (props.T7 !== undefined) {
      if (props.T7[0] !== undefined) {
        setLine0(props.T7[0].Line0);
      }
    }
  }, [props, Line0]);
  return (
    <View style={styles.body}>
      <View style={styles.ColumnTitle}>
        <View style={styles.Title}></View>
      </View>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line0.Comment}
            multiline={true}
            onChange={(event) => {
              setLine0({ ...Line0, Comment: event.nativeEvent.text });
            }}
          />
        </View>
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
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
  },
  Row: {
    flex: 6,
    borderStyle: "solid",
    borderWidth: 1,
  },
  Column: { flex: 1 },
  ColumnTitle: { flex: 0.05, borderStyle: "solid", borderWidth: 1 },
  textInputTest: { width: "100%", height: "100%", padding: "1%" },
});
