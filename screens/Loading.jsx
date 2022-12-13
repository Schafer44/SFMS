import React from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";

export default function Loading() {
  return <View style={styles.spinnerGlobalContainer}></View>;
}

const styles = StyleSheet.create({
  loadingSpinner: {},
  spinnerGlobalContainer: {},
  spinnerContainer: {},
});
