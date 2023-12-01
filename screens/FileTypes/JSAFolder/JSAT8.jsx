import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import T8Sig from "./T8Sig";
import React, { useState, useEffect } from "react";

export default function JSAT8(props) {
  // State to manage the Table object
  const [Table, setTable] = useState({});

  // useEffect to synchronize Table state with props.T8
  useEffect(() => {
    // Check if Table state is not empty
    if (Object.keys(Table).length !== 0) {
      // Update props.T8 using setT8 and include Table
      props.setT8(props.T8, (props.T8[0] = { Table }));
    } else if (props.T8 !== undefined) {
      // Check if props.T8 is defined
      if (props.T8[0] !== undefined) {
        // Set Table state based on props.T8[0].Table
        setTable(props.T8[0].Table);
      }
    }
  }, [props, Table]);

  // Function to add a new row to Table
  const addRow = () => {
    // Create a new row with empty values
    var rows = ["", ""];

    // Calculate the index for the new row
    var temp = Object.keys(Table).length;
    var Keys = "Rows" + temp;

    // Update Table state by adding the new row
    setTable({
      ...Table,
      [Keys]: rows,
    });
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
            <View style={styles.Row} key={Keys}>
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
          ))}
      </View>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text>Signature:</Text>
        </View>
        {Object.keys(Table)
          .sort()
          .map((Keys, r) => (
            <View key={Keys}>
              <T8Sig
                Table={Table}
                setTable={setTable}
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
