import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Jobs from "./Jobs";
import NewJob from "./NewJobButton";
import Search from "./Search";
import React, { useState, useEffect } from "react";

export default function App() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  return (
    <View style={styles.Gloablcontainer}>
      <Search
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      <Jobs searchPhrase={searchPhrase} />
      <NewJob />
    </View>
  );
}

const styles = StyleSheet.create({
  Gloablcontainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
