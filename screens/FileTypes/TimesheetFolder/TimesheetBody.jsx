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

export default function TimesheetBody(props) {
  const [Table, setTable] = useState({});
  const [Rows, setRows] = useState([]);
  const [signature, setSign] = useState(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (Object.keys(Table).length !== 0) {
      props.setT8(Table);
    } else if (props.T8 !== undefined) {
      setTable(props.T8);
    }
  }, [props, Table]);
  const addRow = () => {
    var rows = ["", "", "", "", "", "", "", ""];
    var temp = Object.keys(Table).length;

    var Keys = "Line" + temp;
    setTable({
      ...Table,
      [Keys]: rows,
    });
    //rows.push({ name: "", sig: "", num: temp });
    //setRows([...rows]);
  };
  return (
    <View View style={styles.body}>
      <TouchableOpacity
        style={styles.SubBtn}
        title="Lock"
        onPress={() => addRow()}
      >
        <Text style={styles.LockText}>Add Row</Text>
      </TouchableOpacity>

      <ScrollView style={styles.bodyScroll}>
        <View style={styles.Column}>
          {Object.keys(Table)
            .sort()
            .map((Keys, r) => (
              <View key={Keys} style={styles.Line}>
                <View style={styles.bGridLarge}>
                  <TextInput
                    style={styles.textInputTest}
                    placeholder=""
                    value={Table[Keys][0]}
                    onChange={(event) => {
                      var temp = Keys;
                      var temp2;
                      var temp3 = Table[Keys];
                      //[temp] = [event];
                      var [temp] = [event.nativeEvent.text];
                      temp3[0] = event.nativeEvent.text;
                      temp2 = [temp];
                      setTable({
                        ...Table,
                        [Keys]: temp3,
                      });
                    }}
                  />
                </View>
                <View style={styles.bGridSmall}>
                  <TextInput
                    style={styles.textInputTest}
                    placeholder=""
                    value={Table[Keys][1]}
                    onChange={(event) => {
                      var temp = Keys;
                      var temp2;
                      var temp3 = Table[Keys];
                      //[temp] = [event];
                      var [temp] = [event.nativeEvent.text];
                      temp3[1] = event.nativeEvent.text;
                      temp2 = [temp];
                      setTable({
                        ...Table,
                        [Keys]: temp3,
                      });
                    }}
                  />
                </View>
                <View style={styles.bGridSmall}>
                  <TextInput
                    style={styles.textInputTest}
                    placeholder=""
                    value={Table[Keys][2]}
                    onChange={(event) => {
                      var temp = Keys;
                      var temp2;
                      var temp3 = Table[Keys];
                      //[temp] = [event];
                      var [temp] = [event.nativeEvent.text];
                      temp3[2] = event.nativeEvent.text;
                      temp2 = [temp];
                      setTable({
                        ...Table,
                        [Keys]: temp3,
                      });
                    }}
                  />
                </View>
                <View style={styles.bGridSmall}>
                  <TextInput
                    style={styles.textInputTest}
                    placeholder=""
                    value={Table[Keys][3]}
                    onChange={(event) => {
                      var temp = Keys;
                      var temp2;
                      var temp3 = Table[Keys];
                      //[temp] = [event];
                      var [temp] = [event.nativeEvent.text];
                      temp3[3] = event.nativeEvent.text;
                      temp2 = [temp];
                      setTable({
                        ...Table,
                        [Keys]: temp3,
                      });
                    }}
                  />
                </View>
                <View style={styles.bGridSmall}>
                  <TextInput
                    style={styles.textInputTest}
                    placeholder=""
                    value={Table[Keys][4]}
                    onChange={(event) => {
                      var temp = Keys;
                      var temp2;
                      var temp3 = Table[Keys];
                      //[temp] = [event];
                      var [temp] = [event.nativeEvent.text];
                      temp3[4] = event.nativeEvent.text;
                      temp2 = [temp];
                      setTable({
                        ...Table,
                        [Keys]: temp3,
                      });
                    }}
                  />
                </View>
                <View style={styles.bGridSmall}>
                  <TextInput
                    style={styles.textInputTest}
                    placeholder=""
                    value={Table[Keys][5]}
                    onChange={(event) => {
                      var temp = Keys;
                      var temp2;
                      var temp3 = Table[Keys];
                      //[temp] = [event];
                      var [temp] = [event.nativeEvent.text];
                      temp3[5] = event.nativeEvent.text;
                      temp2 = [temp];
                      setTable({
                        ...Table,
                        [Keys]: temp3,
                      });
                    }}
                  />
                </View>
                <View style={styles.bGridMedium}>
                  <TextInput
                    style={styles.textInputTest}
                    placeholder=""
                    value={Table[Keys][6]}
                    onChange={(event) => {
                      var temp = Keys;
                      var temp2;
                      var temp3 = Table[Keys];
                      //[temp] = [event];
                      var [temp] = [event.nativeEvent.text];
                      temp3[6] = event.nativeEvent.text;
                      temp2 = [temp];
                      setTable({
                        ...Table,
                        [Keys]: temp3,
                      });
                    }}
                  />
                </View>
                <View style={styles.bGridLarge}>
                  <TextInput
                    style={styles.textInputTest}
                    placeholder=""
                    value={Table[Keys][7]}
                    onChange={(event) => {
                      var temp = Keys;
                      var temp2;
                      var temp3 = Table[Keys];
                      //[temp] = [event];
                      var [temp] = [event.nativeEvent.text];
                      temp3[7] = event.nativeEvent.text;
                      temp2 = [temp];
                      setTable({
                        ...Table,
                        [Keys]: temp3,
                      });
                    }}
                  />
                </View>
              </View>
            ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Line: {
    flex: 1,
    height: 75,
    borderStyle: "solid",
    borderWidth: 2,
    width: "100%",
    flexDirection: "row",
    borderColor: "#d4d4d4",
  },
  body2: {
    flex: 1,
    height: 400,
    borderStyle: "solid",
    borderWidth: 2,
    width: "100%",
    flexDirection: "row",
    borderColor: "#d4d4d4",
  },

  bodyScroll: {
    width: "100%",
    height: "90%",
  },
  body: {
    borderStyle: "solid",
    borderWidth: 2,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    borderColor: "#d4d4d4",
  },
  Title: {
    flex: 1.2,
    borderStyle: "solid",
    borderWidth: 1,
  },
  Row: {
    width: "100%",
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
  },
  Column: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    borderColor: "#d4d4d4",
    height: "100%",
  },
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
    backgroundColor: "green",
    color: "white",
  },
  LockText: {
    width: "100%",
    color: "white",
    alignContent: "center",
    textAlign: "center",
  },
  TitleText2: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  bGridSmall: {
    height: "100%",
    flex: 2,
    backgroundColor: "white",
    borderColor: "#d4d4d4",
    borderWidth: 1,
  },
  bGridMedium: {
    height: "100%",
    flex: 4,
    backgroundColor: "white",
    borderColor: "#d4d4d4",
    borderWidth: 1,
  },
  bGridLarge: {
    height: "100%",
    flex: 8,
    backgroundColor: "white",
    borderColor: "#d4d4d4",
    borderWidth: 1,
  },
});
