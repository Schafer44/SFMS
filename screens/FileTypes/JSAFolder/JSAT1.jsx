import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function JSAT1(props) {
  // State to manage the Table object
  const [Table, setTable] = useState({});

  // State to manage the onLoad flag
  const [onLoad, setOnLoad] = useState(true);

  // useEffect to synchronize Table state with props.T1
  useEffect(() => {
    // Check if offline mode is enabled and it is the initial load
    if (props.offline === true && onLoad) {
      // Set initial values for Table, including the current date
      setTable({
        ...Table,
        Date: new Date().toString(),
      });
      // Update onLoad flag to prevent subsequent updates
      setOnLoad(false);
    }

    // Check if Table state is not empty
    if (Object.keys(Table).length !== 0) {
      // Update props.T1 using setT1 and include Table
      props.setT1(props.T1, (props.T1[0] = { Table }));
    } else if (props.T1 !== undefined) {
      // Check if props.T1 is defined
      if (props.T1[0] !== undefined) {
        // Set Table state based on props.T1[0].Table
        setTable(props.T1[0].Table);
        // Check if Date property is undefined and set the current date
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
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <Text
            style={props.isBigScreen ? styles.TextTitle : styles.TextTitlePhone}
          >
            Date:
          </Text>
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
          />
            <DateTimePicker
              display="spinner"
              dateFormat="dayofweek month day year"
              themeVariant="light"
              value={new Date(Table.Date !== undefined ? Table.Date : 1)}
              onChange={(event) => {
                setTable({
                  ...Table,
                  Date: new Date(event.nativeEvent.timestamp).toString(),
                });
              }}
            />*/}

            <TouchableOpacity onPress={() => props.toggleOverlayDate()}>
              <Text>
                {Table.Date !== undefined
                  ? Table.Date.split(" ")[1] +
                    " " +
                    Table.Date.split(" ")[2] +
                    " " +
                    Table.Date.split(" ")[3]
                  : null}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <Text
            style={props.isBigScreen ? styles.TextTitle : styles.TextTitlePhone}
          >
            Project #:
          </Text>
        </View>

        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.Project}
            onChange={(event) => {
              setTable({ ...Table, Project: event.nativeEvent.text });
            }}
          />
        </View>

        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <Text
            style={props.isBigScreen ? styles.TextTitle : styles.TextTitlePhone}
          >
            Work Location:
          </Text>
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
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
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <Text
            style={props.isBigScreen ? styles.TextTitle : styles.TextTitlePhone}
          >
            Client:
          </Text>
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.Client}
            onChange={(event) => {
              setTable({ ...Table, Client: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <Text
            style={props.isBigScreen ? styles.TextTitle : styles.TextTitlePhone}
          >
            Foreman/Supervisor:
          </Text>
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.Foreman}
            onChange={(event) => {
              setTable({ ...Table, Foreman: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <Text
            style={props.isBigScreen ? styles.TextTitle : styles.TextTitlePhone}
          >
            # in Crew:
          </Text>
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
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
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <Text
            style={props.isBigScreen ? styles.TextTitle : styles.TextTitlePhone}
          >
            GPS Coord:
          </Text>
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.Coords}
            onChange={(event) => {
              setTable({ ...Table, Coords: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <Text
            style={props.isBigScreen ? styles.TextTitle : styles.TextTitlePhone}
          >
            Nearest Intersection:
          </Text>
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
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
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <Text
            style={props.isBigScreen ? styles.TextTitle : styles.TextTitlePhone}
          >
            First Aid Person:
          </Text>
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.FirstAidPerson}
            onChange={(event) => {
              setTable({ ...Table, FirstAidPerson: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <Text
            style={props.isBigScreen ? styles.TextTitle : styles.TextTitlePhone}
          >
            Competent Person:
          </Text>
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
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
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <Text
            style={props.isBigScreen ? styles.TextTitle : styles.TextTitlePhone}
          >
            Who will transport injured?
          </Text>
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <TextInput
            style={styles.textInputTest}
            placeholder=""
            value={Table.TransportPerson}
            onChange={(event) => {
              setTable({ ...Table, TransportPerson: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <Text
            style={props.isBigScreen ? styles.TextTitle : styles.TextTitlePhone}
          >
            Current Weather:
          </Text>
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
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
          <Text
            style={props.isBigScreen ? styles.TextTitle : styles.TextTitlePhone}
          >
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
  RowPhone: {
    display: "flex",
    flex: 1,
    height: 30,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignContent: "center",
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
    width: "100%",
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
