import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function JSAT1(props) {
  const [Table, setTable] = useState({});
  const [onLoad, setOnLoad] = useState(true);
  useEffect(() => {
    if (props.offline === true && onLoad) {
      setTable({
        ...Table,
        Date: new Date().toString(),
      });
      setOnLoad(false);
    }
    if (Object.keys(Table).length !== 0) {
      props.setT1(props.T1, (props.T1[0] = { Table }));
    } else if (props.T1 !== undefined) {
      if (props.T1[0] !== undefined) {
        setTable(props.T1[0].Table);
        if (props.T1[0].Table.Date === undefined) {
          setTable({
            ...Table,
            Date: new Date().toString(),
          });
        }
      }
    }
  }, [props, Table]);
  return (
    <View style={styles.body}>
      <View style={props.isBigScreen ? styles.Column : styles.ColumnPhone}>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}>Date:</Text>
        </View>
        <View style={styles.DatePickerCont}>
          <View style={styles.DatePicker}>
            {/* <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.Date}
            onChange={(event) => {
              setTable({ ...Table, Date: event.nativeEvent.text });
            }}
          />*/}
            <DateTimePicker
              dateFormat="dayofweek month day year"
              themeVariant="light"
              value={new Date(Table.Date !== undefined ? Table.Date : 1)}
              onChange={(event) => {
                setTable({
                  ...Table,
                  Date: new Date(event.nativeEvent.timestamp).toString(),
                });
              }}
            />
          </View>
        </View>

        <View style={styles.Row}>
          <Text style={styles.TitleText2}>Project #:</Text>
        </View>

        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.Project}
            onChange={(event) => {
              setTable({ ...Table, Project: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={styles.Row}>
          <Text style={styles.TitleText2}>Work Location:</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.Location}
            onChange={(event) => {
              setTable({ ...Table, Location: event.nativeEvent.text });
            }}
          />
        </View>
      </View>

      <View style={props.isBigScreen ? styles.Column : styles.ColumnPhone}>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}>Client:</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.Client}
            onChange={(event) => {
              setTable({ ...Table, Client: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}>Foreman/Supervisor:</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.Foreman}
            onChange={(event) => {
              setTable({ ...Table, Foreman: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}># in Crew:</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.Num}
            onChange={(event) => {
              setTable({ ...Table, Num: event.nativeEvent.text });
            }}
          />
        </View>
      </View>

      <View style={props.isBigScreen ? styles.Column : styles.ColumnPhone}>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}>GPS Coord:</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.Coords}
            onChange={(event) => {
              setTable({ ...Table, Coords: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}>Nearest Intersection:</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.NearestIntersection}
            onChange={(event) => {
              setTable({
                ...Table,
                NearestIntersection: event.nativeEvent.text,
              });
            }}
          />
        </View>
      </View>
      <View style={props.isBigScreen ? styles.Column : styles.ColumnPhone}>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}>First Aid Person:</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.FirstAidPerson}
            onChange={(event) => {
              setTable({ ...Table, FirstAidPerson: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}>Competent Person:</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.CompetentPerson}
            onChange={(event) => {
              setTable({ ...Table, CompetentPerson: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={props.isBigScreen ? styles.Column : styles.ColumnPhone}>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}>Who will transport injured?</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.TransportPerson}
            onChange={(event) => {
              setTable({ ...Table, TransportPerson: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}>Current Weather:</Text>
        </View>
        <View style={styles.Row}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.Weather}
            onChange={(event) => {
              setTable({ ...Table, Weather: event.nativeEvent.text });
            }}
          />
        </View>
      </View>
      <View style={props.isBigScreen ? styles.Column : styles.ColumnPhone}>
        <View style={styles.Row}>
          <Text style={styles.TitleText2}>
            FOR EMERGENCIES OR LIFE-THREATENING INJURIES,CALL 911*****
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    borderStyle: "solid",
    borderWidth: 3,
    width: "100%",
    height: "100%",
    flexDirection: "column",
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
    justifyContent: "center",
    alignContent: "center",
    height: 50,
  },
  Column: { flex: 1, flexDirection: "row" },
  ColumnPhone: { flex: 1, flexDirection: "column" },
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
  TitleText2: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
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
  textInputTest: { paddingLeft: 5 },
});
