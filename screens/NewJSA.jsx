import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { db } from "./FirebaseLink";
import React from "react";
import Loading from "./Loading";

export default class NewJSA extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
  }
  render() {
    const DoBoth = async () => {
      const Ref = await NewJSA();
    }; // Asynchronously create a new JSA (Job Safety Analysis) document
    const NewJSA = async () => {
      // Set isLoading to true to indicate that the operation is in progress
      this.setState({
        isLoading: true,
      });

      // Create a reference to a new document in the specified Firestore collection
      var Job = [];
      const ref = db.collection(this.props.jobNum).doc();

      // Use the reference to set initial data for the new JSA document
      const ehehe = await db
        .collection(this.props.jobNum)
        .doc(ref._delegate._key.path.segments[1])
        .set({
          Type: "JSA",
          TypeExtra: "null",
          baseId: ref._delegate._key.path.segments[1],
          T1: [{ Table: {} }],
          T2: [{ Table: {} }],
          T3: [{ Table: {} }],
          T4: [{ Table: {} }],
          T5: [{ Table: {} }],
          T6: [{ Table: {} }],
          T7: [{ Table: {} }],
          T8: [{ Table: { Row0: ["", ""] } }],
          T9: [{ Line0: { Row0: [""] } }],
          T10: [{ Line0: { Row0: [""] } }],
          T11: [{ Line0: { Row0: ["", "", ""] } }],
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
            <Text style={{ color: "white" }}>New JSA</Text>
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
