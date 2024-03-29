import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function FRT6(props) {
  // States to manage Line0, Line1, Line2, and Line3 data
  const [Line0, setLine0] = useState({});
  const [Line1, setLine1] = useState({});
  const [Line2, setLine2] = useState({});
  const [Line3, setLine3] = useState({});

  // Effect hook to synchronize Line0, Line1, Line2, and Line3 with T6 in props
  useEffect(() => {
    // Check if Line0 has data
    if (Object.keys(Line0).length !== 0) {
      // Update T6 in props with Line0 data
      props.setT6(props.T6, (props.T6[0] = { Line0 }));
    }

    // Check if Line1 has data
    if (Object.keys(Line1).length !== 0) {
      // Update T6 in props with Line1 data
      props.setT6(props.T6, (props.T6[1] = { Line1 }));
    }

    // Check if Line2 has data
    if (Object.keys(Line2).length !== 0) {
      // Update T6 in props with Line2 data
      props.setT6(props.T6, (props.T6[2] = { Line2 }));
    }

    // Check if Line3 has data
    if (Object.keys(Line3).length !== 0) {
      // Update T6 in props with Line3 data
      props.setT6(props.T6, (props.T6[3] = { Line3 }));
    } else if (props.T6 !== undefined) {
      // Check if T6 in props has data
      if (props.T6[0] !== undefined) {
        // Set Line0 state with data from T6 in props
        setLine0(props.T6[0].Line0);
      }
      if (props.T6[1] !== undefined) {
        // Set Line1 state with data from T6 in props
        setLine1(props.T6[1].Line1);
      }
      if (props.T6[2] !== undefined) {
        // Set Line2 state with data from T6 in props
        setLine2(props.T6[2].Line2);
      }
      if (props.T6[3] !== undefined) {
        // Set Line3 state with data from T6 in props
        setLine3(props.T6[3].Line3);
      }
    }
  }, [props, Line0, Line1, Line2, Line3]);

  return (
    <View style={styles.GC}>
      <View style={styles.ColumnTitle}>
        <View style={styles.Title}>
          <Text style={styles.TitleText1}>General Unit Items</Text>
          <Text style={styles.TitleText2}>
            (Ex: Silt Fence, Hay Bales, Mats, Concrete, Site Rock, Site Fill,
            Excavation Amount, Construction Entrances, Orange Fence, Goal Post,
            Test Stations, etc.)
          </Text>
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
                setLine2({ ...Line2, Item1: event.nativeEvent.text });
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
    paddingTop: 5,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  TitleText2: {
    fontSize: 12,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    paddingBottom: 5,
  },
  ColumnTitle: { flex: 0.45, borderStyle: "solid", borderWidth: 1 },
});
