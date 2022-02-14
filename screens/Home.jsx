import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Jobs from "./Jobs";
import NewJob from "./NewJobButton";
import Search from "./Search";
import React, { useState, useEffect } from "react";

export default function Home({ navigation }) {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  console.log("he", navigation.navigate);
  return (
    <View style={styles.Gloablcontainer}>
      <Search
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      <ScrollView style={styles.Container}>
        <Jobs searchPhrase={searchPhrase} navigation={navigation.navigate} />
      </ScrollView>
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
  Container: {
    width: "100%",
    flex: 1,
    backgroundColor: "white",
  },
});
