import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { db } from "./FirebaseLink";
import React from "react";
import Loading from "./Loading";

export default class NewForemanReport extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
  }
  render() {
    const DoBoth = async () => {
      const Ref = await NewFR();
    }; // Asynchronously create a new Foreman Report document
    const NewFR = async () => {
      // Set isLoading to true to indicate that the operation is in progress
      this.setState({
        isLoading: true,
      });

      // Create a reference to a new document in the specified Firestore collection
      var Job = [];
      const ref = db.collection(this.props.jobNum).doc();

      // Use the reference to set initial data for the new Foreman Report document
      const ehehe = await db
        .collection(this.props.jobNum)
        .doc(ref._delegate._key.path.segments[1])
        .set({
          Type: "Foreman Report",
          TypeExtra: "null",
          baseId: ref._delegate._key.path.segments[1],
          Header: [{ Line0: {} }],
          T1: [{ Line0: {} }, { Line1: {} }],
          T2: [{ Line0: {} }],
          T3: [{ Line0: {} }],
          T4: [{ Line0: {} }],
          T5: [{ Line0: {} }],
          T6: [{ Line0: {} }, { Line1: {} }],
          T7: [{ Line0: {} }],
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
            <Text style={{ color: "white" }}>New Foreman Report</Text>
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
