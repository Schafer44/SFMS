import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import React, { useState, useEffect } from "react";
import TimeSheet from "./screens/FileTypes/Timesheet";
export default function App() {
  return <TimeSheet />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
