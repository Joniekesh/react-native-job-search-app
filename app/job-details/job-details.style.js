import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // width: "100%",
  },

  top: {
    gap: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  companyLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,

    // height: Dimensions.get("window").height * 0.1,
    // width: Dimensions.get("window").height * 0.1,
    // borderRadius: Math.round(
    //   (Dimensions.get("window").height + Dimensions.get("window").width) / 2
    // ),
  },
  jobTitle: {
    fontSize: 24,
  },
  company: {
    fontSize: 16,
    opacity: 0.5,
  },
  middle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  tab: {
    fontSize: 16,
    borderColor: "#dddd",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    opacity: 0.6,
    fontWeight: "bold",
  },
});

export default styles;
