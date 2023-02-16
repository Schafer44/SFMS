import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import Signature from "react-native-signature-canvas";

export const SignatureCapture = (props) => {
  const handleOK = (signature) => {
    if (props.setSign !== undefined) {
      props.setSign(signature);
    }
    if (props.setTable !== undefined) {
      var temp = props.Table[props.Keys][0];
      var temp2;
      temp2 = [temp];
      temp2[1] = signature;
      props.setTable({
        ...props.Table,
        [props.Keys]: temp2,
      });
    }
    if (props.setLine !== undefined) {
      props.setLine({ ...props.Line, signature: signature });
      //props.setLine(signature);
      //props.setLine({ ...props.Line, signature: "" });
    }
    toggleOverlay();
  };

  const handleEmpty = () => {};
  const toggleOverlay = () => {
    props.setVisible(!props.visible);
  };
  const style = `.m-signature-pad {} 
  .m-signature-pad--body {}
  body,html {
  width: 90%; height: 80%; }
  .m-signature-pad--footer
    .button {
      background-color: green;
      color: #FFF;
      width:30%;
      height:90%;
    }`;
  return (
    <View style={styles.GC}>
      <View style={styles.preview}>
        {props.signature ? (
          <Image
            resizeMode={"contain"}
            style={{ left: 0, width: "100%", height: "20%" }}
            source={{ uri: props.signature }}
          />
        ) : null}
      </View>
      <Signature
        onOK={handleOK}
        onEmpty={handleEmpty}
        descriptionText="Sign"
        clearText="Clear"
        confirmText="Save"
        webStyle={style}
        resizeMode={"contain"}
        onBegin={() => props.SignInScroll()}
        onEnd={() => props.SignInScroll()}
      />
      <Button
        title="Close"
        color="green"
        style={styles.SubBtn}
        onPress={() => toggleOverlay()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  GC: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    Left: "10%",
    justifyContent: "center",
  },
  preview: {
    width: "100%",
    height: "40%",
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    top: 0,
    position: "absolute",
  },
  previewText: {
    color: "#FFF",
    fontSize: 25,
    height: 40,
    lineHeight: 40,
    backgroundColor: "#69B2FF",
    width: 120,
    textAlign: "center",
    marginTop: 10,
  },
  SubBtn: {
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "green",
  },
});
