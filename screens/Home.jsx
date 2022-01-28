import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Jobs from "./Jobs";
import NewJob from "./NewJob";
export default function App() {
  return (
    <View style={styles.Gloablcontainer}>
      <Jobs />
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
});
