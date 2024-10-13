import { ElevatedButton } from "@/components/ElevatedButton";
import { OutlinedButton } from "@/components/OutlinedButton";
import { TextButton } from "@/components/TextButton";
import { TextField } from "@/components/TextField";
import { Styles } from "@/constants/Styles";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text style={[styles.h1, Styles.bottomGap4]}>Welcome back!</Text>
        <Text style={[styles.p, Styles.bottomGap1]}>
          Let's dive right back in 🚀!
        </Text>
        <TextField
          style={Styles.bottomGap2}
          label="Email address"
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextField
          style={Styles.bottomGap2}
          label="Your password"
          placeholder="Password"
          passwordRules={"minlength: 6;"}
          secureTextEntry={true}
        />
        <TextButton
          style={[styles.alignRight, Styles.bottomGap1]}
          title="Forgot password?"
        />
        <ElevatedButton style={Styles.bottomGap1} title="Next" />
        <Text style={[styles.h2, Styles.bottomGap3]}>or</Text>
        <OutlinedButton title="Continue with Google" />
        <View style={{flex: 1}}>
          <View style={styles.alignBottom}>
            <Text>Don't have an account?</Text>
            <Button title="Sign up" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  h1: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  h2: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  p: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  alignRight: {
    alignSelf: "flex-end",
  },
  alignBottom: {
    alignSelf: "flex-end",
  },
});
