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
export default function Home(props) {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [headerHeight] = useState(useHeaderHeight());
  return (
    <KeyboardAvoidingView
      style={styles.Gloablcontainer}
      behavior={Platform.OS === "ios" ? "height" : null}
      keyboardVerticalOffset={headerHeight}
    >
      <View style={{ flex: 1, marginTop: 15 }}>
        <Search
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
        />
      </View>
      <View style={styles.Container}>
        <ScrollView style={styles.Container}>
          <Jobs
            company={props.route.params[1]}
            searchPhrase={searchPhrase}
            navigation={props.navigation.navigate}
            user={props.route.params[0]}
            Admin={props.route.params[2]}
          />
        </ScrollView>
      </View>
      <View style={styles.blank}>
        <NewJob
          navigation={props.navigation.navigate}
          company={props.route.params[1]}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  Gloablcontainer: {
    height: "100%",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  blank: {
    flex: 1,
    backgroundColor: "white",
  },
  Container: {
    flex: 8,
    backgroundColor: "white",
  },
  prev: { width: "100%", height: "100%" },
});
