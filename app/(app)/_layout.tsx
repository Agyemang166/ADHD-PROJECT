import { useEffect, useState } from "react";
import { auth } from "@/firebaseConfig";
import { router, Stack } from "expo-router";
import { View } from "react-native";
import { User } from "firebase/auth";

export default function AppLayout() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (!user) router.replace("/sign-in");
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
   console.log(user)
    if (!loading && !user) router.replace("/sign-in");
  }, [loading, user]);

  if (loading) return <View></View>;

  return <Stack screenOptions={{ headerShown: false }} />;
}
