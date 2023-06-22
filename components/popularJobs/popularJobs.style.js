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
  popjobs: {
    height: 150,
    marginTop: 10,
    marginBottom: 10,
  },
  job: {
    width: 250,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: "space-between",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  company: {
    opacity: 0.5,
  },
  jobTitle: {
    fontSize: 20,
  },
  country: {
    opacity: 0.5,
  },
});

export default styles;
