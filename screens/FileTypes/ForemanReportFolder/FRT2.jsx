import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function FRT2(props) {
  const [Line0, setLine0] = useState({});
  const [Line1, setLine1] = useState({});
  const [Line2, setLine2] = useState({});
  useEffect(() => {
    if (Object.keys(Line0).length !== 0) {
      props.setT2(props.T2, (props.T2[0] = { Line0 }));
    }
    if (Object.keys(Line1).length !== 0) {
      props.setT2(props.T2, (props.T2[1] = { Line1 }));
    }
    if (Object.keys(Line2).length !== 0) {
      props.setT2(props.T2, (props.T2[2] = { Line2 }));
    } else if (props.T2 !== undefined) {
      if (props.T2[0] !== undefined) {
        setLine0(props.T2[0].Line0);
      }
      if (props.T2[1] !== undefined) {
        setLine1(props.T2[1].Line1);
      }
      if (props.T2[2] !== undefined) {
        setLine2(props.T2[2].Line2);
      }
    }
  }, [props, Line0, Line1, Line2]);
  return (
    <View style={styles.body}>
      <View style={styles.ColumnTitle}>
        <View style={styles.Title}></View>
      </View>
      <View style={styles.Column}>
        <View style={styles.TitleLeftRow}></View>
        <View style={styles.Rows}>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line0.Type1}
              onChange={(event) => {
                setLine0({ ...Line0, Type1: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line1.Type1}
              onChange={(event) => {
                setLine1({ ...Line2, Type1: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line2.Type1}
              onChange={(event) => {
                setLine2({ ...Line2, Type1: event.nativeEvent.text });
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.TitleRow}>
          <Text style={styles.TitleText2}>TY</Text>
        </View>
        <View style={styles.Rows}>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line0.Type2}
              onChange={(event) => {
                setLine0({ ...Line0, Type2: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line1.Type2}
              onChange={(event) => {
                setLine1({ ...Line2, Type2: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line2.Type2}
              onChange={(event) => {
                setLine2({ ...Line2, Type2: event.nativeEvent.text });
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.TitleRow}>
          <Text style={styles.TitleText3}>PE</Text>
        </View>
        <View style={styles.Rows}>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line0.Type3}
              onChange={(event) => {
                setLine0({ ...Line0, Type3: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line1.Type3}
              onChange={(event) => {
                setLine1({ ...Line2, Type3: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line2.Type3}
              onChange={(event) => {
                setLine2({ ...Line2, Type3: event.nativeEvent.text });
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.TitleRight2Row}></View>
        <View style={styles.Rows}>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line0.Type4}
              onChange={(event) => {
                setLine0({ ...Line0, Type4: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line1.Type4}
              onChange={(event) => {
                setLine1({ ...Line2, Type4: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line2.Type4}
              onChange={(event) => {
                setLine2({ ...Line2, Type4: event.nativeEvent.text });
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.TitleRightRow}>
          <Text style={styles.TitleText1}>QUANTITY</Text>
        </View>
        <View style={styles.Rows}>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line0.Quantity}
              onChange={(event) => {
                setLine0({ ...Line0, Quantity: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line1.Quantity}
              onChange={(event) => {
                setLine1({ ...Line2, Quantity: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line2.Quantity}
              onChange={(event) => {
                setLine2({ ...Line2, Quantity: event.nativeEvent.text });
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.TitleRightRow}>
          <Text style={styles.TitleText1}>DIAMETER</Text>
        </View>
        <View style={styles.Rows}>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line0.Diameter}
              onChange={(event) => {
                setLine0({ ...Line0, Diameter: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line1.Diameter}
              onChange={(event) => {
                setLine1({ ...Line2, Diameter: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line2.Diameter}
              onChange={(event) => {
                setLine2({ ...Line2, Diameter: event.nativeEvent.text });
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
  },
  Title: {
    flex: 1.2,
    borderStyle: "solid",
    borderWidth: 2,
  },
  Rows: { flex: 3 },
  Row: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
  },
  Column: { flex: 1, flexDirection: "column" },
  ColumnTitle: {
    flex: 0.3,
  },
  TitleRow: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 0,
    borderTopWidth: 1,
  },

  TitleRightRow: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 0,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
  },

  TitleRight2Row: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 0,
    borderTopWidth: 1,
    borderRightWidth: 1,
  },
  TitleLeftRow: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 0,
    borderTopWidth: 1,
    borderLeftWidth: 1,
  },
  TitleText1: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  TitleText2: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "right",
  },
});
