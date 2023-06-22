import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    gap: 10,
    // backgroundColor: "teal",
  },
  heart: {
    borderEndColor: "#dddd",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },

  btn: {
    backgroundColor: "orange",
    width: "85%",
    padding: 10,
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
  },
});

export default styles;
