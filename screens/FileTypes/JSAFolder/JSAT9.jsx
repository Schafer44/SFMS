import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function JSAT9(props) {
  const [Line0, setLine0] = useState({});
  const [Line1, setLine1] = useState({});
  const [Line2, setLine2] = useState({});
  const [Line3, setLine3] = useState({});
  useEffect(() => {
    if (Object.keys(Line0).length !== 0) {
      props.setT9(props.T9, (props.T9[0] = { Line0 }));
    }
    if (Object.keys(Line1).length !== 0) {
      props.setT9(props.T9, (props.T9[1] = { Line1 }));
    }
    if (Object.keys(Line2).length !== 0) {
      props.setT9(props.T9, (props.T9[2] = { Line2 }));
    }
    if (Object.keys(Line3).length !== 0) {
      props.setT9(props.T9, (props.T9[3] = { Line3 }));
    } else if (props.T9 !== undefined) {
      if (props.T9[0] !== undefined) {
        setLine0(props.T9[0].Line0);
      }
      if (props.T9[1] !== undefined) {
        setLine1(props.T9[1].Line1);
      }
      if (props.T9[2] !== undefined) {
        setLine2(props.T9[2].Line2);
      }
      if (props.T9[3] !== undefined) {
        setLine3(props.T9[3].Line3);
      }
    }
  }, [props, Line0, Line1, Line2, Line3]);
  return (
    <View style={styles.body}>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text>Print Name:</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line0.NamePrint}
            onChange={(event) => {
              setLine0({ ...Line0, NamePrint: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text>Signature:</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line0.NameSignature}
            onChange={(event) => {
              setLine0({ ...Line0, NameSignature: event.nativeEvent.text });
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
  TitleText1: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  Column: { flex: 3 },
  Column2: { flex: 1 },
  ColumnTitle: { flex: 0.3, borderStyle: "solid", borderWidth: 1 },
});
