import styles from "./welcome.style";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

const Welcome = () => {
  const jobCats = ["Full-Time", "Part-Time", "Contractor"];

  const [isActive, setIsactive] = useState(jobCats[0]);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText) {
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.user}>Hello Jonie Dev</Text>
      <Text style={styles.find}>Find your perfect job</Text>
      <View style={styles.formDiv}>
        <TextInput
          style={styles.inputContainer}
          placeholder="Search for jobs..."
          onChangeText={(text) => setSearchText(text)}
        />
        <TouchableOpacity style={styles.btn} onPress={handleSearch}>
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={jobCats}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setIsactive(item)}>
            <Text
              style={[
                styles.jobType,
                isActive === item && {
                  opacity: 1,
                  backgroundColor: "purple",
                  color: "white",
                },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
        horizontal
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: 20 }}
      />
    </View>
  );
};

export default Welcome;
