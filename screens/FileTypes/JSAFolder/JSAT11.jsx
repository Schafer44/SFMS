import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function JSAT11(props) {
  const [Line0, setLine0] = useState({});
  const [Line1, setLine1] = useState({});
  const [Line2, setLine2] = useState({});
  const [Line3, setLine3] = useState({});
  const [Line4, setLine4] = useState({});
  useEffect(() => {
    if (Object.keys(Line0).length !== 0) {
      props.setT11(props.T11, (props.T11[0] = { Line0 }));
    }
    if (Object.keys(Line1).length !== 0) {
      props.setT11(props.T11, (props.T11[1] = { Line1 }));
    }
    if (Object.keys(Line2).length !== 0) {
      props.setT11(props.T11, (props.T11[2] = { Line2 }));
    }
    if (Object.keys(Line3).length !== 0) {
      props.setT11(props.T11, (props.T11[3] = { Line3 }));
    }
    if (Object.keys(Line4).length !== 0) {
      props.setT11(props.T11, (props.T11[4] = { Line4 }));
    } else if (props.T11 !== undefined) {
      if (props.T11[0] !== undefined) {
        setLine0(props.T11[0].Line0);
      }
      if (props.T11[1] !== undefined) {
        setLine1(props.T11[1].Line1);
      }
      if (props.T11[2] !== undefined) {
        setLine2(props.T11[2].Line2);
      }
      if (props.T11[3] !== undefined) {
        setLine3(props.T11[3].Line3);
      }
      if (props.T11[4] !== undefined) {
        setLine4(props.T11[4].Line4);
      }
    }
  }, [props, Line0, Line1, Line2, Line3, Line4]);
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
      <View style={styles.Column}>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line3.Diameter}
            onChange={(event) => {
              setLine3({ ...Line3, Diameter: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line3.Quantity}
            onChange={(event) => {
              setLine3({ ...Line3, Diameter: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line4.Diameter}
            onChange={(event) => {
              setLine4({ ...Line4, Diameter: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line4.Quantity}
            onChange={(event) => {
              setLine4({ ...Line4, Diameter: event.nativeEvent.text });
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
