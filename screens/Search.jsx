import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { db } from "./FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function Search(props) {
  return (
    <View style={styles.container}>
      <View
        style={
          !props.clicked
            ? styles.searchBar__unclicked
            : styles.searchBar__clicked
        }
      >
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={props.searchPhrase}
          onChangeText={props.setSearchPhrase}
          onFocus={() => {
            props.setClicked(true);
          }}
        />
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {props.clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              props.setClicked(false);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  Text: {
    color: "black",
    height: "80%",
    width: "98%",
    justifyContent: "flex-start",
    borderRadius: 20,
    padding: 15,
  },
  Search: {
    width: "100%",
    height: 70,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 4,
    borderRadius: 20,
    margin: "2.5%",
  },
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar__unclicked: {
    marginTop: 15,
    padding: 10,
    paddingLeft: 1,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    marginTop: 15,
    padding: 10,
    flexDirection: "row",
    width: "90%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    padding: 5,
    marginLeft: 10,
    width: "100%",
    height: "100%",
  },
});
