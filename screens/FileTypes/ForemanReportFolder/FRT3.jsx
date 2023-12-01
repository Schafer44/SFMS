import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function FRT3(props) {
  // States to manage Line0, Line1, Line2, Line3, and Line4 data
  const [Line0, setLine0] = useState({});
  const [Line1, setLine1] = useState({});
  const [Line2, setLine2] = useState({});
  const [Line3, setLine3] = useState({});
  const [Line4, setLine4] = useState({});

  // Effect hook to synchronize Line0, Line1, Line2, Line3, and Line4 with T3 in props
  useEffect(() => {
    // Check if Line0 has data
    if (Object.keys(Line0).length !== 0) {
      // Update T3 in props with Line0 data
      props.setT3(props.T3, (props.T3[0] = { Line0 }));
    }

    // Check if Line1 has data
    if (Object.keys(Line1).length !== 0) {
      // Update T3 in props with Line1 data
      props.setT3(props.T3, (props.T3[1] = { Line1 }));
    }

    // Check if Line2 has data
    if (Object.keys(Line2).length !== 0) {
      // Update T3 in props with Line2 data
      props.setT3(props.T3, (props.T3[2] = { Line2 }));
    }

    // Check if Line3 has data
    if (Object.keys(Line3).length !== 0) {
      // Update T3 in props with Line3 data
      props.setT3(props.T3, (props.T3[3] = { Line3 }));
    }

    // Check if Line4 has data
    if (Object.keys(Line4).length !== 0) {
      // Update T3 in props with Line4 data
      props.setT3(props.T3, (props.T3[4] = { Line4 }));
    } else if (props.T3 !== undefined) {
      // Check if T3 in props has data
      if (props.T3[0] !== undefined) {
        // Set Line0 state with data from T3 in props
        setLine0(props.T3[0].Line0);
      }
      if (props.T3[1] !== undefined) {
        // Set Line1 state with data from T3 in props
        setLine1(props.T3[1].Line1);
      }
      if (props.T3[2] !== undefined) {
        // Set Line2 state with data from T3 in props
        setLine2(props.T3[2].Line2);
      }
      if (props.T3[3] !== undefined) {
        // Set Line3 state with data from T3 in props
        setLine3(props.T3[3].Line3);
      }
      if (props.T3[4] !== undefined) {
        // Set Line4 state with data from T3 in props
        setLine4(props.T3[4].Line4);
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
              setLine0({ ...Line0, Quantity: event.nativeEvent.text });
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
              setLine1({ ...Line1, Quantity: event.nativeEvent.text });
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
              setLine2({ ...Line2, Quantity: event.nativeEvent.text });
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
              setLine3({ ...Line3, Quantity: event.nativeEvent.text });
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
              setLine4({ ...Line4, Quantity: event.nativeEvent.text });
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
