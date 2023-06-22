import styles from "./job-details.style";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useSearchParams, Stack, useRouter } from "expo-router";
import ScreenHeader from "../../components/screenHeaderBtn/ScreenHeader";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import AboutJob from "../../components/aboutJob/AboutJob";
import Specifics from "../../components/specifics/Specifics";
import { nearbyJobs, popularJobs } from "../../dummj/jobList";

const JobDetails = () => {
  const tabs = ["About", "Qualifications", "Responsibilities"];
  const [isActive, setIsActive] = useState(tabs[0]);
  const { id } = useSearchParams();
  const router = useRouter();

  const combinedJobs = nearbyJobs.data.concat(popularJobs.data);

  const singleJob = combinedJobs.find((job) => job.job_id === id);

  const displayDetails = () => {
    switch (isActive) {
      case "About":
        return (
          <AboutJob
            title="About the job"
            description={singleJob.job_description}
          />
        );

      case "Qualifications":
        return (
          <Specifics
            title="Qualifications"
            qualifications={singleJob.job_highlights.Qualifications}
          />
        );

      case "Responsibilities":
        return (
          <Specifics
            title="Responsibilities"
            qualifications={singleJob.job_highlights.Responsibilities}
          />
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#f9f9f9" },
          headerLeft: () => (
            <ScreenHeader
              iconUrl="arrowleft"
              handlePress={() => router.back()}
            />
          ),

          headerRight: () => <ScreenHeader iconUrl="sharealt" />,
          headerTitle: "Job Details",
        }}
      />
      <ScrollView
        // style={styles.container}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          padding: 12,
          gap: 20,
        }}
      >
        <View style={styles.top}>
          <Image
            source={{ uri: singleJob?.employer_logo }}
            style={styles.companyLogo}
          />
          <Text style={styles.jobTitle}>{singleJob?.job_title}</Text>
          <Text style={styles.company}>
            {singleJob?.employer_name} / {singleJob?.job_country}
          </Text>
        </View>
        <View style={styles.middle}>
          {tabs.map((tab) => (
            <TouchableOpacity key={tab} onPress={() => setIsActive(tab)}>
              <Text
                style={[
                  styles.tab,
                  isActive === tab && {
                    backgroundColor: "purple",
                    color: "white",
                    opacity: 1,
                  },
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {displayDetails()}
      </ScrollView>
      <Footer
        url={
          singleJob?.job_google_link ??
          "https://careers.google.com/jobs/results/"
        }
      />
    </SafeAreaView>
  );
};

export default JobDetails;
