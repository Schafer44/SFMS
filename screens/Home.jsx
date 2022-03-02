import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Jobs from "./Jobs";
import NewJob from "./NewJobButton";
import Search from "./Search";
import React, { useState, useEffect } from "react";

export default function Home({ navigation }) {
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
      <ScrollView style={styles.Container}>
        <Jobs searchPhrase={searchPhrase} navigation={navigation.navigate} />
      </ScrollView>
      <NewJob navigation={navigation.navigate} style={styles.blank} />
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
  blank: {
    width: "100%",
    flex: 1,
  },
  Container: {
    width: "100%",
    flex: 4,
    backgroundColor: "white",
  },
});
