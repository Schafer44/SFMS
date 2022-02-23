import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { db } from "./FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function NewTimesheet() {
  return (
    <View style={styles.container}>
      <View style={styles.newJob}>
        <Text style={styles.Text}>New Timesheet</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  Text: {
    color: "white",
  },
  newJob: {
    width: "95%",
    height: 70,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
});
