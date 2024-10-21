import { Text } from "react-native";
import { Redirect, Stack } from "expo-router";

import { useSession } from "../../ctx";

export default function AppLayout() {
  const { session, isLoading } = useSession();


  return <Stack />;
}
