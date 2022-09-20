import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { db } from "./FirebaseLink";
import React, { setState, useState, useEffect } from "react";

export default function Search(props) {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          placeholderTextColor="darkgrey"
          style={styles.input}
          placeholder="Search"
          value={props.searchPhrase}
          onChangeText={props.setSearchPhrase}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-end",
    color: "black",
  },
  Text: {
    color: "black",
    height: "80%",
    width: "98%",
    justifyContent: "flex-start",
    borderRadius: 20,
    padding: 15,
    color: "black",
  },
  Search: {
    color: "black",
    width: "100%",
    height: 70,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 4,
    borderRadius: 20,
  },
  container: {
    margin: 15,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    color: "black",
  },
  searchBar: {
    marginTop: 15,
    padding: 10,
    paddingLeft: 1,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    color: "black",
  },
  input: {
    color: "black",
    fontSize: 20,
    padding: 5,
    marginLeft: 10,
    width: "100%",
    height: "100%",
  },
});
