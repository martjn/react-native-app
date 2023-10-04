import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  innerTitle: {
    color: "orange",
    textDecorationLine: "underline",
  },
  container: {
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    padding: 24,
    borderWidth: 1,
  },
  titleContainer: {
    marginVertical: 54,
  },
  footerText: {
    color: "#4F63AC",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 30,
  },
});
