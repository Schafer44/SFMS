import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import React, { useState, useEffect } from "react";
import TimeSheet from "./screens/FileTypes/Timesheet";
import { SignatureCapture } from "./screens/FileTypes/SignatureCapture";
import SigCaptureWeb from "./screens/FileTypes/SigCaptureWeb";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Job from "./screens/Job";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Job" component={Job} />
        <Stack.Screen name="TimeSheet" component={TimeSheet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
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
