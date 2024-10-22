import At from "@/assets/icons/at.svg";
import { BackButton } from "@/components/BackButton";
import { ElevatedButton } from "@/components/ElevatedButton";

import { TextField } from "@/components/TextField";
import { Styles } from "@/constants/Styles";
import { auth } from "@/firebaseConfig";
import { validateEmail } from "@/utils/functions";
import { Image } from "expo-image";
import { sendPasswordResetEmail } from "firebase/auth";
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

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailValidation, setEmailValidation] = useState<string | null>(null);

  function validateForm(): boolean {
    const emailValidation = validateEmail(email);

    setEmailValidation(emailValidation);

    return emailValidation == null;
  }

  const handleSendResetLink = async () => {
    try {
      setIsLoading(true);
      const isFormValid = validateForm();

      if (!isFormValid) return;

      await sendPasswordResetEmail(auth, email);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.alignLeft}>
          <BackButton />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollView}
          >
            <View>
              <Image
                style={styles.mascot}
                source="https://design.duolingo.com/1c5d3e18854a3be9141d.svg"
                contentFit="contain"
                transition={1000}
              />
              <View style={Styles.bottomGap2} />
              <Text style={styles.h1}>
                <Text style={styles.h1_bold}>Forgot</Text> password
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
              </KeyboardAvoidingView>
              <View style={Styles.bottomGap1} />
              <ElevatedButton
                loading={isLoading}
                title="Send reset link"
                onPress={handleSendResetLink}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  mascot: {
    marginTop: 30,
    marginBottom: 20,
    width: "100%",
    height: 160,
  },
  h1_bold: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
  },
  h1: {
    fontFamily: "Poppins",
    fontSize: 18,
  },
  alignLeft: {
    marginLeft: 20,
  },
});
