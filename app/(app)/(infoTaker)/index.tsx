import { ElevatedButton } from "@/components/ElevatedButton";
import { Mascot } from "@/components/Mascot";
import { Colors } from "@/constants/Colors";
import { Course } from "@/entities/courses";
import { Image } from "expo-image";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProgressBar from "../../../components/ProgressBar";

const index = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [progress, setProgress] = useState(0);
  const courses: Course[] = [Course.Math];
  const courseIcons = {
    [Course.Math]: "https://cdn-icons-png.flaticon.com/128/546/546743.png",
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ProgressBar progress={progress} />
        <Mascot
          style={styles.mascot}
          url="https://design.duolingo.com/f432eb8c3e03de216d20.svg"
        />
        <Text style={styles.h1}>
          What would you like to <Text style={styles.h1_bold}>learn?</Text>
        </Text>

        <View style={styles.coursesContainer}>
          {courses.map((course, index) => (
            <TouchableOpacity
            key={index}
              onPress={() => setSelectedCourse(course)}
              style={[
                styles.outlinedButton,
                selectedCourse === course && styles.selectedButton,
              ]}
            >
              <Image
                source={courseIcons[course]}
                style={{ height: 50, width: 50 }}
              />
              <Text style={{ fontFamily: "Poppins", fontSize: 18 }}>
                {course}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View>
        <Text style={[styles.chatText]}>
          Don't worry. You can choose more in your profile.
        </Text>
        <ElevatedButton
          disabled={!selectedCourse}
          onPress={() => router.push("/(app)/dailyGoals")}
          title="Continue"
        />
      </View>
    </SafeAreaView>
  );
};

export default index;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  outlinedButton: {
    borderWidth: 2,
    width: "100%",
    borderRadius: 10,
    borderColor: "#c1c1c1",
    paddingHorizontal: 5,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 40,
  },
  h1_bold: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
  },
  h1: {
    fontFamily: "Poppins",
    fontSize: 18,
  },
  mascot: {
    marginTop: 30,
    marginBottom: 20,
    width: "100%",
    height: 160,
    objectFit: "contain",
  },
  icon: {
    width: 60,
    height: 60,
    marginRight: 10,
    marginTop: 20,
  },
  chatText: {
    fontFamily: "Poppins",
    marginBottom: 10,
  },
  coursesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  courseButton: {
    width: width / 2 - 30,
    height: width / 2 - 30,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedButton: {
    borderColor: "#58cc02",
  },
  courseText: {
    fontSize: 20,
    color: "#333",
    fontWeight: "bold",
  },
  selectedText: {
    color: "#fff",
  },
  continueButton: {
    backgroundColor: Colors.light.buttonBackground,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  continueButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
