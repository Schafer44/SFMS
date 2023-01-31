//import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import authentication from "./FirebaseLink";
import Logo from "../assets/LoginLogo.png";
import { fetchUsersCompany } from "./FirebaseLink";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(false);
  const toggleOverlay = () => {
    setActive(!active);
  };

  useEffect(() => {}, []);
  const handleLogin = async () => {
    setEmail("tanner44schafer@gmail.com");
    signInWithEmailAndPassword(authentication, email, /*password*/ "444444")
      .then(async (userCredentials) => {
        const item = await fetchUsersCompany(email);
        const company = item.Company;
        const Admin = item.Admin;
        const user = userCredentials.user;
        const tempArr = [email, company, Admin];
        props.navigation.navigate("Home", tempArr);
      })
      .catch((userCredentials) => console.log(userCredentials));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <Image source={Logo} style={styles.Logo}></Image>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          placeholderTextColor="darkgrey"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          placeholderTextColor="darkgrey"
          secureTextEntry
        />

        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggleOverlay} style={styles.button}>
          <Text style={styles.buttonText}>No service?</Text>
        </TouchableOpacity>
      </View>
      {active ? (
        <>
          <View style={styles.OfflineBtnCont}>
            <TouchableHighlight
              underlayColor="#272727"
              style={styles.button}
              onPress={() =>
                props.navigation.navigate("Timesheet", { offline: true })
              }
            >
              <Text style={styles.buttonText}>Timesheet</Text>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor="#272727"
              style={styles.button}
              onPress={() =>
                props.navigation.navigate("JSA", { offline: true })
              }
            >
              <Text style={styles.buttonText}>JSA</Text>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor="#272727"
              style={styles.button}
              onPress={() =>
                props.navigation.navigate("Foreman Report", { offline: true })
              }
            >
              <Text style={styles.buttonText}>Foreman Report</Text>
            </TouchableHighlight>

            <TouchableOpacity
              onPress={toggleOverlay}
              style={styles.buttonSmall}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <></>
      )}
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  OfflineBtnCont: {
    width: 305,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 10,
    aspectRatio: 1 / 1,
    borderColor: "lightgray",
    borderWidth: 2,
    borderRadius: 20,
  },
  Logo: {
    marginBottom: "5%",
    width: "50%",
    height: "40%",
    borderRadius: 40,
    aspectRatio: 1,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    color: "black",
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    margin: "1%",
    height: 65,
  },

  buttonSmall: {
    backgroundColor: "#0782F9",
    width: "50%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    margin: "1%",
    height: 65,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
