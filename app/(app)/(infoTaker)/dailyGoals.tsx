import { ElevatedButton } from "@/components/ElevatedButton";
import { Mascot } from "@/components/Mascot";
import ProgressBar from "@/components/ProgressBar";
import { Colors } from "@/constants/Colors";
import { Course, DailyLearningGoal } from "@/entities/courses";
import { Image } from "expo-image";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"; // Import Image
import { SafeAreaView } from "react-native-safe-area-context";

const DailyGoals = () => {
  const [selectedCourse, setSelectedCourse] =
    useState<DailyLearningGoal | null>(null);
  const [progress, setProgress] = useState(0);
  const dailyLearningGoals: DailyLearningGoal[] = [
    DailyLearningGoal.Casual,
    DailyLearningGoal.Regular,
    DailyLearningGoal.Serious,
    DailyLearningGoal.Intense,
  ];

  function getTime(goal: DailyLearningGoal): string {
    switch (goal) {
      case DailyLearningGoal.Casual:
        return "3 mins";
      case DailyLearningGoal.Regular:
        return "10 mins";
      case DailyLearningGoal.Serious:
        return "15 mins";
      case DailyLearningGoal.Intense:
        return "30 mins";
      default:
        return "Unknown learning goal.";
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ProgressBar progress={progress} />
        <Mascot
          style={styles.mascot}
          url="https://design.duolingo.com/0c0e630c956fc1959fce.svg"
        />
        <Text style={styles.h1}>
          What are you daily learning <Text style={styles.h1_bold}>goals?</Text>
        </Text>

        <View style={styles.goalsContainer}>
          {dailyLearningGoals.map((learningGoal, index) => (
            <TouchableOpacity
            key={index}
              onPress={() => setSelectedCourse(learningGoal)}
              style={[
                styles.outlinedButton,
                selectedCourse === learningGoal && styles.selectedButton,
              ]}
            >
              <Text style={{ fontFamily: "Poppins-Semibold", fontSize: 18 }}>
                {getTime(learningGoal)}
              </Text>
              <Text style={{ fontFamily: "Poppins", fontSize: 16 }}>
                {learningGoal}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ElevatedButton
        disabled={!selectedCourse}
        onPress={() => router.push("/(app)/reminderSetup")}
        title="I'm Commited"
      />
    </SafeAreaView>
  );
};

export default DailyGoals;

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
    paddingHorizontal: 10,
    height: 60,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
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
  goalsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
    gap: 10,
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
