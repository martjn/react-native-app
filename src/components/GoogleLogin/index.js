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
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
      } else {
        console.log(error);
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
