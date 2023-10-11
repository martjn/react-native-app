import React, { useState } from "react";
import AuthHeader from "../../../components/AuthHeader";
import { styles } from "./styles";
import { View, Text } from "react-native";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";

function Signup() {
  const [checked, setChecked] = useState(false);
  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign In" />
      <Input label="Email" placeholder={"example@gmail.com"} />
      <Input isPassword label="Password" placeholder={"********"} />

      <Button style={styles.button} title="Sign In" />
      <Separator text="Or sign in with" />
      <GoogleLogin />
      <Text style={styles.footerText}>
        Don't have an account?
        <Text style={styles.footerLink}> Sign Up</Text>
      </Text>
    </View>
  );
}

export default React.memo(Signup);
