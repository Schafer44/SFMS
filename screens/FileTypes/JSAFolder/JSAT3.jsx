import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function JSAT3(props) {
  // State to manage the Table object
  const [Table, setTable] = useState({});

  // useEffect to synchronize Table state with props.T3
  useEffect(() => {
    // Check if Table state is not empty
    if (Object.keys(Table).length !== 0) {
      // Update props.T3 using setT3 and include Table
      props.setT3(props.T3, (props.T3[0] = { Table }));
    } else if (props.T3 !== undefined) {
      // Check if props.T3 is defined
      if (props.T3[0] !== undefined) {
        // Set Table state based on props.T3[0].Table
        setTable(props.T3[0].Table);
      }
    }
  }, [props, Table]);

  return (
    <View style={styles.body}>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}>Topics discussed for tailgate:</Text>
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            multiline={true}
            value={Table.Topics}
            onChange={(event) => {
              setTable({ ...Table, Topics: event.nativeEvent.text });
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

  textInputTest: {
    paddingLeft: 5,
    width: "100%",
    height: 100,
    flex: 1,
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
