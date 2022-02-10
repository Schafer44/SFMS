import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function TimesheetLineComment(props) {
  return (
    <View style={styles.body}>
      <TextInput
        style={styles.textInputTest}
        placeholder=""
        value={props.Comment}
        onChangeText={props.setComment}
        multiline={true}
        maxLength={400}
        numberOfLines={4}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: "100%",
    backgroundColor: "white",
    borderColor: "black",
    borderBottomWidth: 4,
  },
  Text: {
    color: "black",
  },
  textInputTest: {
    height: "100%",
    fontSize: 15,
    padding: 8,
    width: "100%",
    color: "black",
  },
});
