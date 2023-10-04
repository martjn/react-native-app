import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  agreeRow: {
    flexDirection: "row",
    alignitems: "center",
  },
  agreeText: {
    color: colors.blue,
    marginHorizontal: 14,
  },
  agreeTextBold: {
    fontWeight: "bold",
  },
  button: {
    marginVertical: 10,
  },
  footerText: {
    color: colors.blue,
    marginBottom: 56,
    textAlign: "center",
  },
  footerLink: {
    fontWeight: "bold",
  },
});
