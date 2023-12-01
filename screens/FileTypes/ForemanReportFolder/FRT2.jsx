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

export default function FRT2(props) {
  const [Line0, setLine0] = useState({});
  const [Line1, setLine1] = useState({});
  const [Line2, setLine2] = useState({});
  useEffect(() => {
    if (Object.keys(Line0).length !== 0) {
      props.setT2(props.T2, (props.T2[0] = { Line0 }));
    }
    if (Object.keys(Line1).length !== 0) {
      props.setT2(props.T2, (props.T2[1] = { Line1 }));
    }
    if (Object.keys(Line2).length !== 0) {
      props.setT2(props.T2, (props.T2[2] = { Line2 }));
    } else if (props.T2 !== undefined) {
      if (props.T2[0] !== undefined) {
        setLine0(props.T2[0].Line0);
      }
      if (props.T2[1] !== undefined) {
        setLine1(props.T2[1].Line1);
      }
      if (props.T2[2] !== undefined) {
        setLine2(props.T2[2].Line2);
      }
    }
  }, [props, Line0, Line1, Line2]);
  return (
    <View style={styles.GC}>
      <View style={styles.ColumnTitle}>
        <View style={styles.Title}>
          <Text style={styles.TitleText1}>Coating</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.ColumnBig}>
          {/*<View style={styles.TitleLeftRow}>
            <Text style={styles.TitleText2}> </Text>
          </View>*/}
          <View style={styles.Rows}>
            <View style={styles.Row}>
              <Text style={styles.textInputTest}>Mainline</Text>
            </View>
            <View style={styles.Row}>
              {/*<TextInput
                style={styles.textInputTest}
                placeholder=""
                value={Line0.Type1}
                onChange={(event) => {
                  setLine0({ ...Line0, Type1: event.nativeEvent.text });
                }}
              />*/}
              <TouchableOpacity
                style={styles.SubBtn}
                title="Lock"
                onPress={() => {
                  if (Line0.Type1 !== null || Line0.Type1 !== undefined) {
                    //[temp] = [event];
                    setLine0({
                      ...Line0,
                      Type1: !Line0.Type1,
                    });
                  } else {
                    //[temp] = [event];
                    setLine0({ ...Line0, Type1: true });
                  }
                }}
              >
                {Line0.Type1 ? (
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
              {/* <TextInput
                style={styles.textInputTest}
                placeholder=""
                value={Line1.Type1}
                onChange={(event) => {
                  setLine1({ ...Line1, Type1: event.nativeEvent.text });
                }}
              /> */}

              <TouchableOpacity
                style={styles.SubBtn}
                title="Lock"
                onPress={() => {
                  if (Line1.Type1 !== null || Line1.Type1 !== undefined) {
                    //[temp] = [event];
                    setLine1({
                      ...Line1,
                      Type1: !Line1.Type1,
                    });
                  } else {
                    //[temp] = [event];
                    setLine1({ ...Line1, Type1: true });
                  }
                }}
              >
                {Line1.Type1 ? (
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
              {/*<TextInput
                style={styles.textInputTest}
                placeholder=""
                value={Line2.Type1}
                onChange={(event) => {
                  setLine2({ ...Line2, Type1: event.nativeEvent.text });
                }}
              />*/}

              <TouchableOpacity
                style={styles.SubBtn}
                title="Lock"
                onPress={() => {
                  if (Line2.Type1 !== null || Line2.Type1 !== undefined) {
                    //[temp] = [event];
                    setLine2({
                      ...Line2,
                      Type1: !Line2.Type1,
                    });
                  } else {
                    //[temp] = [event];
                    setLine2({ ...Line2, Type1: true });
                  }
                }}
              >
                {Line2.Type1 ? (
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

        {/* <View style={styles.Column2}>
          <View style={styles.TitleRow}>
            <Text style={styles.TitleText2}> </Text>
                </View>
          <View style={styles.Rows}>
            <View style={styles.Row}>
              <Text style={styles.textInputTest}>Mainline</Text>
            </View>
            <View style={styles.Row}>
              <Text style={styles.textInputTest}>Mainline</Text>
            </View>
            <View style={styles.Row}>
              <Text style={styles.textInputTest}>Mainline</Text>
            </View>
          </View>
        </View>*/}

        <View style={styles.Column}>
          {/*<View style={styles.TitleRow}>
            <Text style={styles.TitleText2}> </Text>
          </View>*/}
          <View style={styles.Rows}>
            <View style={styles.Row}>
              <Text style={styles.textInputTest}>HDD/Bore</Text>
            </View>
            <View style={styles.Row}>
              {/*<TextInput
                style={styles.textInputTest}
                placeholder=""
                value={Line0.Type2}
                onChange={(event) => {
                  setLine0({ ...Line0, Type2: event.nativeEvent.text });
                }}
              />*/}
              <TouchableOpacity
                style={styles.SubBtn}
                title="Lock"
                onPress={() => {
                  if (Line0.Type2 !== null || Line0.Type2 !== undefined) {
                    //[temp] = [event];
                    setLine0({
                      ...Line0,
                      Type2: !Line0.Type2,
                    });
                  } else {
                    //[temp] = [event];
                    setLine0({ ...Line0, Type2: true });
                  }
                }}
              >
                {Line0.Type2 ? (
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
              {/*} <TextInput
                style={styles.textInputTest}
                placeholder=""
                value={Line1.Type2}
                onChange={(event) => {
                  setLine1({ ...Line1, Type2: event.nativeEvent.text });
                }}
              /> */}
              <TouchableOpacity
                style={styles.SubBtn}
                title="Lock"
                onPress={() => {
                  if (Line1.Type2 !== null || Line1.Type2 !== undefined) {
                    //[temp] = [event];
                    setLine1({
                      ...Line1,
                      Type2: !Line1.Type2,
                    });
                  } else {
                    //[temp] = [event];
                    setLine1({ ...Line1, Type2: true });
                  }
                }}
              >
                {Line1.Type2 ? (
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
              {/*<TextInput
                style={styles.textInputTest}
                placeholder=""
                value={Line2.Type2}
                onChange={(event) => {
                  setLine2({ ...Line2, Type2: event.nativeEvent.text });
                }}
              />*/}
              <TouchableOpacity
                style={styles.SubBtn}
                title="Lock"
                onPress={() => {
                  if (Line2.Type2 !== null || Line2.Type2 !== undefined) {
                    //[temp] = [event];
                    setLine2({
                      ...Line2,
                      Type2: !Line2.Type2,
                    });
                  } else {
                    //[temp] = [event];
                    setLine2({ ...Line2, Type2: true });
                  }
                }}
              >
                {Line2.Type2 ? (
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

        {/*<View style={styles.Column2}>
          <View style={styles.TitleRow}>
            <Text style={styles.TitleText2}> TY</Text>
                </View>
          <View style={styles.Rows}>
            <View style={styles.Row}>
              <Text style={styles.textInputTest}>HDD/Bore</Text>
            </View>
            <View style={styles.Row}>
              <Text style={styles.textInputTest}>HDD/Bore</Text>
            </View>
            <View style={styles.Row}>
              <Text style={styles.textInputTest}>HDD/Bore</Text>
            </View>
          </View>
                </View>*/}

        <View style={styles.ColumnBig}>
          {/*<View style={styles.TitleRow}>
            <Text style={styles.TitleText3}>PE</Text>
              </View>*/}
          <View style={styles.Rows}>
            <View style={styles.Row}>
              <Text style={styles.textInputTest}>Fabrication</Text>
            </View>
            <View style={styles.Row}>
              {/*<TextInput
                style={styles.textInputTest}
                placeholder=""
                value={Line0.Type3}
                onChange={(event) => {
                  setLine0({ ...Line0, Type3: event.nativeEvent.text });
                }}
              />*/}
              <TouchableOpacity
                style={styles.SubBtn}
                title="Lock"
                onPress={() => {
                  if (Line0.Type3 !== null || Line0.Type3 !== undefined) {
                    //[temp] = [event];
                    setLine0({
                      ...Line0,
                      Type3: !Line0.Type3,
                    });
                  } else {
                    //[temp] = [event];
                    setLine0({ ...Line0, Type3: true });
                  }
                }}
              >
                {Line0.Type3 ? (
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
              {/*} <TextInput
                style={styles.textInputTest}
                placeholder=""
                value={Line1.Type3}
                onChange={(event) => {
                  setLine1({ ...Line1, Type3: event.nativeEvent.text });
                }}
              />*/}
              <TouchableOpacity
                style={styles.SubBtn}
                title="Lock"
                onPress={() => {
                  if (Line1.Type3 !== null || Line1.Type3 !== undefined) {
                    //[temp] = [event];
                    setLine1({
                      ...Line1,
                      Type3: !Line1.Type3,
                    });
                  } else {
                    //[temp] = [event];
                    setLine1({ ...Line1, Type3: true });
                  }
                }}
              >
                {Line1.Type3 ? (
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
              {/*} <TextInput
                style={styles.textInputTest}
                placeholder=""
                value={Line2.Type3}
                onChange={(event) => {
                  setLine2({ ...Line2, Type3: event.nativeEvent.text });
                }}
              />*/}
              <TouchableOpacity
                style={styles.SubBtn}
                title="Lock"
                onPress={() => {
                  if (Line2.Type3 !== null || Line2.Type3 !== undefined) {
                    //[temp] = [event];
                    setLine2({
                      ...Line2,
                      Type3: !Line2.Type3,
                    });
                  } else {
                    //[temp] = [event];
                    setLine2({ ...Line2, Type3: true });
                  }
                }}
              >
                {Line2.Type3 ? (
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

        {/*<View style={styles.Column2}>
          <View style={styles.TitleRow}>
            <Text style={styles.TitleText}> </Text>
          </View>
          <View style={styles.Rows}>
            <View style={styles.Row}>
              <Text style={styles.textInputTest}>Fabrication</Text>
            </View>
            <View style={styles.Row}>
              <Text style={styles.textInputTest}>Fabrication</Text>
            </View>
            <View style={styles.Row}>
              <Text style={styles.textInputTest}>Fabrication</Text>
            </View>
          </View>
                </View>*/}

        <View style={styles.Column}>
          {/*<View style={styles.TitleRow}>
            <Text style={styles.TitleText2}> </Text>
                </View>*/}
          <View style={styles.Rows}>
            <View style={styles.Row}>
              <Text style={styles.textInputTest}>Fitting</Text>
            </View>
            <View style={styles.Row}>
              {/*} <TextInput
                style={styles.textInputTest}
                placeholder=""
                value={Line0.Type4}
                onChange={(event) => {
                  setLine0({ ...Line0, Type4: event.nativeEvent.text });
                }}
              />*/}
              <TouchableOpacity
                style={styles.SubBtn}
                title="Lock"
                onPress={() => {
                  if (Line0.Type4 !== null || Line0.Type4 !== undefined) {
                    //[temp] = [event];
                    setLine0({
                      ...Line0,
                      Type4: !Line0.Type4,
                    });
                  } else {
                    //[temp] = [event];
                    setLine0({ ...Line0, Type4: true });
                  }
                }}
              >
                {Line0.Type4 ? (
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
              {/*} <TextInput
                style={styles.textInputTest}
                placeholder=""
                value={Line1.Type4}
                onChange={(event) => {
                  setLine1({ ...Line1, Type4: event.nativeEvent.text });
                }}
              />*/}
              <TouchableOpacity
                style={styles.SubBtn}
                title="Lock"
                onPress={() => {
                  if (Line1.Type4 !== null || Line1.Type4 !== undefined) {
                    //[temp] = [event];
                    setLine1({
                      ...Line1,
                      Type4: !Line1.Type4,
                    });
                  } else {
                    //[temp] = [event];
                    setLine1({ ...Line1, Type4: true });
                  }
                }}
              >
                {Line1.Type4 ? (
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
              {/*} <TextInput
                style={styles.textInputTest}
                placeholder=""
                value={Line2.Type4}
                onChange={(event) => {
                  setLine2({ ...Line2, Type4: event.nativeEvent.text });
                }}
              />*/}
              <TouchableOpacity
                style={styles.SubBtn}
                title="Lock"
                onPress={() => {
                  if (Line2.Type4 !== null || Line2.Type4 !== undefined) {
                    //[temp] = [event];
                    setLine2({
                      ...Line2,
                      Type4: !Line2.Type4,
                    });
                  } else {
                    //[temp] = [event];
                    setLine2({ ...Line2, Type4: true });
                  }
                }}
              >
                {Line2.Type4 ? (
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

        {/*<View style={styles.Column2}>
          <View style={styles.TitleRight2Row}>
            <Text style={styles.TitleText2}> </Text>
          </View>
          <View style={styles.Rows}>
            <View style={styles.Row}>
              <Text style={styles.textInputTest}>Fitting</Text>
            </View>
            <View style={styles.Row}>
              <Text style={styles.textInputTest}>Fitting</Text>
            </View>
            <View style={styles.Row}>
              <Text style={styles.textInputTest}>Fitting</Text>
            </View>
          </View>
                </View>*/}

        <View style={styles.Column}>
          <View style={styles.Rows}>
            <View style={styles.Row}>
              <Text style={styles.TitleText1}>Qty.</Text>
            </View>
            <View style={styles.Row}>
              <TextInput
                style={styles.textInputTest}
                placeholder=""
                value={Line0.Quantity}
                onChange={(event) => {
                  setLine0({ ...Line0, Quantity: event.nativeEvent.text });
                }}
              />
            </View>
            <View style={styles.Row}>
              <TextInput
                style={styles.textInputTest}
                placeholder=""
                value={Line1.Quantity}
                onChange={(event) => {
                  setLine1({ ...Line1, Quantity: event.nativeEvent.text });
                }}
              />
            </View>
            <View style={styles.Row}>
              <TextInput
                style={styles.textInputTest}
                placeholder=""
                value={Line2.Quantity}
                onChange={(event) => {
                  setLine2({ ...Line2, Quantity: event.nativeEvent.text });
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.Column}>
          <View style={styles.Rows}>
            <View style={styles.Row}>
              <Text style={styles.TitleText1}>Dia.</Text>
            </View>
            <View style={styles.Row}>
              <TextInput
                style={styles.textInputTest}
                placeholder=""
                value={Line0.Diameter}
                onChange={(event) => {
                  setLine0({ ...Line0, Diameter: event.nativeEvent.text });
                }}
              />
            </View>
            <View style={styles.Row}>
              <TextInput
                style={styles.textInputTest}
                placeholder=""
                value={Line1.Diameter}
                onChange={(event) => {
                  setLine1({ ...Line1, Diameter: event.nativeEvent.text });
                }}
              />
            </View>
            <View style={styles.Row}>
              <TextInput
                style={styles.textInputTest}
                placeholder=""
                value={Line2.Diameter}
                onChange={(event) => {
                  setLine2({ ...Line2, Diameter: event.nativeEvent.text });
                }}
              />
            </View>
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
    borderWidth: 2,
  },
  Rows: { flex: 3 },
  RowsBig: { flex: 10 },
  Row: {
    height: 40,
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
    justifyContent: "center",
  },
  Column: { flex: 1, flexDirection: "column" },
  ColumnBig: { flex: 1.75, flexDirection: "column" },
  ColumnTitle: {
    flex: 0.3,
  },
  TitleRow: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 0,
    borderTopWidth: 1,
  },

  TitleRightRow: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 0,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
  },

  TitleRight2Row: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 0,
    borderTopWidth: 1,
    borderRightWidth: 1,
  },
  TitleLeftRow: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 0,
    borderTopWidth: 1,
    borderLeftWidth: 1,
  },
  TitleText1: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  TitleText2: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "right",
  },
  textInputTest: { paddingLeft: 5 },

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
  SubBtn: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  ColumnPhone: { flex: 1, flexDirection: "column" },
  SubBtnPhone: { height: 20 },
});
