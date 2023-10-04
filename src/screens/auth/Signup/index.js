import React from "react";
import AuthHeader from "../../../components/AuthHeader";
import { styles } from "./styles";
import { View } from "react-native";
import Input from "../../../components/Input";

function Signup() {
  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder={"John Doe"} />
      <Input label="Email" placeholder={"example@gmail.com"} />
      <Input isPassword label="Password" placeholder={"********"} />
    </View>
  );
}

export default Signup;
