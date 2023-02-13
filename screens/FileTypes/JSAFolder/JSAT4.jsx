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

export default function JSAT4(props) {
  const [Table, setTable] = useState({});
  useEffect(() => {
    if (Object.keys(Table).length !== 0) {
      props.setT4(props.T4, (props.T4[0] = { Table }));
    } else if (props.T4 !== undefined) {
      if (props.T4[0] !== undefined) {
        setTable(props.T4[0].Table);
      }
    }
  }, [props, Table]);
  return (
    <View style={styles.body}>
      <View style={styles.ColumnTitle}>
        <View style={styles.Title}>
          <Text style={styles.TitleText1}>PPE Required:</Text>
        </View>
      </View>
      <View style={props.isBigScreen ? styles.Column : styles.ColumnPhone}>
        <View style={styles.Row}>
          <Text>Safety Glasses</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={props.isBigScreen ? styles.SubBtn : styles.SubBtnPhone}
            title="Lock"
            onPress={() => {
              if (
                Table.SafetyGlasses !== null ||
                Table.SafetyGlasses !== undefined
              ) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  SafetyGlasses: !Table.SafetyGlasses,
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
            {Table.SafetyGlasses ? (
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
          <Text>Hard Hat</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={props.isBigScreen ? styles.SubBtn : styles.SubBtnPhone}
            title="Lock"
            onPress={() => {
              if (Table.HardHat !== null || Table.HardHat !== undefined) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  HardHat: !Table.HardHat,
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
            {Table.HardHat ? (
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
          <Text>Safety Vest</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={props.isBigScreen ? styles.SubBtn : styles.SubBtnPhone}
            title="Lock"
            onPress={() => {
              if (Table.SafetyVest !== null || Table.SafetyVest !== undefined) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  SafetyVest: !Table.SafetyVest,
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
            {Table.SafetyVest ? (
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
          <Text>Safety-Toe Boots</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={props.isBigScreen ? styles.SubBtn : styles.SubBtnPhone}
            title="Lock"
            onPress={() => {
              if (
                Table.SafetyToeBoots !== null ||
                Table.SafetyToeBoots !== undefined
              ) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  SafetyToeBoots: !Table.SafetyToeBoots,
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
            {Table.SafetyToeBoots ? (
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
          <Text>Gloves</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={props.isBigScreen ? styles.SubBtn : styles.SubBtnPhone}
            title="Lock"
            onPress={() => {
              if (Table.Gloves !== null || Table.Gloves !== undefined) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  Gloves: !Table.Gloves,
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
            {Table.Gloves ? (
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
          <Text>FR Clothing</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={props.isBigScreen ? styles.SubBtn : styles.SubBtnPhone}
            title="Lock"
            onPress={() => {
              if (Table.FRClothing !== null || Table.FRClothing !== undefined) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  FRClothing: !Table.FRClothing,
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
            {Table.FRClothing ? (
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
          <Text>Fall Protection</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={props.isBigScreen ? styles.SubBtn : styles.SubBtnPhone}
            title="Lock"
            onPress={() => {
              if (
                Table.FallProtection !== null ||
                Table.FallProtection !== undefined
              ) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  FallProtection: !Table.FallProtection,
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
            {Table.FallProtection ? (
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
          <Text>Winter Footwear</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={props.isBigScreen ? styles.SubBtn : styles.SubBtnPhone}
            title="Lock"
            onPress={() => {
              if (
                Table.WinterFootwear !== null ||
                Table.WinterFootwear !== undefined
              ) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  WinterFootwear: !Table.WinterFootwear,
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
            {Table.WinterFootwear ? (
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
          <Text>Hearing Protection</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={props.isBigScreen ? styles.SubBtn : styles.SubBtnPhone}
            title="Lock"
            onPress={() => {
              if (
                Table.HearingProtection !== null ||
                Table.HearingProtection !== undefined
              ) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  HearingProtection: !Table.HearingProtection,
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
            {Table.HearingProtection ? (
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
          <Text>Resporatory Protection</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={props.isBigScreen ? styles.SubBtn : styles.SubBtnPhone}
            title="Lock"
            onPress={() => {
              if (
                Table.ResporatoryProtection !== null ||
                Table.ResporatoryProtection !== undefined
              ) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  ResporatoryProtection: !Table.ResporatoryProtection,
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
            {Table.ResporatoryProtection ? (
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
          <Text>Chain Saw Chaps</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={props.isBigScreen ? styles.SubBtn : styles.SubBtnPhone}
            title="Lock"
            onPress={() => {
              if (
                Table.ChainsawChaps !== null ||
                Table.ChainsawChaps !== undefined
              ) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  ChainsawChaps: !Table.ChainsawChaps,
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
            {Table.ChainsawChaps ? (
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
          <Text>Metatarsal Guards</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={props.isBigScreen ? styles.SubBtn : styles.SubBtnPhone}
            title="Lock"
            onPress={() => {
              if (
                Table.MetalarsalGuards !== null ||
                Table.MetalarsalGuards !== undefined
              ) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  MetalarsalGuards: !Table.MetalarsalGuards,
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
            {Table.MetalarsalGuards ? (
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
          <Text>Life Vest</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={props.isBigScreen ? styles.SubBtn : styles.SubBtnPhone}
            title="Lock"
            onPress={() => {
              if (Table.LifeVest !== null || Table.LifeVest !== undefined) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  LifeVest: !Table.LifeVest,
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
            {Table.LifeVest ? (
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
          <Text>Face Shielding</Text>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity
            style={props.isBigScreen ? styles.SubBtn : styles.SubBtnPhone}
            title="Lock"
            onPress={() => {
              if (
                Table.FaceShielding !== null ||
                Table.FaceShielding !== undefined
              ) {
                //[temp] = [event];
                setTable({
                  ...Table,
                  FaceShielding: !Table.FaceShielding,
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
            {Table.FaceShielding ? (
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
