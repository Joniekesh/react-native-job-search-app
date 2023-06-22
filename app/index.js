import React, { useContext, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";
import ScreenHeader from "../components/screenHeaderBtn/ScreenHeader";
import Welcome from "../components/welcome/Welcome";
import PopularJobs from "../components/popularJobs/PopularJobs";
import NearByJobs from "../components/nearbyJobs/NearByJobs";
import { nearbyJobs } from "../dummj/jobList";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#f9f9f9" },
          headerLeft: () => <ScreenHeader iconUrl="menufold" />,
          headerRight: () => <ScreenHeader iconUrl="user" />,
          headerTitle: "",
        }}
      />
      <ScrollView style={{ flex: 1, padding: 12 }}>
        <Welcome />
        <PopularJobs />
        <NearByJobs />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
