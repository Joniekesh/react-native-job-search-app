import { View, Text } from "react-native";
import styles from "./specifics.style";
const Specifics = ({ title, qualifications }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {qualifications?.map((q, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.number}>{index + 1}:</Text>
          <Text style={styles.text}>{q}.</Text>
        </View>
      ))}
    </View>
  );
};

export default Specifics;
