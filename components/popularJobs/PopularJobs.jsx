import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./popularJobs.style";
import { jobs } from "../../dummj/data";
import { useRouter } from "expo-router";
import { popularJobs } from "../../dummj/jobList";

const PopularJobs = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.popularJobs}>
        <Text style={styles.pjobText}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.pjobShowAll}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.popjobs}>
        {/* {loading ? (
          <ActivityIndicator size="large" />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : ( */}
        <FlatList
          data={popularJobs.data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.job}
              onPress={() => router.push(`/job-details/${item.job_id}`)}
            >
              <Image
                style={styles.image}
                source={{ uri: item?.employer_logo }}
              />
              <Text style={styles.jobTitle}>{item.job_title}</Text>
              <Text style={styles.company}>{item.employer_name}</Text>
              <Text style={styles.country}>{item.job_country}</Text>
            </TouchableOpacity>
          )}
          horizontal
          contentContainerStyle={{ columnGap: 10 }}
          keyExtractor={(item) => item.job_id}
          showsHorizontalScrollIndicator={false}
        />
        {/* )} */}
      </View>
    </View>
  );
};

export default PopularJobs;
