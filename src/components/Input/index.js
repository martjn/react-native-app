import React from "react";
import {
  TextInput,
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Modal,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";

const Input = ({
  label,
  placeholder,
  type,
  options,
  isPassword,
  value,
  onChangeText,
  style,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPickerModalVisible, setPickerModalVisible] = useState(false);
  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const onSelect = (opt) => {
    onChangeText(opt);
    setPickerModalVisible(false);
  };
  console.log("Options: ", options);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {type === "picker" ? (
        <Pressable
          style={styles.inputContainer}
          onPress={() => setPickerModalVisible(true)}
        >
          {value ? (
            <Text style={[styles.placeholder, style]}>{value?.title}</Text>
          ) : (
            <Text style={[styles.placeholder, style]}>{placeholder}</Text>
          )}

          <Image
            style={styles.arrow}
            source={require("../../assets/tabs/arrow.png")}
          />
        </Pressable>
      ) : (
        <View style={styles.inputContainer}>
          <TextInput
            secureTextEntry={isPassword && !isPasswordVisible}
            placeholder={placeholder}
            style={[styles.input, style]}
            value={value}
            onChangeText={onChangeText}
            {...props}
          />
          {isPassword ? (
            <Pressable onPress={onEyePress}>
              <Image
                style={styles.eye}
                source={
                  isPasswordVisible
                    ? require("../../assets/auth_eye.png")
                    : require("../../assets/auth_eye_closed.png")
                }
              />
            </Pressable>
          ) : null}
        </View>
      )}
      <Modal transparent visible={isPickerModalVisible}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setPickerModalVisible(false)}
          style={styles.modalWrapper}
        >
          <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
            <Text style={styles.optionTitle}>Select options</Text>
            {options?.map((opt) => {
              if (!opt?.id) {
                return null;
              }
              const selected = value?.id === opt?.id;
              return (
                <Text
                  onPress={() => onSelect(opt)}
                  style={[
                    styles.optionText,
                    selected ? styles.selectedOption : {},
                  ]}
                  key={opt?.title}
                >
                  {opt?.title}
                </Text>
              );
            })}
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Input;
