import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function FRT7(props) {
  // State to manage the Line0 data
  const [Line0, setLine0] = useState({});

  // Effect hook to synchronize Line0 with T7 in props
  useEffect(() => {
    // Check if Line0 has data
    if (Object.keys(Line0).length !== 0) {
      // Update T7 in props with Line0 data
      props.setT7(props.T7, (props.T7[0] = { Line0 }));
    } else if (props.T7 !== undefined) {
      // Check if T7 in props has data
      if (props.T7[0] !== undefined) {
        // Set Line0 state with data from T7 in props
        setLine0(props.T7[0].Line0);
      }
    }
  }, [props, Line0]);

  return (
    <View style={styles.GC}>
      <View style={styles.ColumnTitle}>
        <View style={styles.Title}>
          <Text style={styles.TitleText1}>Overview of Progress</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.Column}>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line0.Comment}
              multiline={true}
              onChange={(event) => {
                setLine0({ ...Line0, Comment: event.nativeEvent.text });
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  GC: { height: "100%", flex: 1 },
  body: {
    flexDirection: "row",
  },
  Title: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
  },
  Row: {
    flex: 6,
    borderStyle: "solid",
    borderWidth: 1,
  },
  Column: { flex: 1 },
  ColumnTitle: { flex: 0.05, borderStyle: "solid", borderWidth: 1 },
  textInputTest: { width: "100%", height: 100, padding: "1%" },
  TitleText1: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
});
