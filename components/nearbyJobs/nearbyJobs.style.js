import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  popularJobs: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pjobText: {
    fontSize: 20,
  },
  pjobShowAll: {
    fontSize: 16,
    opacity: 0.5,
  },
  list: {
    marginTop: 10,
    marginBottom: 30,
    gap: 10,
  },
  item: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },

  jobTitle: {
    fontSize: 20,
  },

  duration: {
    opacity: 0.5,
  },
});

export default styles;
