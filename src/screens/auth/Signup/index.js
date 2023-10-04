import React, { useState } from "react";
import AuthHeader from "../../../components/AuthHeader";
import { styles } from "./styles";
import { View, Text } from "react-native";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";

function Signup() {
  const [checked, setChecked] = useState(false);
  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder={"John Doe"} />
      <Input label="Email" placeholder={"example@gmail.com"} />
      <Input isPassword label="Password" placeholder={"********"} />
      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreeText}>
          I agree with <Text style={styles.agreeTextBold}>Terms</Text>
          <Text> & </Text>
          <Text style={styles.agreeTextBold}>Privacy</Text>
        </Text>
      </View>
      <Button style={styles.button} title="Sign In" />
    </View>
  );
}

export default Signup;
