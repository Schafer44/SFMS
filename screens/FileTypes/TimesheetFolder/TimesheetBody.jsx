import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Keyboard,
} from "react-native";
import { db } from "../../FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import { SignatureCapture } from "../SignatureCapture";
import Ionicons from "@expo/vector-icons/Ionicons";
import "@expo/match-media";
import { useMediaQuery } from "react-responsive";

export default function TimesheetBody(props) {
  const [Table, setTable] = useState({});
  const [Rows, setRows] = useState([]);
  const [signature, setSign] = useState(null);
  const [visible, setVisible] = useState(false);
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 600px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  useEffect(() => {
    if (Object.keys(Table).length !== 0) {
      props.setT8(Table);
    } else if (props.T8 !== undefined) {
      setTable(props.T8);
    }
  }, [props, Table]);
  const addRow = () => {
    var rows = ["", "", "", "", "", "", "", ""];
    var temp = Object.keys(Table).length;

    var Keys = "Line" + temp;
    setTable({
      ...Table,
      [Keys]: rows,
    });
    //rows.push({ name: "", sig: "", num: temp });
    //setRows([...rows]);
  };
  return (
    <View View style={styles.body}>
      {isBigScreen ? (
        <View style={styles.bodyHeaderBodyWeb}>
          <View style={styles.bGridLarge}>
            <View>
              <Text style={styles.textInputHeaderHeader}>Name</Text>
            </View>
          </View>
          <View style={styles.bGridSmall}>
            <View>
              <Text style={styles.textInputHeaderHeader}>Occ</Text>
            </View>
          </View>
          <View style={styles.bGridSmall}>
            <View>
              <Text style={styles.textInputHeaderHeader}>Hrs.</Text>
            </View>
          </View>
          <View style={styles.bGridSmall}>
            <View>
              <Text style={styles.textInputHeaderHeader}>P/U</Text>
            </View>
          </View>
          <View style={styles.bGridSmall}>
            <View>
              <Text style={styles.textInputHeaderHeader}>Rig</Text>
            </View>
          </View>
          <View style={styles.bGridSmall}>
            <View>
              <Text style={styles.textInputHeaderHeader}>P/D</Text>
            </View>
          </View>
          <View style={styles.bGridMedium}>
            <View>
              <Text style={styles.textInputHeaderHeader}>Equip No.</Text>
            </View>
          </View>
          <View style={styles.bGridLarge}>
            <View>
              <Text style={styles.textInputHeaderHeader}>
                Equip Description
              </Text>
            </View>
          </View>
        </View>
      ) : null //View>
      }

      <TouchableOpacity
        style={styles.SubBtnAdd}
        title="Lock"
        onPress={() => addRow()}
      >
        <Text style={styles.LockText}>Add Row</Text>
      </TouchableOpacity>
      <ScrollView style={styles.bodyScroll} keyboardShouldPersistTaps="handled">
        <View style={styles.Column}>
          {Object.keys(Table)
            .sort()
            .map((Keys, r) => (
              <View
                key={Keys}
                style={[isBigScreen ? styles.Line : styles.LinePhone]}
              >
                <View
                  style={
                    isBigScreen ? styles.bGridLarge : styles.bGridLargePhone
                  }
                >
                  {isMobile ? (
                    <View style={styles.bGridColumns}>
                      <Text style={styles.textInputHeaderHeader}>Name</Text>
                    </View>
                  ) : (
                    <View style={{ display: "none" }}></View>
                  )}
                  <TextInput
                    style={styles.textInputTest}
                    placeholder=""
                    value={Table[Keys][0]}
                    onChange={(event) => {
                      var temp = Keys;
                      var temp2;
                      var temp3 = Table[Keys];
                      //[temp] = [event];
                      var [temp] = [event.nativeEvent.text];
                      temp3[0] = event.nativeEvent.text;
                      temp2 = [temp];
                      setTable({
                        ...Table,
                        [Keys]: temp3,
                      });
                    }}
                  />
                </View>
                <View
                  style={
                    isBigScreen ? styles.bGridSmall : styles.bGridSmallPhone
                  }
                >
                  {isMobile ? (
                    <View style={styles.bGridColumns}>
                      <Text style={styles.textInputHeaderHeader}>Occ</Text>
                    </View>
                  ) : (
                    <View style={{ display: "none" }}></View>
                  )}
                  <TextInput
                    style={styles.textInputTest}
                    placeholder=""
                    value={Table[Keys][1]}
                    onChange={(event) => {
                      var temp = Keys;
                      var temp2;
                      var temp3 = Table[Keys];
                      //[temp] = [event];
                      var [temp] = [event.nativeEvent.text];
                      temp3[1] = event.nativeEvent.text;
                      temp2 = [temp];
                      setTable({
                        ...Table,
                        [Keys]: temp3,
                      });
                    }}
                  />
                </View>
                <View
                  style={
                    isBigScreen ? styles.bGridSmall : styles.bGridSmallPhone
                  }
                >
                  {isMobile ? (
                    <View style={styles.bGridColumns}>
                      <Text style={styles.textInputHeaderHeader}>Hrs.</Text>
                    </View>
                  ) : (
                    <View style={{ display: "none" }}></View>
                  )}
                  <TextInput
                    style={styles.textInputTest}
                    placeholder=""
                    value={Table[Keys][2]}
                    onChange={(event) => {
                      var temp = Keys;
                      var temp2;
                      var temp3 = Table[Keys];
                      //[temp] = [event];
                      var [temp] = [event.nativeEvent.text];
                      temp3[2] = event.nativeEvent.text;
                      temp2 = [temp];
                      setTable({
                        ...Table,
                        [Keys]: temp3,
                      });
                    }}
                  />
                </View>
                <View
                  style={
                    isBigScreen ? styles.bGridSmall : styles.bGridSmallPhone
                  }
                >
                  {isMobile ? (
                    <View style={styles.bGridColumns}>
                      <Text style={styles.textInputHeaderHeader}>P/U</Text>
                    </View>
                  ) : (
                    <View style={{ display: "none" }}></View>
                  )}
                  <TouchableOpacity
                    style={styles.SubBtn}
                    title="Lock"
                    onPress={() => {
                      if (
                        Table[Keys][3] !== null ||
                        Table[Keys][3] !== undefined
                      ) {
                        var temp3 = Table[Keys];
                        //[temp] = [event];
                        temp3[3] = !Table[Keys][3];
                        setTable({
                          ...Table,
                          [Keys]: temp3,
                        });
                      } else {
                        var temp3 = Table[Keys];
                        //[temp] = [event];
                        temp3[3] = true;
                        setTable({
                          ...Table,
                          [Keys]: temp3,
                        });
                      }
                    }}
                  >
                    {Table[Keys][3] ? (
                      <View style={styles.true}>
                        <Ionicons
                          adjustsFontSizeToFit={true}
                          name="checkmark"
                          color="green"
                          style={[
                            isBigScreen
                              ? styles.trueText
                              : styles.trueTextPhone,
                          ]}
                        />
                        {/*<Text style={styles.trueText}>X</Text>*/}
                      </View>
                    ) : (
                      <View style={styles.false}></View>
                    )}
                  </TouchableOpacity>
                </View>
                <View
                  style={
                    isBigScreen ? styles.bGridSmall : styles.bGridSmallPhone
                  }
                >
                  {isMobile ? (
                    <View style={styles.bGridColumns}>
                      <Text style={styles.textInputHeaderHeader}>Rig</Text>
                    </View>
                  ) : (
                    <View style={{ display: "none" }}></View>
                  )}
                  <TextInput
                    style={styles.textInputTest}
                    placeholder=""
                    value={Table[Keys][4]}
                    onChange={(event) => {
                      var temp = Keys;
                      var temp2;
                      var temp3 = Table[Keys];
                      //[temp] = [event];
                      var [temp] = [event.nativeEvent.text];
                      temp3[4] = event.nativeEvent.text;
                      temp2 = [temp];
                      setTable({
                        ...Table,
                        [Keys]: temp3,
                      });
                    }}
                  />
                </View>
                <View
                  style={
                    isBigScreen ? styles.bGridSmall : styles.bGridSmallPhone
                  }
                >
                  {isMobile ? (
                    <View style={styles.bGridColumns}>
                      <Text style={styles.textInputHeaderHeader}>P/D</Text>
                    </View>
                  ) : (
                    <View style={{ display: "none" }}></View>
                  )}
                  <TouchableOpacity
                    style={styles.SubBtn}
                    title="Lock"
                    onPress={() => {
                      if (
                        Table[Keys][5] !== null ||
                        Table[Keys][5] !== undefined
                      ) {
                        var temp3 = Table[Keys];
                        //[temp] = [event];
                        temp3[5] = !Table[Keys][5];
                        setTable({
                          ...Table,
                          [Keys]: temp3,
                        });
                      } else {
                        var temp3 = Table[Keys];
                        //[temp] = [event];
                        temp3[5] = true;
                        setTable({
                          ...Table,
                          [Keys]: temp3,
                        });
                      }
                    }}
                  >
                    {Table[Keys][5] ? (
                      <View style={styles.true}>
                        <Ionicons
                          adjustsFontSizeToFit={true}
                          name="checkmark"
                          color="green"
                          style={[
                            isBigScreen
                              ? styles.trueText
                              : styles.trueTextPhone,
                          ]}
                        />
                        {/*<Text style={styles.trueText}>X</Text>*/}
                      </View>
                    ) : (
                      <View style={styles.false}></View>
                    )}
                  </TouchableOpacity>
                </View>
                <View
                  style={
                    isBigScreen ? styles.bGridMedium : styles.bGridMediumPhone
                  }
                >
                  {isMobile ? (
                    <View style={styles.bGridColumns}>
                      <Text style={styles.textInputHeaderHeader}>
                        Equip No.
                      </Text>
                    </View>
                  ) : (
                    <View style={{ display: "none" }}></View>
                  )}
                  <TextInput
                    style={styles.textInputTest}
                    placeholder=""
                    value={Table[Keys][6]}
                    onChange={(event) => {
                      var temp = Keys;
                      var temp2;
                      var temp3 = Table[Keys];
                      //[temp] = [event];
                      var [temp] = [event.nativeEvent.text];
                      temp3[6] = event.nativeEvent.text;
                      temp2 = [temp];
                      setTable({
                        ...Table,
                        [Keys]: temp3,
                      });
                    }}
                  />
                </View>
                <View
                  style={
                    isBigScreen ? styles.bGridLarge : styles.bGridLargePhone
                  }
                >
                  {isMobile ? (
                    <View style={styles.bGridColumns}>
                      <Text style={styles.textInputHeaderHeader}>
                        Equip Description
                      </Text>
                    </View>
                  ) : (
                    <View style={{ display: "none" }}></View>
                  )}
                  <TextInput
                    style={styles.textInputTest}
                    placeholder=""
                    value={Table[Keys][7]}
                    onChange={(event) => {
                      var temp = Keys;
                      var temp2;
                      var temp3 = Table[Keys];
                      //[temp] = [event];
                      var [temp] = [event.nativeEvent.text];
                      temp3[7] = event.nativeEvent.text;
                      temp2 = [temp];
                      setTable({
                        ...Table,
                        [Keys]: temp3,
                      });
                    }}
                  />
                </View>
              </View>
            ))}
          <View style={styles.footerDoc}>
            <View style={styles.footerViewTitle}>
              <Text style={styles.textInputHeaderHeader}>
                Additional Comments
              </Text>
            </View>
            <View style={styles.footerViewContent}>
              <TextInput
                style={styles.textInputTestComment}
                placeholder=""
                value={props.Comment}
                onChangeText={props.setComment}
                multiline={true}
                returnKeyType={"done"}
                blurOnSubmit={true}
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  footerDoc: {
    width: "100%",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "white",
    marginTop: 5,
    borderWidth: 2,
    borderColor: "#d4d4d4",
  },
  footerViewTitle: {
    flex: 1.5,
    width: "100%",
    borderBottomWidth: 2,
    borderColor: "#ededed",
  },

  footerDocTitle: {
    paddingLeft: 10,
    backgroundColor: "white",
    width: "100%",
  },
  textInputTestComment: {
    height: 80,
    fontSize: 15,
    padding: 5,
    width: "100%",
    color: "black",
  },
  Line: {
    flex: 1,
    height: 75,
    borderStyle: "solid",
    borderWidth: 2,
    width: "100%",
    flexDirection: "row",
    borderColor: "#d4d4d4",
  },
  LinePhone: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 2,
    width: "100%",
    flexDirection: "column",
    borderColor: "#d4d4d4",
    marginBottom: 10,
  },
  body2: {
    flex: 1,
    height: 400,
    borderStyle: "solid",
    borderWidth: 2,
    width: "100%",
    flexDirection: "row",
    borderColor: "#d4d4d4",
  },
  textInputTest: {
    width: "100%",
    height: "100%",
    marginLeft: 5,
  },
  bodyScroll: {
    width: "100%",
    height: "90%",
  },
  body: {
    borderStyle: "solid",
    borderWidth: 2,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    borderColor: "#d4d4d4",
  },
  Title: {
    flex: 1.2,
    borderStyle: "solid",
    borderWidth: 1,
  },
  Row: {
    width: "100%",
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
  },
  Column: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    borderColor: "#d4d4d4",
    height: "100%",
  },
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

  prev: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  SubBtn: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "green",
    color: "white",
  },
  SubBtnAdd: {
    width: "100%",
    height: 75,
    flex: 3,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "green",
    color: "white",
  },
  LockText: {
    width: "100%",
    color: "white",
    alignContent: "center",
    textAlign: "center",
  },
  TitleText2: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  bGridSmall: {
    height: "100%",
    flex: 2,
    backgroundColor: "white",
    borderColor: "#d4d4d4",
    borderWidth: 1,
  },
  bGridMedium: {
    height: "100%",
    flex: 4,
    backgroundColor: "white",
    borderColor: "#d4d4d4",
    borderWidth: 1,
  },
  bGridLarge: {
    height: "100%",
    flex: 8,
    backgroundColor: "white",
    borderColor: "#d4d4d4",
    borderWidth: 1,
  },
  bGridSmallPhone: {
    height: "100%",
    flex: 1,
    backgroundColor: "white",
    borderColor: "#d4d4d4",
    borderWidth: 1,
    flexDirection: "row",
  },
  bGridMediumPhone: {
    height: "100%",
    flex: 1,
    backgroundColor: "white",
    borderColor: "#d4d4d4",
    borderWidth: 1,
    flexDirection: "row",
  },
  bGridLargePhone: {
    height: "100%",
    flex: 1,
    backgroundColor: "white",
    borderColor: "#d4d4d4",
    borderWidth: 1,
    flexDirection: "row",
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
    color: "white",
    fontSize: 32,
  },
  trueTextPhone: {
    textAlign: "center",
    color: "white",
  },
  false: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  textInputHeaderHeader: {
    fontSize: 15,
    width: "100%",
    height: "100%",
    color: "black",
    textAlign: "center",
    backgroundColor: "#ededed",
    borderWidth: 1,
    borderColor: "#d4d4d4",
  },
  bodyHeaderBodyWeb: {
    width: "100%",
    flex: 4,
    backgroundColor: "white",
    flexDirection: "row",
  },
  bGridColumns: {
    width: "40%",
  },
});
