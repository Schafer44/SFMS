import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

export default function OQ(props) {
  const download = async () => {
    const downloadPath = FileSystem.cacheDirectory + "fileName.pdf";
    const { uri: localUrl } = await FileSystem.downloadAsync(
      props.route.params.file.URI,
      downloadPath
    );
    Sharing.shareAsync(localUrl, {
      UTI: "image/pdf",
    });
  };
  return (
    <View style={styles.GC}>
      <View style={styles.prev}>
        <WebView
          style={styles.prev}
          source={{
            uri: props.route.params.file.URI,
          }}
        />
      </View>
      <View>
        <TouchableOpacity
          title="Signature"
          underlayColor="#fff"
          style={styles.SubBtn}
          onPress={() => download()}
        >
          <Text style={styles.loginText}>Download</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  GC: { height: "100%", width: "100%" },
  prev: { height: "100%", width: "100%" },
  SubBtn: {
    position: "absolute",
    width: "15%",
    height: 50,
    backgroundColor: "green",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    bottom: 10,
    left: 10,
    borderRadius: 20,
  },
  loginText: {
    color: "white",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
});
