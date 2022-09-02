import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function FRT6(props) {
  const [Line0, setLine0] = useState({});
  const [Line1, setLine1] = useState({});
  const [Line2, setLine2] = useState({});
  const [Line3, setLine3] = useState({});
  useEffect(() => {
    if (Object.keys(Line0).length !== 0) {
      props.setT6(props.T6, (props.T6[0] = { Line0 }));
    }
    if (Object.keys(Line1).length !== 0) {
      props.setT6(props.T6, (props.T6[1] = { Line1 }));
    }
    if (Object.keys(Line2).length !== 0) {
      props.setT6(props.T6, (props.T6[2] = { Line2 }));
    }
    if (Object.keys(Line3).length !== 0) {
      props.setT6(props.T6, (props.T6[3] = { Line3 }));
    } else if (props.T6 !== undefined) {
      if (props.T6[0] !== undefined) {
        setLine0(props.T6[0].Line0);
      }
      if (props.T6[1] !== undefined) {
        setLine1(props.T6[1].Line1);
      }
      if (props.T6[2] !== undefined) {
        setLine2(props.T6[2].Line2);
      }
      if (props.T6[3] !== undefined) {
        setLine3(props.T6[3].Line3);
      }
    }
  }, [props, Line0, Line1, Line2, Line3]);
  return (
    <View style={styles.GC}>
      <View style={styles.ColumnTitle}>
        <View style={styles.Title}>
          <Text style={styles.TitleText1}>Test</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.Column1}>
          <View style={styles.Title}>
            <Text style={styles.TitleText1}>ITEM</Text>
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line0.Item1}
              onChange={(event) => {
                setLine0({ ...Line0, Item1: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line1.Item1}
              onChange={(event) => {
                setLine1({ ...Line1, Item1: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line2.Item1}
              onChange={(event) => {
                setLine2({ ...Line2, Item2: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line3.Item1}
              onChange={(event) => {
                setLine3({ ...Line3, Item1: event.nativeEvent.text });
              }}
            />
          </View>
        </View>
        <View style={styles.Column2}>
          <View style={styles.Title}>
            <Text style={styles.TitleText1}>QTY</Text>
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line0.Qty1}
              onChange={(event) => {
                setLine0({ ...Line0, Qty1: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line1.Qty1}
              onChange={(event) => {
                setLine1({ ...Line1, Qty1: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line2.Qty1}
              onChange={(event) => {
                setLine2({ ...Line2, Qty1: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line3.Qty1}
              onChange={(event) => {
                setLine3({ ...Line3, Qty1: event.nativeEvent.text });
              }}
            />
          </View>
        </View>
        <View style={styles.Column1}>
          <View style={styles.Title}>
            <Text style={styles.TitleText1}>ITEM</Text>
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line0.Item2}
              onChange={(event) => {
                setLine0({ ...Line0, Item2: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line1.Item2}
              onChange={(event) => {
                setLine1({ ...Line1, Item2: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line2.Item2}
              onChange={(event) => {
                setLine2({ ...Line2, Item2: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line3.Item2}
              onChange={(event) => {
                setLine3({ ...Line3, Item2: event.nativeEvent.text });
              }}
            />
          </View>
        </View>
        <View style={styles.Column2}>
          <View style={styles.Title}>
            <Text style={styles.TitleText1}>QTY</Text>
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line0.Qty2}
              onChange={(event) => {
                setLine0({ ...Line0, Qty2: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line1.Qty2}
              onChange={(event) => {
                setLine1({ ...Line1, Qty2: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line2.Qty2}
              onChange={(event) => {
                setLine2({ ...Line2, Qty2: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line3.Qty2}
              onChange={(event) => {
                setLine3({ ...Line3, Qty2: event.nativeEvent.text });
              }}
            />
          </View>
        </View>
        <View style={styles.Column1}>
          <View style={styles.Title}>
            <Text style={styles.TitleText1}>ITEM</Text>
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line0.Item3}
              onChange={(event) => {
                setLine0({ ...Line0, Item3: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line1.Item3}
              onChange={(event) => {
                setLine1({ ...Line1, Item3: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line2.Item3}
              onChange={(event) => {
                setLine2({ ...Line2, Item3: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line3.Item3}
              onChange={(event) => {
                setLine3({ ...Line3, Item3: event.nativeEvent.text });
              }}
            />
          </View>
        </View>
        <View style={styles.Column2}>
          <View style={styles.Title}>
            <Text style={styles.TitleText1}>QTY</Text>
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line0.Qty3}
              onChange={(event) => {
                setLine0({ ...Line0, Qty3: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line1.Qty3}
              onChange={(event) => {
                setLine1({ ...Line1, Qty3: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line2.Qty3}
              onChange={(event) => {
                setLine2({ ...Line2, Qty3: event.nativeEvent.text });
              }}
            />
          </View>
          <View style={styles.Row}>
            <TextInput
              style={styles.textInputTest}
              placeholder=""
              value={Line3.Qty3}
              onChange={(event) => {
                setLine3({ ...Line3, Qty3: event.nativeEvent.text });
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
  Column1: { flex: 2 },
  Column2: { flex: 1 },
  TitleText1: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  ColumnTitle: { flex: 0.45, borderStyle: "solid", borderWidth: 1 },
});
