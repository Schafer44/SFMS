import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import { SignatureCapture } from "../SignatureCapture";

export default function JSAT9(props) {
  const [Line0, setLine0] = useState({});
  const [Line1, setLine1] = useState({});
  const [Line2, setLine2] = useState({});
  const [Line3, setLine3] = useState({});
  const [signature, setSign] = useState(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (Object.keys(Line0).length !== 0) {
      props.setT9(props.T9, (props.T9[0] = { Line0 }));
    }
    if (Object.keys(Line1).length !== 0) {
      props.setT9(props.T9, (props.T9[1] = { Line1 }));
    }
    if (Object.keys(Line2).length !== 0) {
      props.setT9(props.T9, (props.T9[2] = { Line2 }));
    }
    if (Object.keys(Line3).length !== 0) {
      props.setT9(props.T9, (props.T9[3] = { Line3 }));
    } else if (props.T9 !== undefined) {
      if (props.T9[0] !== undefined) {
        setLine0(props.T9[0].Line0);
      }
      if (props.T9[1] !== undefined) {
        setLine1(props.T9[1].Line1);
      }
      if (props.T9[2] !== undefined) {
        setLine2(props.T9[2].Line2);
      }
      if (props.T9[3] !== undefined) {
        setLine3(props.T9[3].Line3);
      }
    }
  }, [props, Line0, Line1, Line2, Line3]);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return visible ? (
    <View style={styles.body2}>
      <SignatureCapture
        visible={visible}
        setVisible={setVisible}
        signature={signature}
        setSign={setSign}
        SignInScroll={props.SignInScroll}
      />
    </View>
  ) : (
    <View style={styles.body}>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text>Print Name:</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line0.NamePrint}
            onChange={(event) => {
              setLine0({ ...Line0, NamePrint: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text>Signature:</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={styles.SubBtn}
            title="Submit"
            underlayColor="#fff"
            onPress={() => toggleOverlay()}
          >
            <Image
              resizeMode={"contain"}
              style={styles.prev}
              source={{ uri: signature }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    height: 100,
    borderStyle: "solid",
    borderWidth: 3,
    width: "100%",
    flexDirection: "row",
  },
  body2: {
    flex: 1,
    height: 400,
    borderStyle: "solid",
    borderWidth: 3,
    width: "100%",
    flexDirection: "row",
  },
  SubBtn: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  prev: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  Title: {
    flex: 1.2,
    borderStyle: "solid",
    borderWidth: 1,
  },
  Row: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
  },
  TitleText1: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  Column: { flex: 3 },
  Column2: { flex: 1 },
  ColumnTitle: { flex: 0.3, borderStyle: "solid", borderWidth: 1 },
});
