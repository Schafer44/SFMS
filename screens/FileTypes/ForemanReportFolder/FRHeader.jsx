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
import DateTimePicker from "@react-native-community/datetimepicker";

export default function FRHeader(props) {
  // States to manage Line0, Line1, and Line2 data, and onLoad flag
  const [Line0, setLine0] = useState({});
  const [Line1, setLine1] = useState({});
  const [Line2, setLine2] = useState({});
  const [onLoad, setOnLoad] = useState(true);

  // Effect hook to handle initialization and synchronization with Header in props
  useEffect(() => {
    // Check if the component is offline and onLoad is true
    if (props.offline === true && onLoad) {
      // Set Line0 state with the current date if offline and onLoad
      setLine0({
        ...Line0,
        Date: new Date().toString(),
      });
      // Set onLoad to false after initializing Line0
      setOnLoad(false);
    }

    // Check if Line0 has data
    if (Object.keys(Line0).length !== 0) {
      // Update Header in props with Line0 data at index 0
      props.setHeader(props.Header, (props.Header[0] = { Line0 }));
    }

    // Check if Line1 has data
    if (Object.keys(Line1).length !== 0) {
      // Update Header in props with Line1 data at index 1
      props.setHeader(props.Header, (props.Header[1] = { Line1 }));
    }

    // Check if Line2 has data
    if (Object.keys(Line2).length !== 0) {
      // Update Header in props with Line2 data at index 2
      props.setHeader(props.Header, (props.Header[2] = { Line2 }));
    } else if (props.Header !== undefined) {
      // Check if Header in props has data
      if (props.Header[0] !== undefined) {
        // Set Line0 state with data from Header at index 0
        setLine0(props.Header[0].Line0);
        // Check if Line0 in Header has Date undefined, and set it to the current date
        if (props.Header[0].Line0.Date === undefined) {
          setLine0({
            ...Line0,
            Date: new Date().toString(),
          });
        }
      }

      // Check if Header at index 1 has data and is not null
      if (props.Header[1] !== undefined && props.Header[1] !== null) {
        // Set Line1 state with data from Header at index 1
        setLine1(props.Header[1].Line1);
      }

      // Check if Header at index 2 has data and is not null
      if (props.Header[2] !== undefined && props.Header[2] !== null) {
        // Set Line2 state with data from Header at index 2
        setLine2(props.Header[2].Line2);
      }
    }
  }, [props, Line0, Line1, Line2, onLoad]);

  return (
    <View style={styles.body}>
      <View style={props.isBigScreen ? styles.Column2 : styles.ColumnPhone}>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <Text
            style={props.isBigScreen ? styles.TextTitle : styles.TextTitlePhone}
          >
            Foreman:
          </Text>
        </View>
        <View style={props.isBigScreen ? styles.Row2 : styles.RowPhone}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            value={Line0.Foreman}
            onChange={(event) => {
              setLine0({ ...Line0, Foreman: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <Text
            style={props.isBigScreen ? styles.TextTitle : styles.TextTitlePhone}
          >
            Date:
          </Text>
        </View>
        <View style={styles.DatePickerCont}>
          <View style={styles.DatePicker}>
            <TouchableOpacity onPress={() => props.toggleOverlayDate()}>
              <Text>
                {Line0.Date !== undefined
                  ? Line0.Date.split(" ")[1] +
                    " " +
                    Line0.Date.split(" ")[2] +
                    " " +
                    Line0.Date.split(" ")[3]
                  : null}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <Text
            style={props.isBigScreen ? styles.TextTitle : styles.TextTitlePhone}
          >
            Day of Week:
          </Text>
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
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

      <View style={props.isBigScreen ? styles.Column2 : styles.ColumnPhone}>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <Text
            style={props.isBigScreen ? styles.TextTitle : styles.TextTitlePhone}
          >
            Project ID:
          </Text>
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            value={Line1.ProjectID}
            onChange={(event) => {
              setLine1({ ...Line1, ProjectID: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <Text
            style={props.isBigScreen ? styles.TextTitle : styles.TextTitlePhone}
          >
            Project Name:
          </Text>
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            value={Line1.ProjectName}
            onChange={(event) => {
              setLine1({ ...Line1, ProjectName: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <Text
            style={props.isBigScreen ? styles.TextTitle : styles.TextTitlePhone}
          >
            Weather:
          </Text>
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
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

      <View style={props.isBigScreen ? styles.Column2 : styles.ColumnPhone}>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <Text
            style={props.isBigScreen ? styles.TextTitle : styles.TextTitlePhone}
          >
            Did your crew rain/snow out today (Yes or No)
          </Text>
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            value={Line2.RainOut}
            onChange={(event) => {
              setLine2({ ...Line2, RainOut: event.nativeEvent.text });
            }}
          />
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
          <Text
            style={props.isBigScreen ? styles.TextTitle : styles.TextTitlePhone}
          >
            Extra Work (Yes or No)
          </Text>
        </View>
        <View style={props.isBigScreen ? styles.Row : styles.RowPhone}>
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
    width: "100%",
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
  RowPhone: {
    display: "flex",
    flex: 1,
    height: 30,
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
  ColumnPhone: { flex: 1, flexDirection: "column" },
  SubBtnPhone: { height: 20 },
});
