import React, { useState, useContext } from "react";
import AuthHeader from "../../../components/AuthHeader";
import { styles } from "./styles";
import { View, Text } from "react-native";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { UserContext } from "../../../../App";
import AsyncStorage from "@react-native-async-storage/async-storage";

function SignIn({ navigation }) {
  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState({});
  const { user, setUser } = useContext(UserContext);
  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const onBack = () => {
    navigation.goBack();
  };
  const onSignup = () => {
    navigation.navigate("Signup");
  };
  const onChange = (key, value) => {
    setValues((v) => ({ ...v, [key]: value }));
  };
  const onSignin = () => {
    console.log("login values => ", values);
    if (!values?.email || !values?.password) {
      Alert.alert("All fields are required");
      return;
    }
    axios
      .post("http://192.168.18.4/api/user/login", values)
      .then(async (response) => {
        console.log(response?.data?.accessToken);
        const accessToken = response?.data?.accessToken;
        setUser({ accessToken });

        if (response?.data?.token) {
          await AsyncStorage.setItem("auth_token", `${response?.data?.token}`);
        }
      })
      .catch((error) => {
        console.log("login error => ", error.response.data);
      });
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign In" />
        <Input
          value={values.email}
          onChangeText={(v) => onChange("email", v)}
          label="Email"
          placeholder={"example@gmail.com"}
        />
        <Input
          value={values.password}
          onChangeText={(v) => onChange("password", v)}
          isPassword
          label="Password"
          placeholder={"********"}
        />

        <Button style={styles.button} title="Sign In" />
        <Separator text="Or sign in with" />
        <GoogleLogin />
        <Text style={styles.footerText}>
          Don't have an account?
          <Text style={styles.footerLink}> Sign Up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default React.memo(SignIn);
