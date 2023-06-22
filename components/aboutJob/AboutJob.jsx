import { View, Text } from "react-native";
import styles from "./aboutJob.style";
const AboutJob = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.about}>{title}:</Text>
      <Text>{description}</Text>
    </View>
  );
};

export default AboutJob;
