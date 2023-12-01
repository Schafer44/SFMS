import { StatusBar } from "expo-status-bar";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
} from "react-native";
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
import Terms from "./screens/Terms";
import { useMediaQuery } from "react-responsive";
const Stack = createNativeStackNavigator();
export default function App() {
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 600px)" });
  return (
    <View style={{ backgroundColor: "black", height: "100%" }}>
      <View
        style={
          !isBigScreen
            ? { height: "95%", marginBottom: "5%", maxHeight: "95%" }
            : { height: "100%" }
        }
      >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerBackVisible: false,
              }}
            />
            <Stack.Screen
              name="Terms and Conditions"
              component={Terms}
              options={{
                headerBackVisible: false,
              }}
            />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Job" component={Job} />
            <Stack.Screen name="Timesheet" component={Timesheet} />
            <Stack.Screen name="JSA" component={JSA} />
            <Stack.Screen name="Foreman Report" component={Foreman} />
            <Stack.Screen name="OQ" component={OQ} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
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
