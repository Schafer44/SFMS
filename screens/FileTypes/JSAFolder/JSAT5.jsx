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
import Ionicons from "@expo/vector-icons/Ionicons";

export default function JSAT5(props) {
  // State to manage the Table object
  const [Table, setTable] = useState({});

  // useEffect to synchronize Table state with props.T5
  useEffect(() => {
    // Check if Table state is not empty
    if (Object.keys(Table).length !== 0) {
      // Update props.T5 using setT5 and include Table
      props.setT5(props.T5, (props.T5[0] = { Table }));
    } else if (props.T5 !== undefined) {
      // Check if props.T5 is defined
      if (props.T5[0] !== undefined) {
        // Set Table state based on props.T5[0].Table
        setTable(props.T5[0].Table);
      }
    }
  }, [props, Table]);

  return (
    <View style={styles.body}>
      <View style={styles.ColumnTitle}>
        <View style={styles.Title}>
          <Text style={styles.TitleText1}>Permits Required:</Text>
        </View>
      </View>
      <View style={props.isBigScreen ? styles.Column : styles.ColumnPhone}>
        <View style={styles.Row}>
          <Text>Client Work Permit</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={props.isBigScreen ? styles.SubBtn : styles.SubBtnPhone}
            title="Lock"
            onPress={() => {
              if (
                Table.ClientWorkPermit !== null ||
                Table.ClientWorkPermit !== undefined
              ) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  ClientWorkPermit: !Table.ClientWorkPermit,
                });
              } else {
                //[temp] = [event];
                setTable({
                  ...Table,
                  [Keys]: true,
                });
              }
            }}
          >
            {Table.ClientWorkPermit ? (
              <View style={styles.true}>
                <Ionicons
                  name="checkmark"
                  size={32}
                  color="green"
                  style={[styles.trueText]}
                />
                {/*<Text style={styles.trueText}>X</Text>*/}
              </View>
            ) : (
              <View style={styles.false}></View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.Row}>
          <Text>Hot Work Permit</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={props.isBigScreen ? styles.SubBtn : styles.SubBtnPhone}
            title="Lock"
            onPress={() => {
              if (
                Table.HotWorkPermit !== null ||
                Table.HotWorkPermit !== undefined
              ) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  HotWorkPermit: !Table.HotWorkPermit,
                });
              } else {
                //[temp] = [event];
                setTable({
                  ...Table,
                  [Keys]: true,
                });
              }
            }}
          >
            {Table.HotWorkPermit ? (
              <View style={styles.true}>
                <Ionicons
                  name="checkmark"
                  size={32}
                  color="green"
                  style={[styles.trueText]}
                />
                {/*<Text style={styles.trueText}>X</Text>*/}
              </View>
            ) : (
              <View style={styles.false}></View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.Row}>
          <Text>Air Monitoring</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={props.isBigScreen ? styles.SubBtn : styles.SubBtnPhone}
            title="Lock"
            onPress={() => {
              if (
                Table.AirMonitoring !== null ||
                Table.AirMonitoring !== undefined
              ) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  AirMonitoring: !Table.AirMonitoring,
                });
              } else {
                //[temp] = [event];
                setTable({
                  ...Table,
                  [Keys]: true,
                });
              }
            }}
          >
            {Table.AirMonitoring ? (
              <View style={styles.true}>
                <Ionicons
                  name="checkmark"
                  size={32}
                  color="green"
                  style={[styles.trueText]}
                />
                {/*<Text style={styles.trueText}>X</Text>*/}
              </View>
            ) : (
              <View style={styles.false}></View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.Row}>
          <Text>Ground Disturbance</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={props.isBigScreen ? styles.SubBtn : styles.SubBtnPhone}
            title="Lock"
            onPress={() => {
              if (
                Table.GroundDisturbance !== null ||
                Table.GroundDisturbance !== undefined
              ) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  GroundDisturbance: !Table.GroundDisturbance,
                });
              } else {
                //[temp] = [event];
                setTable({
                  ...Table,
                  [Keys]: true,
                });
              }
            }}
          >
            {Table.GroundDisturbance ? (
              <View style={styles.true}>
                <Ionicons
                  name="checkmark"
                  size={32}
                  color="green"
                  style={[styles.trueText]}
                />
                {/*<Text style={styles.trueText}>X</Text>*/}
              </View>
            ) : (
              <View style={styles.false}></View>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={props.isBigScreen ? styles.Column : styles.ColumnPhone}>
        <View style={styles.Row}>
          <Text>Confined Space</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={props.isBigScreen ? styles.SubBtn : styles.SubBtnPhone}
            title="Lock"
            onPress={() => {
              if (
                Table.ConfinedSpace !== null ||
                Table.ConfinedSpace !== undefined
              ) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  ConfinedSpace: !Table.ConfinedSpace,
                });
              } else {
                //[temp] = [event];
                setTable({
                  ...Table,
                  [Keys]: true,
                });
              }
            }}
          >
            {Table.ConfinedSpace ? (
              <View style={styles.true}>
                <Ionicons
                  name="checkmark"
                  size={32}
                  color="green"
                  style={[styles.trueText]}
                />
                {/*<Text style={styles.trueText}>X</Text>*/}
              </View>
            ) : (
              <View style={styles.false}></View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.Row}>
          <Text>Excavation</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={props.isBigScreen ? styles.SubBtn : styles.SubBtnPhone}
            title="Lock"
            onPress={() => {
              if (Table.Excavation !== null || Table.Excavation !== undefined) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  Excavation: !Table.Excavation,
                });
              } else {
                //[temp] = [event];
                setTable({
                  ...Table,
                  [Keys]: true,
                });
              }
            }}
          >
            {Table.Excavation ? (
              <View style={styles.true}>
                <Ionicons
                  name="checkmark"
                  size={32}
                  color="green"
                  style={[styles.trueText]}
                />
                {/*<Text style={styles.trueText}>X</Text>*/}
              </View>
            ) : (
              <View style={styles.false}></View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.Row}>
          <Text>Other</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={props.isBigScreen ? styles.SubBtn : styles.SubBtnPhone}
            title="Lock"
            onPress={() => {
              if (Table.Other !== null || Table.Other !== undefined) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  Other: !Table.Other,
                });
              } else {
                //[temp] = [event];
                setTable({
                  ...Table,
                  [Keys]: true,
                });
              }
            }}
          >
            {Table.Other ? (
              <View style={styles.true}>
                <Ionicons
                  name="checkmark"
                  size={32}
                  color="green"
                  style={[styles.trueText]}
                />
                {/*<Text style={styles.trueText}>X</Text>*/}
              </View>
            ) : (
              <View style={styles.false}></View>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.Row}></View>
        <View style={styles.Row}></View>
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
  true: {
    width: "100%",
    height: "100%",
    backgroundColor: "green",
    justifyContent: "center",
    alignContent: "center",
  },
  trueText: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
  false: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  SubBtnPhone: { height: 20 },
});
