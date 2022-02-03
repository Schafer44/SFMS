import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function TimesheetLine(props) {
  return (
    <View style={styles.body}>
      <View style={styles.bGridLarge}>
        <View style={styles.bGridColumns}>
          <TextInput
            style={styles.textInputTest}
            placeholder=" "
            value={props.searchPhrase}
            onChangeText={props.setSearchPhrase}
          />
        </View>
      </View>
      <View style={styles.bGridSmall}>
        <View style={styles.bGridColumns}>
          <TextInput
            style={styles.textInputTest}
            placeholder=" "
            value={props.searchPhrase}
            onChangeText={props.setSearchPhrase}
          />
        </View>
      </View>
      <View style={styles.bGridSmall}>
        <View style={styles.bGridColumns}>
          <TextInput
            style={styles.textInputTest}
            placeholder=" "
            value={props.searchPhrase}
            onChangeText={props.setSearchPhrase}
          />
        </View>
      </View>
      <View style={styles.bGridSmall}>
        <View style={styles.bGridColumns}>
          <TextInput
            style={styles.textInputTest}
            placeholder=" "
            value={props.searchPhrase}
            onChangeText={props.setSearchPhrase}
          />
        </View>
      </View>
      <View style={styles.bGridSmall}>
        <View style={styles.bGridColumns}>
          <TextInput
            style={styles.textInputTest}
            placeholder=" "
            value={props.searchPhrase}
            onChangeText={props.setSearchPhrase}
          />
        </View>
      </View>
      <View style={styles.bGridSmall}>
        <View style={styles.bGridColumns}>
          <TextInput
            style={styles.textInputTest}
            placeholder=" "
            value={props.searchPhrase}
            onChangeText={props.setSearchPhrase}
          />
        </View>
      </View>
      <View style={styles.bGridMedium}>
        <View style={styles.bGridColumns}>
          <TextInput
            style={styles.textInputTest}
            placeholder=" "
            value={props.searchPhrase}
            onChangeText={props.setSearchPhrase}
          />
        </View>
      </View>
      <View style={styles.bGridLarge}>
        <View style={styles.bGridColumns}>
          <TextInput
            style={styles.textInputTest}
            placeholder=" "
            value={props.searchPhrase}
            onChangeText={props.setSearchPhrase}
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
    backgroundColor: "darkgrey",
  },

  bGridSmall: {
    height: "100%",
    flex: 2,
    backgroundColor: "white",
    flexWrap: "wrap",
    borderColor: "black",
    borderWidth: 4,
  },
  bGridMedium: {
    height: "100%",
    flex: 4,
    backgroundColor: "white",
    flexWrap: "wrap",
    borderColor: "black",
    borderWidth: 4,
  },
  bGridLarge: {
    height: "100%",
    flex: 8,
    backgroundColor: "white",
    flexWrap: "wrap",
    borderColor: "black",
    borderWidth: 4,
  },
  bGridColumns: {
    height: "100%",
    flex: 1,
    backgroundColor: "white",
  },
  Text: {
    color: "white",
  },
  textInputTest: {
    fontSize: 15,
    padding: 8,
    paddingRight: 1000,
    width: "100%",
    height: "100%",
    color: "white",
  },
});
