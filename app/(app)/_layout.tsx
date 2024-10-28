import { useEffect, useState } from "react";
import { auth } from "@/firebaseConfig";
import { router, Stack } from "expo-router";
import { View } from "react-native";
import { User } from "firebase/auth";

export default function AppLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
