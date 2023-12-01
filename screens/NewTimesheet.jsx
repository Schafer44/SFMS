import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { db } from "./FirebaseLink";
import React from "react";
import Loading from "./Loading";

export default class NewTimesheet extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
  }
  render() {
    const DoBoth = async () => {
      const Ref = await NewTimesheet();
    };
    // Asynchronously create a new timesheet
    const NewTimesheet = async () => {
      // Set isLoading to true to indicate that the operation is in progress
      this.setState({
        isLoading: true,
      });

      // Create a reference to a new document in the specified collection
      var Job = [];
      const ref = db.collection(this.props.jobNum).doc();

      // Use the reference to set initial data for the new timesheet
      const ehehe = await db
        .collection(this.props.jobNum)
        .doc(ref._delegate._key.path.segments[1])
        .set({
          Type: "Timesheet",
          TypeExtra: "null",
          baseId: ref._delegate._key.path.segments[1],
          TimesheetLines: { Line0: ["", "", "", "", "", "", ""] },
          TimesheetHeader: {},
          id: this.props.job.length,
          hasBeenUpdated: "no",
        });
      // Set isLoading to false after the operation is complete
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
            <Text style={{ color: "white" }}>New Timesheet</Text>
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
