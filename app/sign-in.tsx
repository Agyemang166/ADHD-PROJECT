import At from "@/assets/icons/at.svg";
import Lock from "@/assets/icons/lock.svg";
import { ElevatedButton } from "@/components/ElevatedButton";
import { Mascot } from "@/components/Mascot";

import { TextField } from "@/components/TextField";
import { Styles } from "@/constants/Styles";
import { auth } from "@/firebaseConfig";
import { validateEmail, validatePassword } from "@/utils/functions";
import { Image } from "expo-image";
import { router } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailValidation, setEmailValidation] = useState<string | null>(null);
  const [passwordValidation, setPasswordValidation] = useState<string | null>(
    null
  );

  function validateForm(): boolean {
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    setEmailValidation(emailValidation);
    setPasswordValidation(passwordValidation);

    return emailValidation == null && passwordValidation == null;
  }

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      const isFormValid = validateForm();

      if (!isFormValid) return;

      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const federatedProviders: FederatedProviderProps[] = [
    { image: require("@/assets/images/google.png") },
    { image: require("@/assets/images/facebook.png") },
    { image: require("@/assets/images/apple-logo.png") },
  ];

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >
          <SafeAreaView style={styles.container}>
            <View>
              <Mascot style={styles.mascot} />
              <View style={Styles.bottomGap2} />
              <Text style={styles.h1}>
                <Text style={styles.h1_bold}>Login</Text> to your account
              </Text>

              <View style={Styles.bottomGap2} />

              <KeyboardAvoidingView>
                <TextField
                  prefix={
                    <At
                      height={20}
                      width={20}
                      fill={isLoading ? "#a1a1a1" : "#58cc02"}
                    />
                  }
                  enabled={!isLoading}
                  validator={emailValidation}
                  label="Email address"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChange={(text) => setEmail(text.nativeEvent.text)}
                />
                <View style={Styles.bottomGap3} />
                <TextField
                  prefix={
                    <Lock
                      height={20}
                      width={20}
                      fill={isLoading ? "#a1a1a1" : "#58cc02"}
                    />
                  }
                  enabled={!isLoading}
                  validator={passwordValidation}
                  label="Password"
                  value={password}
                  onChange={(text) => setPassword(text.nativeEvent.text)}
                  secureTextEntry={true}
                />
              </KeyboardAvoidingView>
              <View style={Styles.bottomGap2} />
              <Text
                onPress={() => router.push("/forgot-password")}
                style={[styles.alignRight, styles.label]}
              >
                Forgot password?
              </Text>
              <View style={Styles.bottomGap1} />
              <ElevatedButton
                loading={isLoading}
                title="Next"
                onPress={handleSignIn}
              />
              <View style={Styles.bottomGap3} />
              <Text style={[styles.center, styles.p]}>
                Don't have an account?{" "}
                <Text
                  onPress={() => router.push("/sign-up")}
                  style={[styles.label, { color: "#58cc02" }]}
                >
                  Signup
                </Text>
              </Text>
            </View>
            <View style={Styles.bottomGap1} />
            <View>
              <Text style={[styles.center, styles.p]}>
                <Text style={[styles.label]}>- </Text>
                Or sign in with
                <Text style={[styles.label]}> -</Text>
              </Text>
              <View style={Styles.bottomGap2} />
              <View style={styles.providersRow}>
                {federatedProviders.map((provider, index) => (
                  <View style={styles.federatedProvider} key={index}>
                    <Image
                      key={index}
                      source={provider.image}
                      style={{ height: 25, width: 25 }}
                      contentFit="cover"
                      transition={1000}
                    />
                  </View>
                ))}
              </View>
              <View style={Styles.bottomGap1} />
            </View>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

export interface FederatedProviderProps {
  image: string;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  mascot: {
    marginTop: 30,
    marginBottom: 20,
    width: "100%",
    height: 160,
    objectFit: "contain",
  },
  h1_bold: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
  },
  h1: {
    fontFamily: "Poppins",
    fontSize: 18,
  },
  label: {
    fontFamily: "Poppins-SemiBold",
  },
  p: {
    fontFamily: "Poppins",
  },
  center: {
    alignSelf: "center",
  },
  alignRight: {
    alignSelf: "flex-end",
  },
  alignBottom: {
    alignSelf: "flex-end",
  },
  federatedProvider: {
    borderWidth: 1.5,
    borderColor: "rgba(95, 95, 95, 0.2)",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    alignContent: "center",
  },
  providersRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
