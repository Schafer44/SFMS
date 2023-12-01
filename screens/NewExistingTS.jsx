import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
} from "react-native";
import { db } from "./FirebaseLink";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "./Loading";

export default class NewTimesheetFE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      Type: "Timesheet",
      TypeExtra: "null",
      TimesheetLines: {},
      TimesheetHeader: {},
      id: this.props.job.length,
      CSig: null,
      CRSig: null,
      FRSig: null,
      hasBeenUpdated: "yes",
    };
  }
  render() {
    // Asynchronously retrieve data from AsyncStorage and update Firestore
    const _retrieveData = async () => {
      try {
        // Attempt to retrieve data from AsyncStorage using the specified key
        const value = await AsyncStorage.getItem("@MySuperStore:TS");

        // Check if retrieved data exists
        if (value !== null) {
          // Parse the retrieved JSON data
          const temp = JSON.parse(value);

          // Update component state with the retrieved data
          this.state.TimesheetLines = temp.TimesheetLines;
          this.state.Header = temp.TimesheetHeader;
          this.state.Comment = temp.Comment;
          this.state.CRSig = temp.CRsignature;
          this.state.CSig = temp.Csignature;
          this.state.FRSig = temp.FRsignature;
        }

        // Create a reference to a new document in the specified Firestore collection
        var Job = [];
        const ref = db.collection(this.props.jobNum).doc();

        // Use the reference to update Firestore with the retrieved data
        const ehehe = await db
          .collection(this.props.jobNum)
          .doc(ref._delegate._key.path.segments[1])
          .set({
            Type: "Timesheet",
            TypeExtra: null,
            baseId: ref._delegate._key.path.segments[1],
            TimesheetLines: this.state.TimesheetLines,
            TimesheetHeader: this.state.Header,
            id: this.props.job.length,
            CRsignature: this.state.CRSig,
            Csignature: this.state.CSig,
            FRsignature: this.state.FRSig,
            Comment: this.state.Comment,
          });
      } catch (error) {
        // Handle the case where no local save is found in AsyncStorage
        Alert.alert("No local save found");
      }
    };
    const DoBoth = async () => {
      await _retrieveData();
      //const Ref = await NewTimesheet();
    };

    const NewTimesheet = async () => {
      this.setState({
        isLoading: true,
      });
      var Job = [];
      const ref = db.collection(this.props.jobNum).doc();
      const ehehe = await db
        .collection(this.props.jobNum)
        .doc(ref._delegate._key.path.segments[1])
        .set({
          Type: "Timesheet",
          TypeExtra: null,
          baseId: ref._delegate._key.path.segments[1],
          TimesheetLines: this.state.TimesheetLines,
          TimesheetHeader: this.state.Header,
          id: this.props.job.length,
          CRsignature: this.state.CRSig,
          Csignature: this.state.CSig,
          FRsignature: this.state.FRSig,
          Comment: this.state.Comment,
        });
      this.setState({
        isLoading: false,
      });
    };
    return (
      <View style={styles.container} key={1}>
        {this.state.isLoading ? <Loading /> : null}
        <View style={styles.newJob} key={1}>
          <TouchableHighlight
            activeOpacity={0.99}
            underlayColor="darkgreen"
            style={styles.EditJobBtn}
            onPress={() => DoBoth()}
          >
            <Text style={{ color: "white" }}>Copy Offline Timesheet</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
  Text: {
    color: "white",
  },
  newJob: {
    width: "95%",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1%",
    borderRadius: 10,
  },
  EditJobBtn: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
