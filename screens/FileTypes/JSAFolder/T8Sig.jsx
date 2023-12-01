import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SignatureCapture } from "../SignatureCapture";

export default function T8Sig(props) {
  const [visible, setVisible] = useState(false);
  return visible ? (
    <View style={styles.body2JSA8}>
      <SignatureCapture
        Keys={props.Keys}
        setTable={props.setTable}
        Table={props.Table}
        visible={visible}
        setVisible={setVisible}
        signature={props.Table[props.Keys][1]}
        SignInScroll={props.SignInScroll}
      />
    </View>
  ) : (
    <View style={styles.RowJSA8}>
      {props.Table[props.Keys][1] ? (
        <TouchableOpacity
          style={styles.SubBtn}
          title="Submit"
          underlayColor="#fff"
          onPress={() => setVisible(!visible)}
        >
          <Image
            resizeMode={"contain"}
            style={styles.prev}
            source={{ uri: props.Table[props.Keys][1] }}
          />
        </TouchableOpacity>
      ) : (
        <View>
          <TouchableOpacity
            style={styles.SubBtn}
            onPress={() => setVisible(!visible)}
          ></TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  body2JSA8: {
    width: "100%",
    height: 400,
    flexDirection: "column",
    display: "flex",
  },

  prev: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  RowJSA8: {
    borderStyle: "solid",
    borderWidth: 1,
    height: 50,
    flex: 1,
  },
  test101: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  prevJSA8: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  SubBtn: {
    width: "100%",
    height: "100%",
    height: 50,
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    position: "absolute",
  },
});
