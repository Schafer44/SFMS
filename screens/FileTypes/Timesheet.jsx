import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { db } from "../FirebaseLink";
import React, { setState, useState, useEffect } from "react";
import TimesheetLine from "./TimesheetLine";
export default function Timesheet() {
  const [searchPhrase, setSearchPhrase] = useState("");
  return (
    <View style={styles.globalContainer}>
      <View style={styles.header}>
        <View style={styles.hGrid}>
          <View style={styles.hGridColumns}></View>
          <View style={styles.hGridColumns}></View>
          <View style={styles.hGridColumns}></View>
          <View style={styles.hGridColumns}></View>
        </View>
        <View style={styles.hGrid}>
          <View style={styles.hGridColumns}></View>
          <View style={styles.hGridColumns}></View>
          <View style={styles.hGridColumns}></View>
          <View style={styles.hGridColumns}></View>
        </View>
      </View>

      <View style={styles.body}>
        <ScrollView style={styles.bodyScroll}>
          <TimesheetLine
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
          />
          <TimesheetLine
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
          />
          <TimesheetLine
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
          />
          <TimesheetLine
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
          />
          <TimesheetLine
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
          />
          <TimesheetLine
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
          />
          <TimesheetLine
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
          />
          <TimesheetLine
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
          />
          <TimesheetLine
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
          />
          <TimesheetLine
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
          />
          <TimesheetLine
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
          />
          <TimesheetLine
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
          />
          <TimesheetLine
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
          />
          <TimesheetLine
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
          />
          <TimesheetLine
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
          />
          <TimesheetLine
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
          />
          <TimesheetLine
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
          />
          <TimesheetLine
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
          />
        </ScrollView>
      </View>
      <View style={styles.footerDoc}></View>
      <View style={styles.footerPage}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  globalContainer: {
    marginTop: 20,
    width: "100%",
    flex: 1,
  },
  header: {
    width: "100%",
    flex: 2,
    backgroundColor: "darkgrey",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    flexDirection: "row",
  },
  hGrid: {
    height: "90%",
    flexDirection: "column",
    backgroundColor: "black",
    flex: 1,
    margin: 5,
    alignSelf: "flex-start",
  },
  hGridColumns: {
    flex: 1,
    margin: 4,
    backgroundColor: "white",
  },
  bodyScroll: {
    width: "100%",
  },
  body: {
    width: "100%",
    flex: 6,
    backgroundColor: "darkgrey",
    marginBottom: 5,
    borderColor: "black",
    borderBottomWidth: 4,
    borderTopWidth: 4,
  },
  footerDoc: {
    width: "100%",
    flexDirection: "row",
    flex: 1.5,
    backgroundColor: "darkgrey",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  footerPage: {
    width: "100%",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "darkgrey",
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    color: "white",
  },
});
