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
  const [signature0, setSign0] = useState(null);
  const [signature1, setSign1] = useState(null);
  const [signature2, setSign2] = useState(null);
  const [signature3, setSign3] = useState(null);
  const [visible, setVisible] = useState(false);
  const [visible0, setVisible0] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
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

  const toggleOverlay0 = () => {
    setVisible0(!visible0);
  };
  const toggleOverlay1 = () => {
    setVisible1(!visible1);
  };
  const toggleOverlay2 = () => {
    setVisible2(!visible2);
  };
  const toggleOverlay3 = () => {
    setVisible3(!visible3);
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
  ) : visible0 ? (
    <View style={styles.body2}>
      <SignatureCapture
        visible={visible0}
        setVisible={setVisible0}
        signature={signature0}
        setSign={setSign0}
        SignInScroll={props.SignInScroll}
        Line={Line0}
        setLine={setLine0}
      />
    </View>
  ) : visible1 ? (
    <View style={styles.body2}>
      <SignatureCapture
        visible={visible1}
        setVisible={setVisible1}
        signature={signature1}
        setSign={setSign1}
        SignInScroll={props.SignInScroll}
        Line={Line1}
        setLine={setLine1}
      />
    </View>
  ) : visible2 ? (
    <View style={styles.body2}>
      <SignatureCapture
        visible={visible2}
        setVisible={setVisible2}
        signature={signature2}
        setSign={setSign2}
        SignInScroll={props.SignInScroll}
        Line={Line2}
        setLine={setLine2}
      />
    </View>
  ) : visible3 ? (
    <View style={styles.body2}>
      <SignatureCapture
        visible={visible3}
        setVisible={setVisible3}
        signature={signature3}
        setSign={setSign3}
        SignInScroll={props.SignInScroll}
        Line={Line3}
        setLine={setLine3}
      />
    </View>
  ) : (
    <View style={styles.body}>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text>Saftey Representatives:</Text>
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

        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line1.NamePrint}
            onChange={(event) => {
              setLine1({ ...Line1, NamePrint: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line2.NamePrint}
            onChange={(event) => {
              setLine2({ ...Line2, NamePrint: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line3.NamePrint}
            onChange={(event) => {
              setLine3({ ...Line3, NamePrint: event.nativeEvent.text });
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
            onPress={() => toggleOverlay0()}
          >
            <Image
              resizeMode={"contain"}
              style={styles.prev}
              source={{ uri: Line0.signature }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={styles.SubBtn}
            title="Submit"
            underlayColor="#fff"
            onPress={() => toggleOverlay1()}
          >
            <Image
              resizeMode={"contain"}
              style={styles.prev}
              source={{ uri: Line1.signature }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={styles.SubBtn}
            title="Submit"
            underlayColor="#fff"
            onPress={() => toggleOverlay2()}
          >
            <Image
              resizeMode={"contain"}
              style={styles.prev}
              source={{ uri: Line2.signature }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={styles.SubBtn}
            title="Submit"
            underlayColor="#fff"
            onPress={() => toggleOverlay3()}
          >
            <Image
              resizeMode={"contain"}
              style={styles.prev}
              source={{ uri: Line3.signature }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: 200,
    flex: 1,
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
  textInputTest: {
    paddingLeft: 5,
    width: "100%",
    height: "100%",
    flex: 1,
  },
  Column: { flex: 1 },
  Column2: { flex: 1 },
  ColumnTitle: { flex: 0.3, borderStyle: "solid", borderWidth: 1 },
});
