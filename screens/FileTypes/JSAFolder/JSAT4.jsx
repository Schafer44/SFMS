import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function JSAT4(props) {
  const [Line0, setLine0] = useState({});
  const [Line1, setLine1] = useState({});
  const [Line2, setLine2] = useState({});
  useEffect(() => {
    if (Object.keys(Line0).length !== 0) {
      props.setT4(props.T4, (props.T4[0] = { Line0 }));
    }
    if (Object.keys(Line1).length !== 0) {
      props.setT4(props.T4, (props.T4[1] = { Line1 }));
    }
    if (Object.keys(Line2).length !== 0) {
      props.setT4(props.T4, (props.T4[2] = { Line2 }));
    } else if (props.T4 !== undefined) {
      if (props.T4[0] !== undefined) {
        setLine0(props.T4[0].Line0);
      }
      if (props.T4[1] !== undefined) {
        setLine1(props.T4[1].Line1);
      }
      if (props.T4[2] !== undefined) {
        setLine2(props.T4[2].Line2);
      }
    }
  }, [props, Line0, Line1, Line2]);
  return (
    <View style={styles.body}>
      <View style={styles.ColumnTitle}>
        <View style={styles.Title}>
          <Text style={styles.TitleText1}>PPE Required:</Text>
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text>Safety Glasses</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line0.SafetyGlasses}
            onChange={(event) => {
              setLine0({ ...Line0, SafetyGlasses: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <Text>Hard Hat</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line0.HardHat}
            onChange={(event) => {
              setLine0({ ...Line0, HardHat: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>Safety Vest</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line0.SafetyVest}
            onChange={(event) => {
              setLine0({ ...Line0, SafetyVest: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>Safety-Toe Boots</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line0.SafetyToeBoots}
            onChange={(event) => {
              setLine0({ ...Line0, SafetyToeBoots: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>Gloves</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line0.Gloves}
            onChange={(event) => {
              setLine0({ ...Line0, Gloves: event.nativeEvent.text });
            }}
          />
        </View>
      </View>

      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text>FR Clothing</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line1.FRClothing}
            onChange={(event) => {
              setLine1({ ...Line1, FRClothing: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <Text>Fall Protection</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line1.FallProtection}
            onChange={(event) => {
              setLine1({ ...Line1, FallProtection: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>Winter Footwear</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line1.WinterFootwear}
            onChange={(event) => {
              setLine1({ ...Line1, WinterFootwear: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <Text>Hearing Protection</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line1.HearingProtection}
            onChange={(event) => {
              setLine1({ ...Line1, HearingProtection: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>Resporatory Protection</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line1.ResporatoryProtection}
            onChange={(event) => {
              setLine1({
                ...Line1,
                ResporatoryProtection: event.nativeEvent.text,
              });
            }}
          />
        </View>
      </View>

      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text>Chain Saw Chaps</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line2.ChainSawChaps}
            onChange={(event) => {
              setLine2({ ...Line2, ChainSawChaps: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>Metalarsal Guards</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line2.MetalarsalGuards}
            onChange={(event) => {
              setLine2({ ...Line2, MetalarsalGuards: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <Text>Life Vest</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line2.LifeVest}
            onChange={(event) => {
              setLine2({ ...Line2, LifeVest: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <Text>Face Shielding</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line2.FaceShielding}
            onChange={(event) => {
              setLine2({ ...Line2, FaceShielding: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text>Other</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line2.Other}
            onChange={(event) => {
              setLine2({ ...Line2, Other: event.nativeEvent.text });
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
