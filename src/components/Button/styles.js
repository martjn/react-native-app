import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
export const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#4F63AC",
    paddingHorizontal: 8,
    paddingVertical: 20,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "nowrap",
  },
  title: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
