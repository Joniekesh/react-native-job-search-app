import { Text, TouchableOpacity, Image } from "react-native";
import styles from "./screenHeader.style";
import { AntDesign } from "@expo/vector-icons";

const ScreenHeader = ({ iconUrl, handlePress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <AntDesign name={iconUrl} size={24} />
    </TouchableOpacity>
  );
};

export default ScreenHeader;
