import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function FRT2(props) {
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
        <View style={styles.TitleLeftRow}></View>
        <View style={styles.Rows}>
          <View style={styles.Row}></View>
          <View style={styles.Row}></View>
          <View style={styles.Row}></View>
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.TitleRow}>
          <Text style={styles.TitleText2}>TY</Text>
        </View>
        <View style={styles.Rows}>
          <View style={styles.Row}></View>
          <View style={styles.Row}></View>
          <View style={styles.Row}></View>
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.TitleRow}>
          <Text style={styles.TitleText3}>PE</Text>
        </View>
        <View style={styles.Rows}>
          <View style={styles.Row}></View>
          <View style={styles.Row}></View>
          <View style={styles.Row}></View>
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.TitleRight2Row}></View>
        <View style={styles.Rows}>
          <View style={styles.Row}></View>
          <View style={styles.Row}></View>
          <View style={styles.Row}></View>
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.TitleRightRow}>
          <Text style={styles.TitleText1}>QUANTITY</Text>
        </View>
        <View style={styles.Rows}>
          <View style={styles.Row}></View>
          <View style={styles.Row}></View>
          <View style={styles.Row}></View>
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.TitleRightRow}>
          <Text style={styles.TitleText1}>DIAMETER</Text>
        </View>
        <View style={styles.Rows}>
          <View style={styles.Row}></View>
          <View style={styles.Row}></View>
          <View style={styles.Row}></View>
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
    flex: 1.2,
    borderStyle: "solid",
    borderWidth: 2,
  },
  Rows: { flex: 3 },
  Row: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
  },
  Column: { flex: 1, flexDirection: "column" },
  ColumnTitle: {
    flex: 0.3,
  },
  TitleRow: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 0,
    borderTopWidth: 1,
  },

  TitleRightRow: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 0,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
  },

  TitleRight2Row: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 0,
    borderTopWidth: 1,
    borderRightWidth: 1,
  },
  TitleLeftRow: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 0,
    borderTopWidth: 1,
    borderLeftWidth: 1,
  },
  TitleText1: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  TitleText2: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "right",
  },
});
