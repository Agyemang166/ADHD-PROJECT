import { StyleSheet, TouchableOpacity } from "react-native";

import AngleLeft from "@/assets/icons/angle-left.svg";
import { router } from "expo-router";

export function BackButton() {
  return (
    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
      <AngleLeft width={15} height={15} fill="#58cc02" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    height: 40,
    width: 40,
    borderRadius: 5,
    borderColor: "rgba(95, 95, 95, 0.2)",
    borderWidth: 1.5,
    backgroundColor: "rgba(245, 245, 245, 1)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
