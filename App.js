import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import React, { useState, useEffect } from "react";
import TimeSheet from "./screens/FileTypes/Timesheet";
import { SignatureCapture } from "./screens/FileTypes/SignatureCapture";
import SigCaptureWeb from "./screens/FileTypes/SigCaptureWeb";
export default function App() {
  return <TimeSheet />;
  //<>{Platform.OS === "web" ? <SigCaptureWeb /> : <SignatureCapture />}</>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
