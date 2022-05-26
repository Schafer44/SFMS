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

export default function JSAT7(props) {
  const [Table, setTable] = useState({});
  useEffect(() => {
    if (Object.keys(Table).length !== 0) {
      props.setT7(props.T7, (props.T7[0] = { Table }));
    } else if (props.T7 !== undefined) {
      if (props.T7[0] !== undefined) {
        setTable(props.T7[0].Table);
      }
    }
  }, [props, Table]);
  return (
    <View style={styles.body}>
      <View style={styles.ColumnTitle}>
        <View style={styles.Title}>
          <Text style={styles.TitleText1}>ROW Conditions:</Text>
        </View>
      </View>
      <View style={styles.Column}>
        <View style={styles.Row}>
          <Text>Dry</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={styles.SubBtn}
            title="Lock"
            onPress={() => {
              if (Table.Dry !== null || Table.Dry !== undefined) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  Dry: !Table.Dry,
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
            {Table.Dry ? (
              <View style={styles.true}>
                <Text style={styles.trueText}>X</Text>
              </View>
            ) : (
              <View style={styles.false}></View>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.Row}>
          <Text>Rocky</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={styles.SubBtn}
            title="Lock"
            onPress={() => {
              if (Table.Rocky !== null || Table.Rocky !== undefined) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  Rocky: !Table.Rocky,
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
            {Table.Rocky ? (
              <View style={styles.true}>
                <Text style={styles.trueText}>X</Text>
              </View>
            ) : (
              <View style={styles.false}></View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.Row}>
          <Text>Muddy</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={styles.SubBtn}
            title="Lock"
            onPress={() => {
              if (Table.Muddy !== null || Table.Muddy !== undefined) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  Muddy: !Table.Muddy,
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
            {Table.Muddy ? (
              <View style={styles.true}>
                <Text style={styles.trueText}>X</Text>
              </View>
            ) : (
              <View style={styles.false}></View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.Row}>
          <Text>Sandy</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={styles.SubBtn}
            title="Lock"
            onPress={() => {
              if (Table.Sandy !== null || Table.Sandy !== undefined) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  Sandy: !Table.Sandy,
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
            {Table.Sandy ? (
              <View style={styles.true}>
                <Text style={styles.trueText}>X</Text>
              </View>
            ) : (
              <View style={styles.false}></View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.Row}>
          <Text>Ice/Snow</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={styles.SubBtn}
            title="Lock"
            onPress={() => {
              if (Table.Ice_Snow !== null || Table.Ice_Snow !== undefined) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  Ice_Snow: !Table.Ice_Snow,
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
            {Table.Ice_Snow ? (
              <View style={styles.true}>
                <Text style={styles.trueText}>X</Text>
              </View>
            ) : (
              <View style={styles.false}></View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.Row}>
          <Text>Steep Slope</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={styles.SubBtn}
            title="Lock"
            onPress={() => {
              if (Table.SteepSlope !== null || Table.SteepSlope !== undefined) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  SteepSlope: !Table.SteepSlope,
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
            {Table.SteepSlope ? (
              <View style={styles.true}>
                <Text style={styles.trueText}>X</Text>
              </View>
            ) : (
              <View style={styles.false}></View>
            )}
          </TouchableOpacity>
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
