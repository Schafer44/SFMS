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
      <View style={styles.ColumnTitle}>
        <View style={styles.Title}></View>
      </View>
      <View style={styles.Column}>
        <View style={styles.Title}>
          <Text style={styles.TitleText1}>ACTIVITY</Text>
          <Text style={styles.TitleText1}>
            (EX: GRADE, EXCAVATING, SEEDING, ETC.)
          </Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line0.Activity}
            onChange={(event) => {
              setLine0({ ...Line0, Activity: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line1.Activity}
            onChange={(event) => {
              setLine1({ ...Line1, Activity: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line2.Activity}
            onChange={(event) => {
              setLine2({ ...Line2, Activity: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line3.Activity}
            onChange={(event) => {
              setLine3({ ...Line3, Activity: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={styles.Column2}>
        <View style={styles.Title}>
          <Text style={styles.TitleText1}>BEGIN</Text>
          <Text style={styles.TitleText1}>STATION</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line0.BeginStation}
            onChange={(event) => {
              setLine0({ ...Line0, BeginStation: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line1.BeginStation}
            onChange={(event) => {
              setLine1({ ...Line1, BeginStation: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line2.BeginStation}
            onChange={(event) => {
              setLine2({ ...Line2, BeginStation: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line3.BeginStation}
            onChange={(event) => {
              setLine3({ ...Line3, BeginStation: event.nativeEvent.text });
            }}
          />
        </View>
      </View>

      <View style={styles.Column2}>
        <View style={styles.Title}>
          <Text style={styles.TitleText1}>END</Text>
          <Text style={styles.TitleText1}>STATION</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line0.EndStation}
            onChange={(event) => {
              setLine0({ ...Line0, EndStation: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line1.EndStation}
            onChange={(event) => {
              setLine1({ ...Line1, EndStation: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line2.EndStation}
            onChange={(event) => {
              setLine2({ ...Line2, EndStation: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line3.EndStation}
            onChange={(event) => {
              setLine3({ ...Line3, EndStation: event.nativeEvent.text });
            }}
          />
        </View>
      </View>

      <View style={styles.Column2}>
        <View style={styles.Title}>
          <Text style={styles.TitleText1}>FOOTAGE / AREA</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line0.FOOTAGE}
            onChange={(event) => {
              setLine0({ ...Line0, FOOTAGE: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line1.FOOTAGE}
            onChange={(event) => {
              setLine1({ ...Line1, FOOTAGE: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line2.FOOTAGE}
            onChange={(event) => {
              setLine2({ ...Line2, FOOTAGE: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line3.FOOTAGE}
            onChange={(event) => {
              setLine3({ ...Line3, FOOTAGE: event.nativeEvent.text });
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
