import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import ExportDataToExcel from "../../ExportToExcel";

export default function ForemanFooter(props) {
  const [signature, setSign] = useState(null);
  const [Header, setHeader] = useState([]);
  const [T1, setT1] = useState([]);
  const [T2, setT2] = useState([]);
  const [T3, setT3] = useState([]);
  const [T4, setT4] = useState([]);
  const [T5, setT5] = useState([]);
  const [T7, setT6] = useState([]);
  const [T6, setT7] = useState([]);
  return (
    <View style={styles.footerPage}>
      <View style={styles.footerPageSig}>
        <TouchableOpacity
          title="Signature"
          underlayColor="#fff"
          style={styles.SubBtn}
          onPress={() => toggleOverlay()}
        >
          <Text style={styles.loginText}>Signature</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.SubBtn}
          title="Submit"
          underlayColor="#fff"
          onPress={() => {
            createTimesheet({
              TempName: "TestTimesheet",
              TempBaseId: "001",
              TempId: "1",
            });
          }}
        >
          <Text style={styles.loginText}>Submit</Text>
        </TouchableOpacity>
        <ExportDataToExcel />
      </View>

      <Image
        resizeMode={"contain"}
        style={styles.prev}
        source={{ uri: signature }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  footerPage: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  footerPageSig: {
    flex: 2,
    flexDirection: "column",
  },
  SubBtn: {
    width: "100%",
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignContent: "center",
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
  },
  prev: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});
