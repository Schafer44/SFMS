import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function FRHeader(props) {
  const [Line0, setLine0] = useState({});
  const [Line1, setLine1] = useState({});
  const [Line2, setLine2] = useState({});
  const [onLoad, setOnLoad] = useState(true);
  useEffect(() => {
    if (props.offline === true && onLoad) {
      setLine0({
        ...Line0,
        Date: new Date().toString(),
      });
      setOnLoad(false);
    }
    if (Object.keys(Line0).length !== 0) {
      props.setHeader(props.Header, (props.Header[0] = { Line0 }));
    }
    if (Object.keys(Line1).length !== 0) {
      props.setHeader(props.Header, (props.Header[1] = { Line1 }));
    }
    if (Object.keys(Line2).length !== 0) {
      props.setHeader(props.Header, (props.Header[2] = { Line2 }));
    } else if (props.Header !== undefined) {
      if (props.Header[0] !== undefined) {
        setLine0(props.Header[0].Line0);
        if (props.Header[0].Line0.Date === undefined) {
          setLine0({
            ...Line0,
            Date: new Date().toString(),
          });
        }
      }
      if (props.Header[1] !== undefined) {
        setLine1(props.Header[1].Line1);
      }
      if (props.Header[2] !== undefined) {
        setLine2(props.Header[2].Line2);
      }
    }
  }, [props, Line0, Line1, Line2]);
  return (
    <View style={styles.body}>
      <View style={styles.Column2}>
        <View style={styles.Row}>
          <Text style={styles.TextTitle}>Foreman:</Text>
        </View>
        <View style={styles.Row2}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            value={Line0.Foreman}
            onChange={(event) => {
              setLine0({ ...Line0, Foreman: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <Text style={styles.TextTitle}>Date:</Text>
        </View>
        <View style={styles.DatePickerCont}>
          <View style={styles.DatePicker}>
            {/*<TextInput
            style={styles.TextInput}
            placeholder=""
            value={Line0.Date}
            onChange={(event) => {
              setLine0({ ...Line0, Date: event.nativeEvent.text });
            }}
          />*/}
            <DateTimePicker
              dateFormat="dayofweek month day year"
              value={new Date(Line0.Date !== undefined ? Line0.Date : 1)}
              themeVariant="light"
              style={styles.DatePicker}
              onChange={(event) => {
                setLine0({
                  ...Line0,
                  Date: new Date(event.nativeEvent.timestamp).toString(),
                });
              }}
            />
          </View>
        </View>
        <View style={styles.Row}>
          <Text style={styles.TextTitle}>Day of Week:</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            value={Line0.DayOfWeek}
            onChange={(event) => {
              setLine0({ ...Line0, DayOfWeek: event.nativeEvent.text });
            }}
          />
        </View>
      </View>

      <View style={styles.Column2}>
        <View style={styles.Row}>
          <Text style={styles.TextTitle}>Project ID:</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            value={Line1.ProjectID}
            onChange={(event) => {
              setLine1({ ...Line1, ProjectID: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <Text style={styles.TextTitle}>Project Name:</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            value={Line1.ProjectName}
            onChange={(event) => {
              setLine1({ ...Line1, ProjectName: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <Text style={styles.TextTitle}>Weather:</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            value={Line1.Weather}
            onChange={(event) => {
              setLine1({ ...Line1, Weather: event.nativeEvent.text });
            }}
          />
        </View>
      </View>

      <View style={styles.Column2}>
        <View style={styles.Row2}>
          <Text style={styles.TextTitle}>
            Did your crew rain/snow out today (Yes or No)
          </Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            value={Line2.RainOut}
            onChange={(event) => {
              setLine2({ ...Line2, RainOut: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <Text style={styles.TextTitle}>Extra Work (Yes or No)</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            value={Line2.Extra}
            onChange={(event) => {
              setLine2({ ...Line2, Extra: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  TextTitle: {
    textAlign: "right",
    paddingRight: 5,
    paddingLeft: 5,
  },
  TextInput: {
    paddingLeft: 5,
    borderStyle: "solid",
    borderBottomWidth: 1,
    paddingRight: 5,
    flex: 1,
  },

  DatePicker: {
    flex: 1,
    justifyContent: "center",
    width: 75,
  },
  DatePickerCont: {
    height: "100%",
    borderWidth: 1,
    flex: 1,
    display: "flex",
    alignItems: "flex-start",
  },
  Title: {
    display: "flex",
    flex: 1.2,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
  },
  Row: {
    display: "flex",
    flex: 1,
    height: 50,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
  },
  Row2: {
    flex: 2,
    height: 50,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
  },
  TitleText1: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  Column2: { flex: 1, flexDirection: "row" },
  ColumnTitle: {
    flex: 0.3,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
  },
});
