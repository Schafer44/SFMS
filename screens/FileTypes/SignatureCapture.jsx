import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import Signature from "react-native-signature-canvas";

export const SignatureCapture = (props) => {
  // Function to handle OK button click
  const handleOK = (signature) => {
    // Check if setSign prop is provided and call it with the signature
    if (props.setSign !== undefined) {
      props.setSign(signature);
    }

    // Check if setTable prop is provided and update the table state accordingly
    if (props.setTable !== undefined) {
      var temp = props.Table[props.Keys][0];
      var temp2;
      temp2 = [temp];
      temp2[1] = signature;

      // Update the table state using setTable prop and spread operator
      props.setTable({
        ...props.Table,
        [props.Keys]: temp2,
      });
    }

    // Check if setLine prop is provided and update the line state accordingly
    if (props.setLine !== undefined) {
      // Update the line state with the signature
      props.setLine({ ...props.Line, signature: signature });
    }

    // Close the overlay by toggling visibility
    toggleOverlay();
  };

  // Function to handle empty action (no implementation provided)
  const handleEmpty = () => {};

  // Function to toggle the overlay visibility using the setVisible prop
  const toggleOverlay = () => {
    props.setVisible(!props.visible);
  };

  // Styles for the signature pad, including CSS rules
  const style = `.m-signature-pad {margin-left: 0%;} 
  .m-signature-pad--body {width: 90%; height: 70%;margin-top:10%;margin-left: 5%;}
  body,html {width: 100%; height: 100%;margin-left: 0%;}
  .m-signature-pad--footer .button {
    background-color: green;
    color: #FFF;
    width:30%;
    height:100%;
  }`;

  return (
    <Modal>
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

        <View
          style={{
            left: 0,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Signature
            bgWidth={0}
            bgHeight={0}
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
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  GC: {
    width: "100%",
    height: "100%",
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
