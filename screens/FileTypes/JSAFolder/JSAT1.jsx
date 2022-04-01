import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function JSAT1(props) {
  const [Line0, setLine0] = useState({});
  const [Line1, setLine1] = useState({});
  const [Line2, setLine2] = useState({});
  const [Line3, setLine3] = useState({});
  const [Line4, setLine4] = useState({});
  useEffect(() => {
    if (Object.keys(Line0).length !== 0) {
      props.setT1(props.T1, (props.T1[0] = { Line0 }));
    }
    if (Object.keys(Line1).length !== 0) {
      props.setT1(props.T1, (props.T1[1] = { Line1 }));
    }
    if (Object.keys(Line2).length !== 0) {
      props.setT1(props.T1, (props.T1[2] = { Line2 }));
    }
    if (Object.keys(Line3).length !== 0) {
      props.setT1(props.T1, (props.T1[3] = { Line3 }));
    }
    if (Object.keys(Line4).length !== 0) {
      props.setT1(props.T1, (props.T1[4] = { Line4 }));
    } else if (props.T1 !== undefined) {
      if (props.T1[0] !== undefined) {
        setLine0(props.T1[0].Line0);
      }
      if (props.T1[1] !== undefined) {
        setLine1(props.T1[1].Line1);
      }
      if (props.T1[2] !== undefined) {
        setLine2(props.T1[2].Line2);
      }
      if (props.T1[3] !== undefined) {
        setLine3(props.T1[3].Line3);
      }
      if (props.T1[4] !== undefined) {
        setLine4(props.T1[4].Line4);
      }
    }
  }, [props, Line0, Line1, Line2, Line3, Line4]);
  return (
    <View style={styles.body}>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}>Date:</Text>
        </View>
        <View style={styles.Row}></View>

        <View style={styles.Row}>
          <Text style={styles.TitleText2}>Project #:</Text>
        </View>

        <View style={styles.Row}></View>

        <View style={styles.Row}>
          <Text style={styles.TitleText2}>Work Location:</Text>
        </View>
        <View style={styles.Row}></View>
      </View>

      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}>Client:</Text>
        </View>
        <View style={styles.Row}></View>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}>Foreman/Supervisor:</Text>
        </View>
        <View style={styles.Row}></View>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}># in Crew:</Text>
        </View>
        <View style={styles.Row}></View>
      </View>

      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}>GPS Coord:</Text>
        </View>
        <View style={styles.Row}></View>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}>Nearest Intersection:</Text>
        </View>
        <View style={styles.Row}></View>
      </View>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}>First Aid Person:</Text>
        </View>
        <View style={styles.Row}></View>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}>Conpetent Person:</Text>
        </View>
        <View style={styles.Row}></View>
      </View>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}>Who will transport injured?</Text>
        </View>
        <View style={styles.Row}></View>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}>Current Weather:</Text>
        </View>
        <View style={styles.Row}></View>
      </View>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}>
            FOR EMERGENCIES OR LIFE-THREATENING INJURIES,CALL 911*****
          </Text>
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
