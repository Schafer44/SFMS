import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Text style={styles.searchText}>Search</Text>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 001</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 002</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 003</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 004</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 005</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 006</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 007</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 008</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 009</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 010</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 011</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 012</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 013</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 014</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 015</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 016</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 017</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 018</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 019</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 020</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 021</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 022</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 023</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 024</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 025</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 026</Text>
        </View>
        <View style={styles.existingJob}>
          <Text style={styles.Text}>Job 027</Text>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "white",
  },
  search: {
    width: "95%",
    height: 70,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 4,
    borderRadius: 20,
    margin: "2.5%",
  },
  existingJob: {
    width: "100%",
    height: 70,
    backgroundColor: "#272727",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  Text: {
    color: "white",
  },
});
