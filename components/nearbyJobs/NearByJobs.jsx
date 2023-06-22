import React, { useState } from "react";
import styles from "./nearbyJobs.style";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { nearbyJobs } from "../../dummj/jobList";

const NearByJobs = () => {
  const jobs = nearbyJobs?.data;

  const router = useRouter();

  // console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.popularJobs}>
        <Text style={styles.pjobText}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.pjobShowAll}>Show all</Text>
        </TouchableOpacity>
      </View>
      {/* {loading ? (
        <ActivityIndicator />
      ) : error ? (
        <Text>Something went wrong!</Text>
      ) : ( */}
      <View style={styles.list}>
        {jobs?.map((item) => (
          <TouchableOpacity
            style={styles.item}
            key={item.job_id}
            onPress={() => router.push(`/job-details/${item.job_id}`)}
          >
            <Image style={styles.image} source={{ uri: item?.employer_logo }} />
            <View>
              <Text>{item.job_title}</Text>
              <Text style={styles.duration}>{item.job_employment_type}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      {/* )} */}
    </View>
  );
};

export default NearByJobs;
