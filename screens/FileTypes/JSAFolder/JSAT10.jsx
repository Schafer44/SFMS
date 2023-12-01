import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import T8Sig from "./T8Sig";
import React, { useState, useEffect } from "react";

export default function JSAT10(props) {
  const [Line0, setLine0] = useState({});
  useEffect(() => {
    if (Object.keys(Line0).length !== 0) {
      props.setT10(props.T10, (props.T10[0] = { Line0 }));
    } else if (props.T10 !== undefined) {
      if (props.T10[0] !== undefined) {
        setLine0(props.T10[0].Line0);
      }
    }
  }, [props, Line0]);
  const addRow = () => {
    var rows = ["", ""];
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
    <View View style={styles.body}>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text>Inspectors:</Text>
        </View>
        {Object.keys(Line0)
          .sort()
          .map((Keys, r) => (
            <View style={styles.Row} key={Keys}>
              <TextInput
                style={styles.textInputTest}
                placeholder=""
                value={Line0[Keys][0]}
                onChange={(event) => {
                  var temp = Keys;
                  var temp2;
                  //[temp] = [event];
                  var [temp] = [event.nativeEvent.text, "dsfsdf"];
                  temp2 = [temp];
                  if (Line0[Keys][1] !== undefined) {
                    temp2[1] = Line0[Keys][1];
                  } else {
                    temp2[1] = "";
                  }
                  setLine0({
                    ...Line0,
                    [Keys]: temp2,
                  });
                }}
              />
            </View>
          ))}
      </View>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text>Signature:</Text>
        </View>
        {Object.keys(Line0)
          .sort()
          .map((Keys, r) => (
            <View key={Keys}>
              <T8Sig
                Table={Line0}
                setTable={setLine0}
                Keys={Keys}
                SignInScroll={props.SignInScroll}
              />
            </View>
          ))}
      </View>
      <View style={styles.addBtn}>
        <TouchableOpacity
          style={styles.SubBtn}
          title="Lock"
          onPress={() => addRow()}
        >
          <Text style={styles.LockText}>Add Row</Text>
        </TouchableOpacity>
      </View>
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
    height: 50,
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
  textInputTest: {
    paddingLeft: 5,
    width: "100%",
    height: "100%",
    flex: 1,
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
  TitleText2: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  LockText: {
    color: "white",
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  addBtn: {
    flex: 0.3,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
});
