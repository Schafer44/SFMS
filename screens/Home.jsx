import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import Jobs from "./Jobs";
import NewJob from "./NewJobButton";
import Search from "./Search";
import { useHeaderHeight } from "@react-navigation/elements";
import React, { useState, useEffect } from "react";
export default function Home(props, props2) {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [headerHeight] = useState(useHeaderHeight());
  console.log("1", props.route.params);
  return (
    <KeyboardAvoidingView
      style={styles.Gloablcontainer}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={headerHeight}
    >
      <Search
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      <ScrollView style={styles.Container}>
        <Jobs
          company={props.route.params[1]}
          searchPhrase={searchPhrase}
          navigation={props.navigation.navigate}
          user={props.route.params[0]}
          Admin={props.route.params[2]}
        />
      </ScrollView>

      <NewJob
        navigation={props.navigation.navigate}
        style={styles.blank}
        company={props.route.params[1]}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  Gloablcontainer: {
    flex: 1,
    backgroundColor: "white",
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
  prev: { width: "100%", height: "100%" },
});
