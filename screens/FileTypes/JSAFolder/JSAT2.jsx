import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function JSAT2(props) {
  // State to manage the Table object
  const [Table, setTable] = useState({});

  // useEffect to synchronize Table state with props.T2
  useEffect(() => {
    // Check if Table state is not empty
    if (Object.keys(Table).length !== 0) {
      // Update props.T2 using setT2 and include Table
      props.setT2(props.T2, (props.T2[0] = { Table }));
    } else if (props.T2 !== undefined) {
      // Check if props.T2 is defined
      if (props.T2[0] !== undefined) {
        // Set Table state based on props.T2[0].Table
        setTable(props.T2[0].Table);
      }
    }
  }, [props, Table]);

  return (
    <View style={styles.body}>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}>
            Description of work to be performed:
          </Text>
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            multiline={true}
            value={Table.Description}
            onChange={(event) => {
              setTable({ ...Table, Description: event.nativeEvent.text });
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
