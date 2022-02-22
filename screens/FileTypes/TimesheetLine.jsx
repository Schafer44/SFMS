import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function TimesheetLine(props) {
  const [Line, setLine] = useState({});
  useEffect(() => {
    if (Object.keys(Line).length !== 0) {
      props.setLines(props.Lines, (props.Lines[props.id] = { Line }));
    } else if (props.Lines[props.id] !== undefined) {
      setLine(props.Lines[props.id].Line);
    }
  });
  return (
    <View style={styles.body}>
      <View style={styles.bGridLarge}>
        <View style={styles.bGridColumns}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line.Name}
            onChange={(event) => {
              setLine({ ...Line, Name: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={styles.bGridSmall}>
        <View style={styles.bGridColumns}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line.Occ}
            onChange={(event) => {
              setLine({ ...Line, Occ: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={styles.bGridSmall}>
        <View style={styles.bGridColumns}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line.Hrs}
            onChange={(event) => {
              setLine({ ...Line, Hrs: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={styles.bGridSmall}>
        <View style={styles.bGridColumns}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line.PU}
            onChange={(event) => {
              setLine({ ...Line, PU: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={styles.bGridSmall}>
        <View style={styles.bGridColumns}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line.Rig}
            onChange={(event) => {
              setLine({ ...Line, Rig: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={styles.bGridSmall}>
        <View style={styles.bGridColumns}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line.PD}
            onChange={(event) => {
              setLine({ ...Line, PD: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={styles.bGridMedium}>
        <View style={styles.bGridColumns}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line.EquipNum}
            onChange={(event) => {
              setLine({ ...Line, EquipNum: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={styles.bGridLarge}>
        <View style={styles.bGridColumns}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line.EquipDesc}
            onChange={(event) => {
              setLine({ ...Line, EquipDesc: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyScroll: {
    width: "100%",
    flexDirection: "row",
    flexGrow: 1,
  },
  body: {
    width: "100%",
    height: 100,
    flexDirection: "row",
  },

  bGridSmall: {
    height: "100%",
    flex: 2,
    backgroundColor: "white",
    borderColor: "#d4d4d4",
    borderWidth: 1,
  },
  bGridMedium: {
    height: "100%",
    flex: 4,
    backgroundColor: "black",
    borderColor: "#d4d4d4",
    borderWidth: 1,
  },
  bGridLarge: {
    height: "100%",
    flex: 8,
    backgroundColor: "white",
    borderColor: "#d4d4d4",
    borderWidth: 1,
  },
  bGridColumns: {
    height: "100%",
    flex: 1,
    backgroundColor: "white",
  },
  bGridColumnsss: {
    height: "100%",
    flex: 4,
    backgroundColor: "white",
  },
  Text: {
    color: "black",
  },
  textInputTest: {
    fontSize: 15,
    padding: 5,
    width: "100%",
    height: "100%",
    color: "black",
  },
});
