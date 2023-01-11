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

export default function JSAT11(props) {
  const [Line0, setLine0] = useState({});
  /*const [Line1, setLine1] = useState({});
  const [Line2, setLine2] = useState({});
  const [Line3, setLine3] = useState({});*/
  useEffect(() => {
    if (Object.keys(Line0).length !== 0) {
      props.setT11(props.T11, (props.T11[0] = { Line0 }));
    } /*
    if (Object.keys(Line1).length !== 0) {
      props.setT11(props.T11, (props.T11[1] = { Line1 }));
    }
    if (Object.keys(Line2).length !== 0) {
      props.setT11(props.T11, (props.T11[2] = { Line2 }));
    }
    if (Object.keys(Line3).length !== 0) {
      props.setT11(props.T11, (props.T11[3] = { Line3 }));
    }*/ else if (props.T11 !== undefined) {
      if (props.T11[0] !== undefined) {
        setLine0(props.T11[0].Line0);
      }
      /*if (props.T11[1] !== undefined) {
        setLine1(props.T11[1].Line1);
      }
      if (props.T11[2] !== undefined) {
        setLine2(props.T11[2].Line2);
      }
      if (props.T11[3] !== undefined) {
        setLine3(props.T11[3].Line3);
      }*/
    }
  }, [props, Line0 /*, Line1, Line2, Line3*/]);
  const addRow = () => {
    var rows = ["", "", ""];
    var temp = Object.keys(Line0).length;
    var Keys = "Rows" + temp;
    setLine0({
      ...Line0,
      [Keys]: rows,
    });
    //rows.push({ name: "", sig: "", num: temp });
    //setRows([...rows]);
  };
  return (
    <View>
      <View style={styles.body}>
        <View style={styles.Column}>
          <View style={styles.Row}>
            <Text>Task / Job Steps</Text>
          </View>
          {Object.keys(Line0)
            .sort()
            .map((Keys, r) => (
              <View style={styles.Row} key={Keys}>
                <TextInput
                  className="textInputTestSig"
                  placeholder=""
                  value={Line0[Keys][0]}
                  onChange={(event) => {
                    var temp3 = Line0[Keys];
                    temp3[0] = event.nativeEvent.text;
                    //[temp] = [event];
                    setLine0({
                      ...Line0,
                      [Keys]: temp3,
                    });
                  }}
                />
              </View>
            ))}
          {/*<View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line0.Task}
              onChange={(event) => {
                setLine0({ ...Line0, Task: event.nativeEvent.text });
              }}
            />
          </View>*/}
        </View>
        <View style={styles.Column}>
          <View style={styles.Row}>
            <Text>Potential hazards</Text>
          </View>
          {Object.keys(Line0)
            .sort()
            .map((Keys, r) => (
              <View style={styles.Row} key={Keys}>
                <TextInput
                  className="textInputTestSig"
                  placeholder=""
                  value={Line0[Keys][1]}
                  onChange={(event) => {
                    var temp3 = Line0[Keys];
                    temp3[1] = event.nativeEvent.text;
                    //[temp] = [event];
                    setLine0({
                      ...Line0,
                      [Keys]: temp3,
                    });
                  }}
                />
              </View>
            ))}
          {/*<View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line0.Hazards}
              onChange={(event) => {
                setLine0({ ...Line0, Hazards: event.nativeEvent.text });
              }}
            />
            </View>*/}
        </View>
        <View style={styles.Column}>
          <View style={styles.Row}>
            <Text>Safe Work Recommendations</Text>
          </View>
          {Object.keys(Line0)
            .sort()
            .map((Keys, r) => (
              <View style={styles.Row} key={Keys}>
                <TextInput
                  className="textInputTestSig"
                  placeholder=""
                  value={Line0[Keys][2]}
                  onChange={(event) => {
                    var temp3 = Line0[Keys];
                    temp3[2] = event.nativeEvent.text;
                    //[temp] = [event];
                    setLine0({
                      ...Line0,
                      [Keys]: temp3,
                    });
                  }}
                />
              </View>
            ))}
          {/*<View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line0.Recommendations}
              onChange={(event) => {
                setLine0({ ...Line0, Recommendations: event.nativeEvent.text });
              }}
            />
            </View>*/}
        </View>
      </View>

      <TouchableOpacity
        style={styles.SubBtn}
        title="Add Row"
        onPress={() => addRow()}
      >
        <Text style={styles.LockText}>Add Row</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    height: "100%",
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
    height: 50,
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "green",
    color: "white",
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

  textInputTest: {
    paddingLeft: 5,
    width: "100%",
    height: "100%",
    flex: 1,
  },
  Row: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
    height: 50,
  },
  TitleText1: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  Column: { flex: 3 },
  Column2: { flex: 1 },
  ColumnTitle: { flex: 0.3, borderStyle: "solid", borderWidth: 1 },
  LockText: {
    color: "white",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
});
