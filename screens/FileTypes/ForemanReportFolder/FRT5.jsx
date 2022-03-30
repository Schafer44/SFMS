import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function FRT5(props) {
  const [Line0, setLine0] = useState({});
  const [Line1, setLine1] = useState({});
  const [Line2, setLine2] = useState({});
  const [Line3, setLine3] = useState({});
  const [Line4, setLine4] = useState({});
  const [Line5, setLine5] = useState({});
  useEffect(() => {
    if (Object.keys(Line0).length !== 0) {
      props.setT5(props.T5, (props.T5[0] = { Line0 }));
    }
    if (Object.keys(Line1).length !== 0) {
      props.setT5(props.T5, (props.T5[1] = { Line1 }));
    }
    if (Object.keys(Line2).length !== 0) {
      props.setT5(props.T5, (props.T5[2] = { Line2 }));
    }
    if (Object.keys(Line3).length !== 0) {
      props.setT5(props.T5, (props.T5[3] = { Line3 }));
    }
    if (Object.keys(Line4).length !== 0) {
      props.setT5(props.T5, (props.T5[4] = { Line4 }));
    }
    if (Object.keys(Line5).length !== 0) {
      props.setT5(props.T5, (props.T5[5] = { Line5 }));
    } else if (props.T5 !== undefined) {
      if (props.T5[0] !== undefined) {
        setLine0(props.T5[0].Line0);
      }
      if (props.T5[1] !== undefined) {
        setLine1(props.T5[1].Line1);
      }
      if (props.T5[2] !== undefined) {
        setLine2(props.T5[2].Line2);
      }
      if (props.T5[3] !== undefined) {
        setLine3(props.T5[3].Line3);
      }
      if (props.T5[4] !== undefined) {
        setLine4(props.T5[4].Line4);
      }
      if (props.T5[5] !== undefined) {
        setLine5(props.T5[5].Line5);
      }
    }
  }, [props, Line0, Line1, Line2, Line3, Line4, Line5]);
  return (
    <View style={styles.body}>
      <View style={styles.ColumnTitle}>
        <View style={styles.Title}>
          <Text style={styles.TitleText1}>SUBCONTRACTORS UTILIZED</Text>
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.TitleRow}>
          <Text style={styles.TitleText1}>HOT TAP/STOPPLE</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line0.ContractorsUsed}
            onChange={(event) => {
              setLine0({ ...Line0, ContractorsUsed: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.TitleRow}>
          <Text style={styles.TitleText1}>HDD CREW</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line1.ContractorsUsed}
            onChange={(event) => {
              setLine1({ ...Line1, ContractorsUsed: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.TitleRow}>
          <Text style={styles.TitleText1}>HELICAL PIERS</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line2.ContractorsUsed}
            onChange={(event) => {
              setLine2({ ...Line2, ContractorsUsed: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.TitleRow}>
          <Text style={styles.TitleText1}>ELECTRICAL</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line3.ContractorsUsed}
            onChange={(event) => {
              setLine3({ ...Line3, ContractorsUsed: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.TitleRow}>
          <Text style={styles.TitleText1}>PAINTING</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line4.ContractorsUsed}
            onChange={(event) => {
              setLine4({ ...Line4, ContractorsUsed: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.TitleRow}>
          <Text style={styles.TitleText1}>HYDRO-EXCAVATION</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line5.ContractorsUsed}
            onChange={(event) => {
              setLine5({ ...Line5, ContractorsUsed: event.nativeEvent.text });
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
