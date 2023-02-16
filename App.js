import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import React, { useState, useEffect } from "react";
import Timesheet from "./screens/FileTypes/TimesheetFolder/Timesheet";
import Foreman from "./screens/FileTypes/ForemanReportFolder/ForemanReport";
import JSA from "./screens/FileTypes/JSAFolder/JSA";
import OQ from "./screens/FileTypes/OQFolder/OQ";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Job } from "./screens/Job";
import Login from "./screens/login";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Job" component={Job} />
        <Stack.Screen name="Timesheet" component={Timesheet} />
        <Stack.Screen name="JSA" component={JSA} />
        <Stack.Screen name="Foreman Report" component={Foreman} />
        <Stack.Screen name="OQ" component={OQ} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  //<>{Platform.OS === "web" ? <SigCaptureWeb /> : <SignatureCapture />}</>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4d4d4",
    alignItems: "center",
    justifyContent: "center",
  },
});
