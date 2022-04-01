import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function JSAT7(props) {
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
        <View style={styles.Title}>
          <Text style={styles.TitleText1}>FABRICATION WELDS TODAY</Text>
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}>Diameter</Text>
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line0.Diameter}
            onChange={(event) => {
              setLine0({ ...Line0, Diameter: event.nativeEvent.text });
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
