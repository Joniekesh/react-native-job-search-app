import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  user: {
    fontSize: 18,
    opacity: 0.6,
  },
  find: {
    fontSize: 24,
  },
  formDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputContainer: {
    padding: 10,
    width: "85%",
    borderRadius: 10,
    backgroundColor: "#dddd",
    fontSize: 16,
  },
  btn: {
    backgroundColor: "orange",
    color: "white",
    fontWeight: "bold",
    padding: 10,
    borderRadius: 10,
  },
  jobType: {
    borderColor: "#dddd",
    borderWidth: 2,
    padding: 10,
    borderRadius: 20,
    opacity: 0.4,
    fontWeight: "bold",
  },
});

export default styles;
