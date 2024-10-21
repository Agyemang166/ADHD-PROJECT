import { auth } from "@/firebaseConfig";
import { router } from "expo-router";
import { signOut } from "firebase/auth";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        onPress={async () => {
          console.log("entered sign out functions");
          signOut(auth)
          .then((result) => {
              console.log(result);
              console.log(auth.currentUser?.email);
            })
            .catch((e) => {
              console.log(e);
            });
        }}
      >
        Sign Out
      </Text>
    </View>
  );
}
