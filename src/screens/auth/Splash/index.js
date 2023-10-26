import React, { useContext } from "react";
import { Text, View, Image, Pressable } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";
import { UserContext } from "../../../../App";
function Splash({ navigation }) {
  console.log("Navigation => ", navigation);

  const user = useContext(UserContext);
  console.log("user => ", user);

  const onSignup = () => {
    navigation.navigate("Signup");
  };
  const onSignin = () => {
    navigation.navigate("SignIn");
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/splash_image.png")}
        resizeMode="contain"
      />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll Find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>

      <Button style={{ flex: 0 }} onPress={onSignup} title="Sign Up" />
      <Pressable onPress={onSignin} hitSlop={20}>
        <Text style={styles.footerText}>Sign In</Text>
      </Pressable>
    </View>
  );
}

export default Splash;
