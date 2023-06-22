import styles from "./footer.style";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

const Footer = ({ url }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setToggle(!toggle)}>
        <AntDesign
          style={[
            styles.heart,
            toggle && { backgroundColor: "crimson", color: "white" },
          ]}
          name="hearto"
          size={20}
          color="black"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => Linking.openURL(url)}>
        <Text style={styles.text}>Apply for this job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
