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
    props.setSign(signature);
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
  width: 90%; height: 80%; }`;
  return (
    <View style={{ width: "100%", height: "100%" }}>
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
        title="open"
        color="green"
        style={{ width: 50, height: 50 }}
        onPress={() => toggleOverlay()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});
