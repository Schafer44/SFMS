import React, { useState } from "react";
import {
  View,
  Modal,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const PopupWithInput = ({ onSubmit }) => {
  // State to manage the visibility of a modal
  const [modalVisible, setModalVisible] = useState(false);
  // State to store the current value of an input field
  const [inputValue, setInputValue] = useState("");

  // Handle form submission
  const handleSubmit = () => {
    // Call the provided onSubmit callback with the current input value
    onSubmit(inputValue);

    // Close the modal by setting modalVisible to false
    setModalVisible(false);

    // Reset the input value to an empty string after submission
    setInputValue("");
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)} title="-">
        <View
          style={{
            height: "100%",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            paddingLeft: 10,
            paddingRight: 10,
            padding: 5,
          }}
        >
          <Text
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "#007AFF",
            }}
          >
            Add
          </Text>
        </View>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalTitleCont}>
              <Text style={styles.modalTitle}>New Job</Text>
            </View>
            <View style={styles.inputCont}>
              <TextInput
                value={inputValue}
                onChangeText={setInputValue}
                style={styles.input}
                placeholder="Job Number"
              />
            </View>
            <View style={styles.BtnCont}>
              <TouchableOpacity onPress={handleSubmit} style={styles.BtnRight}>
                <Text style={styles.BtnText}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.BtnLeft}
              >
                <Text style={styles.BtnText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    marginTop: "50%",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    borderRadius: 10,
    width: 300,
    height: 200,
    backgroundColor: "rgba(35,35,35, .95)",
    display: "flex",
  },
  modalTitleCont: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    color: "white",
    fontSize: 16,
  },
  inputCont: {
    flex: 3,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    paddingLeft: 5,
    width: "90%",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    color: "white",
    height: 40,
    backgroundColor: "rgba(40,40,40, 1)",
  },
  BtnCont: {
    flex: 1.5,
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
  },
  BtnLeft: {
    width: "100%",
    borderColor: "grey",
    borderTopWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  BtnRight: {
    width: "100%",
    borderColor: "grey",
    borderTopWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderLeftWidth: 1,
  },
  BtnText: {
    color: "rgb(0, 122, 255)",
  },
});

export default PopupWithInput;
