import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function TimesheetLine(props) {
  const [Name, setName] = useState("");
  const [Occ, setOcc] = useState("");
  const [Hrs, setHrs] = useState("");
  const [PU, setPU] = useState("");
  const [Rig, setRig] = useState("");
  const [PD, setPD] = useState("");
  const [EquipNum, setEquipNum] = useState("");
  const [EquipDesc, setEquipDesc] = useState("");
  const [Line, setLine] = useState({});
  useEffect(() => {
    /*if (props.tempLine !== undefined) {
      console.log(props.tempLine);
      setLine({ ...Line, Name: props.tempLine });
      console.log(Line);
    }*/
    if (Object.keys(Line).length !== 0) {
      props.setLines(props.Lines, (props.Lines[props.id] = { Line }));
      console.log("3", Line);
    } else if (props.Lines[0] !== undefined) {
      console.log("1", props.Lines[0]);
      console.log("2", Line);
      setLine(props.Lines[0].Line);
    } /*else if (props.tempLiner !== undefined) {
      if (props.tempLine[props.id] !== undefined) {
        console.log(props.tempLine[props.id].Line.Name);
        setLine(Line, { Name: props.tempLine[0].Line.Name });
        console.log(Line);
        console.log("please work");
      }
    }*/
    //console.log(props.tempLine);
  });
  return (
    <View style={styles.body}>
      <View style={styles.bGridLarge}>
        <View style={styles.bGridColumns}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line.Name}
            onChange={(event) => {
              setLine({ ...Line, Name: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={styles.bGridSmall}>
        <View style={styles.bGridColumns}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line.Occ}
            onChange={(event) => {
              setLine({ ...Line, Occ: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={styles.bGridSmall}>
        <View style={styles.bGridColumns}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line.Hrs}
            onChange={(event) => {
              setLine({ ...Line, Hrs: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={styles.bGridSmall}>
        <View style={styles.bGridColumns}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line.PU}
            onChange={(event) => {
              setLine({ ...Line, PU: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={styles.bGridSmall}>
        <View style={styles.bGridColumns}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line.Rig}
            onChange={(event) => {
              setLine({ ...Line, Rig: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={styles.bGridSmall}>
        <View style={styles.bGridColumns}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line.PD}
            onChange={(event) => {
              setLine({ ...Line, PD: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={styles.bGridMedium}>
        <View style={styles.bGridColumns}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line.EquipNum}
            onChange={(event) => {
              setLine({ ...Line, EquipNum: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={styles.bGridLarge}>
        <View style={styles.bGridColumns}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Line.EquipDesc}
            onChange={(event) => {
              setLine({ ...Line, EquipDesc: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyScroll: {
    width: "100%",
    flexDirection: "row",
    flexGrow: 1,
  },
  body: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    backgroundColor: "darkgrey",
  },

  bGridSmall: {
    height: "100%",
    flex: 2,
    backgroundColor: "white",
    flexWrap: "wrap",
    borderColor: "black",
    borderWidth: 4,
  },
  bGridMedium: {
    height: "100%",
    flex: 4,
    backgroundColor: "black",
    flexWrap: "wrap",
    borderColor: "black",
    borderWidth: 4,
  },
  bGridLarge: {
    height: "100%",
    flex: 8,
    backgroundColor: "white",
    flexWrap: "wrap",
    borderColor: "black",
    borderWidth: 4,
  },
  bGridColumns: {
    height: "100%",
    flex: 1,
    backgroundColor: "white",
  },
  Text: {
    color: "black",
  },
  textInputTest: {
    fontSize: 15,
    padding: 8,
    paddingRight: 1000,
    width: "100%",
    height: "100%",
    color: "black",
  },
});
