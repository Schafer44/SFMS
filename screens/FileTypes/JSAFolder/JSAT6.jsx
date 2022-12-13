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

export default function JSAT6(props) {
  const [Table, setTable] = useState({});
  useEffect(() => {
    if (Object.keys(Table).length !== 0) {
      props.setT6(props.T6, (props.T6[0] = { Table }));
    } else if (props.T6 !== undefined) {
      if (props.T6[0] !== undefined) {
        setTable(props.T6[0].Table);
      }
    }
  }, [props, Table]);
  return (
    <View style={styles.body}>
      <View style={styles.ColumnTitle}>
        <View style={styles.Title}>
          <Text style={styles.TitleText1}>Other Equipment:</Text>
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text></Text>
        </View>
        <View style={styles.Row}></View>
        <View style={styles.Row}>
          <Text>Fire Extinguishers</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={styles.SubBtn}
            title="Lock"
            onPress={() => {
              if (
                Table.FireExtinuishers !== null ||
                Table.FireExtinuishers !== undefined
              ) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  FireExtinuishers: !Table.FireExtinuishers,
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
            {Table.FireExtinuishers ? (
              <View style={styles.true}>
                <Text style={styles.trueText}>X</Text>
              </View>
            ) : (
              <View style={styles.false}></View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.Row}>
          <Text>Gas Monitor</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={styles.SubBtn}
            title="Lock"
            onPress={() => {
              if (Table.GasMonitor !== null || Table.GasMonitor !== undefined) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  GasMonitor: !Table.GasMonitor,
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
            {Table.GasMonitor ? (
              <View style={styles.true}>
                <Text style={styles.trueText}>X</Text>
              </View>
            ) : (
              <View style={styles.false}></View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.Row}>
          <Text>First Aid Kit</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={styles.SubBtn}
            title="Lock"
            onPress={() => {
              if (
                Table.FirstAidKit !== null ||
                Table.FirstAidKit !== undefined
              ) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  FirstAidKit: !Table.FirstAidKit,
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
            {Table.FirstAidKit ? (
              <View style={styles.true}>
                <Text style={styles.trueText}>X</Text>
              </View>
            ) : (
              <View style={styles.false}></View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.Row}>
          <Text>Lighting</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={styles.SubBtn}
            title="Lock"
            onPress={() => {
              if (Table.Lighting !== null || Table.Lighting !== undefined) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  Lighting: !Table.Lighting,
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
            {Table.Lighting ? (
              <View style={styles.true}>
                <Text style={styles.trueText}>X</Text>
              </View>
            ) : (
              <View style={styles.false}></View>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text>Safety Data Sheets</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={styles.SubBtn}
            title="Lock"
            onPress={() => {
              if (
                Table.SaftyDataSheets !== null ||
                Table.SaftyDataSheets !== undefined
              ) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  SaftyDataSheets: !Table.SaftyDataSheets,
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
            {Table.SaftyDataSheets ? (
              <View style={styles.true}>
                <Text style={styles.trueText}>X</Text>
              </View>
            ) : (
              <View style={styles.false}></View>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.Row}>
          <Text>Stop Paddles</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={styles.SubBtn}
            title="Lock"
            onPress={() => {
              if (
                Table.StopPaddles !== null ||
                Table.StopPaddles !== undefined
              ) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  StopPaddles: !Table.StopPaddles,
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
            {Table.StopPaddles ? (
              <View style={styles.true}>
                <Text style={styles.trueText}>X</Text>
              </View>
            ) : (
              <View style={styles.false}></View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.Row}>
          <Text>Road Signs</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={styles.SubBtn}
            title="Lock"
            onPress={() => {
              if (Table.RoadSigns !== null || Table.RoadSigns !== undefined) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  RoadSigns: !Table.RoadSigns,
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
            {Table.RoadSigns ? (
              <View style={styles.true}>
                <Text style={styles.trueText}>X</Text>
              </View>
            ) : (
              <View style={styles.false}></View>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.Row}>
          <Text>Air Horn</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={styles.SubBtn}
            title="Lock"
            onPress={() => {
              if (Table.AirHorn !== null || Table.AirHorn !== undefined) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  AirHorn: !Table.AirHorn,
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
            {Table.AirHorn ? (
              <View style={styles.true}>
                <Text style={styles.trueText}>X</Text>
              </View>
            ) : (
              <View style={styles.false}></View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.Row}>
          <Text>One Calls</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={styles.SubBtn}
            title="Lock"
            onPress={() => {
              if (Table.OneCalls !== null || Table.OneCalls !== undefined) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  OneCalls: !Table.OneCalls,
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
            {Table.OneCalls ? (
              <View style={styles.true}>
                <Text style={styles.trueText}>X</Text>
              </View>
            ) : (
              <View style={styles.false}></View>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text>Slings/Chains</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={styles.SubBtn}
            title="Lock"
            onPress={() => {
              if (Table.Slings !== null || Table.Slings !== undefined) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  Slings: !Table.Slings,
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
            {Table.Slings ? (
              <View style={styles.true}>
                <Text style={styles.trueText}>X</Text>
              </View>
            ) : (
              <View style={styles.false}></View>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.Row}>
          <Text>Two-way Radios</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={styles.SubBtn}
            title="Lock"
            onPress={() => {
              if (
                Table.Two_Way_Radio !== null ||
                Table.Two_Way_Radio !== undefined
              ) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  Two_Way_Radio: !Table.Two_Way_Radio,
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
            {Table.Two_Way_Radio ? (
              <View style={styles.true}>
                <Text style={styles.trueText}>X</Text>
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
            style={styles.SubBtn}
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
                <Text style={styles.trueText}>X</Text>
              </View>
            ) : (
              <View style={styles.false}></View>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.Row}></View>
        <View style={styles.Row}></View>
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
});
