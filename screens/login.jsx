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
  Alert,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import authentication from "./FirebaseLink";
import Logo from "../assets/LoginLogo.png";
import { fetchUsersCompany } from "./FirebaseLink";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "@expo/vector-icons/Ionicons";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(false);
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const toggleOverlay = () => {
    setActive(!active);
  };
  const handleStay = () => {
    setStayLoggedIn(!stayLoggedIn);
  };
  const getItem = async () => {
    try {
      const value = await AsyncStorage.getItem("@MySuperStore:Login");

      if (value !== null) {
        setEmail(value);
        setStayLoggedIn(true);
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  useEffect(() => {
    getItem();
  }, []);
  const handleLogin = async () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then(async (userCredentials) => {
        const item = await fetchUsersCompany(email);
        const company = item.Company;
        const Admin = item.Admin;
        const user = userCredentials.user;
        const tempArr = [email, company, Admin];
        props.navigation.navigate("Home", tempArr);
        if (stayLoggedIn) {
          await AsyncStorage.setItem("@MySuperStore:Login", email);
        } else {
          await AsyncStorage.setItem("@MySuperStore:Login", "");
        }
      })
      .catch((userCredentials) =>
        Alert.alert("You have entered an invalid email or password")
      );
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
        <View style={styles.StayCont}>
          <View style={styles.buttonContainerSmall}>
            <Text style={styles.buttonTextBlack}>Save Email</Text>
            <TouchableOpacity onPress={handleStay} style={styles.smallBtn}>
              {stayLoggedIn ? (
                <View style={styles.true}>
                  <View style={styles.Circle}></View>
                </View>
              ) : (
                <View style={styles.false}>
                  <View style={styles.Circle}></View>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={toggleOverlay}
          style={styles.buttonNoService}
        >
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
              style={styles.buttonClose}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <></>
      )}
      <View>
        <TouchableOpacity
          underlayColor="#272727"
          style={styles.buttonTerms}
          onPress={() => props.navigation.navigate("Terms and Conditions")}
        >
          <Text style={styles.buttonTextTerms}>Terms and Conditions</Text>
        </TouchableOpacity>
      </View>
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
  buttonContainerSmall: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
  buttonNoService: {
    backgroundColor: "#0782F9",
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    margin: "1%",
    height: 40,
  },
  buttonClose: {
    backgroundColor: "#0782F9",
    width: "50%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    margin: "1%",
    height: 40,
  },
  buttonTerms: {
    width: "50%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: "1%",
    height: 40,
  },
  buttonTextTerms: {
    color: "black",
    textDecorationLine: "underline",
  },
  smallBtn: {
    backgroundColor: "green",
    width: 60,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    height: 30,
    borderWidth: 2,
    borderColor: "#d4d4d4",
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
  buttonTextBlack: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    color: "black",
  },
  buttonTextGreen: {
    color: "Green",
    alignItems: "center",
    justifyContent: "center",
    color: "green",
    fontSize: 26,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
  StayCont: {
    width: "100%",
    padding: 15,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  true: {
    borderRadius: 15,
    width: "100%",
    height: "100%",
    backgroundColor: "green",
    justifyContent: "center",
    alignContent: "flex-end",
    alignItems: "flex-end",
  },
  trueText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  false: {
    borderRadius: 15,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    justifyContent: "center",
  },
  Circle: {
    marginLeft: 1,
    height: 26,
    width: 26,
    borderRadius: 26,
    backgroundColor: "#e3e3e3",
  },
});
