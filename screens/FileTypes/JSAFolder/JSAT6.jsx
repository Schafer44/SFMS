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
          <Text style={styles.TitleText1}>FABRICATION WELDS TODAY</Text>
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}>Diameter</Text>
        </View>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}>Quantity</Text>
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
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line0.Quantity}
            onChange={(event) => {
              setLine0({ ...Line0, Diameter: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line1.Diameter}
            onChange={(event) => {
              setLine1({ ...Line1, Diameter: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line1.Quantity}
            onChange={(event) => {
              setLine1({ ...Line1, Diameter: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line2.Diameter}
            onChange={(event) => {
              setLine2({ ...Line2, Diameter: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line2.Quantity}
            onChange={(event) => {
              setLine2({ ...Line2, Diameter: event.nativeEvent.text });
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
