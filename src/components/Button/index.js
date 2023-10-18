import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

function Button({ title, onPress, style }) {
  const handlePress = () => {
    console.log("Button is clicked");
  };
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.container, style]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default React.memo(Button);
