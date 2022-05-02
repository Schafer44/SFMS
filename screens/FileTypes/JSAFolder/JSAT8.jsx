import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import { SignatureCapture } from "../SignatureCapture";

export default function JSAT8(props) {
  const [Table, setTable] = useState({});
  const [Rows, setRows] = useState([]);
  const [signature, setSign] = useState(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (Object.keys(Table).length !== 0) {
      props.setT8(props.T8, (props.T8[0] = { Table }));
    } else if (props.T8 !== undefined) {
      if (props.T8[0] !== undefined) {
        setTable(props.T8[0].Table);
      }
    }
  }, [props, Table]);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const addRow = () => {
    var rows = ["", ""];
    var temp = Object.keys(Table).length;
    var Keys = "Rows" + temp;
    setTable({
      ...Table,
      [Keys]: rows,
    });
    //rows.push({ name: "", sig: "", num: temp });
    //setRows([...rows]);
  };
  return (
    <View View style={styles.body}>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text>Print Name:</Text>
        </View>
        {Object.keys(Table)
          .sort()
          .map((Keys, r) => (
            <View key={Keys}>
              <View style={styles.Row}>
                <TextInput
                  style={styles.textInputTest}
                  placeholder=""
                  value={Table[Keys][0]}
                  onChange={(event) => {
                    var temp = Keys;
                    var temp2;
                    //[temp] = [event];
                    var [temp] = [event.nativeEvent.text, "dsfsdf"];
                    temp2 = [temp];
                    if (Table[Keys][1] !== undefined) {
                      temp2[1] = Table[Keys][1];
                    } else {
                      temp2[1] = "";
                    }
                    setTable({
                      ...Table,
                      [Keys]: temp2,
                    });
                  }}
                />
              </View>
            </View>
          ))}
      </View>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text>Signature:</Text>
        </View>
        {Object.keys(Table)
          .sort()
          .map((Keys, r) =>
            visible ? (
              <View style={styles.body2}>
                <SignatureCapture
                  Keys={Keys}
                  setTable={setTable}
                  Table={Table}
                  visible={visible}
                  setVisible={setVisible}
                  signature={Table[Keys][1]}
                  SignInScroll={props.SignInScroll}
                />
              </View>
            ) : (
              <View key={Keys}>
                <View style={styles.Row}>
                  <TouchableOpacity
                    style={styles.SubBtn}
                    underlayColor="#fff"
                    onPress={() => setVisible(!visible)}
                  >
                    <Image
                      resizeMode={"contain"}
                      style={styles.prev}
                      source={{ uri: Table[Keys][1] }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )
          )}
      </View>
      <TouchableOpacity
        style={styles.SubBtn}
        title="Lock"
        onPress={() => addRow()}
      >
        <Text style={styles.LockText}>Add Row</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body2: {
    flex: 1,
    height: 400,
    borderStyle: "solid",
    borderWidth: 3,
    width: "100%",
    flexDirection: "row",
  },
  body: {
    borderStyle: "solid",
    borderWidth: 3,
    width: "100%",
    height: "100%",
    flexDirection: "row",
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
  Column: { flex: 1, flexDirection: "column", width: "100%" },
  ColumnTitle: {
    flex: 2,
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: -1,
  },
  TitleText1: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },

  prev: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  SubBtn: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  TitleText2: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
});
