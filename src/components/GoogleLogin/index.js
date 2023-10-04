import React from "react";
import { Image, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
const GoogleLogin = () => {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // this.setState({ userInfo })
      console.log("userInfo => ", userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
      }
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={signIn}
      style={styles.container}
    >
      <Image style={styles.image} source={require("../../assets/google.png")} />
    </TouchableOpacity>
  );
};

export default React.memo(GoogleLogin);
