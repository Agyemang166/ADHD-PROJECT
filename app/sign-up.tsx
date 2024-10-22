import At from "@/assets/icons/at.svg";
import Dob from "@/assets/icons/dob.svg";
import IdCard from "@/assets/icons/id-card.svg";
import Lock from "@/assets/icons/lock.svg";
import { ElevatedButton } from "@/components/ElevatedButton";
import { Mascot } from "@/components/Mascot";
import { TextField } from "@/components/TextField";
import { Styles } from "@/constants/Styles";
import {
  createUser,
  signInWithGoogle,
} from "@/databases/remote_databases/authentication";
import { User } from "@/entities/user";
import { auth } from "@/firebaseConfig";
import {
  validateAge,
  validateEmail,
  validateName,
  validatePassword,
} from "@/utils/functions";
import { router } from "expo-router";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { BackButton } from "@/components/BackButton";

export default function SignUpScreen() {
  /// State management for form fields.
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /// State management for validation messages.
  const [nameValidation, setNameValidation] = useState<string | null>(null);
  const [ageValidation, setAgeValidation] = useState<string | null>(null);
  const [emailValidation, setEmailValidation] = useState<string | null>(null);
  const [passwordValidation, setPasswordValidation] = useState<string | null>(
    null
  );

  const [isLoading, setIsLoading] = useState(false);

  function validateForm(): boolean {
    const nameValidation = validateName(name);
    const ageValidation = validateAge(age);
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    setNameValidation(nameValidation);
    setAgeValidation(ageValidation);
    setEmailValidation(emailValidation);
    setPasswordValidation(passwordValidation);

    return (
      nameValidation == null &&
      ageValidation == null &&
      emailValidation == null &&
      passwordValidation == null
    );
  }

  const handleSignUp = async () => {
    try {
      setIsLoading(true);
      const isFormValid = validateForm();

      if (!isFormValid) return;

      await createUserWithEmailAndPassword(auth, email, password).then(
        async (credentials) => {
          const user: User = {
            id: credentials.user.uid,
            name,
            email,
            age: age!,
            createdOn: new Date(),
            updatedOn: new Date(),
          };

          await updateProfile(auth.currentUser!, { displayName: name });
          console.log(auth.currentUser);
          await createUser(user);
          console.log("User created", user);
        }
      );
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const federatedProviders = [
    { image: require("@/assets/images/google.png") },
    { image: require("@/assets/images/facebook.png") },
    { image: require("@/assets/images/apple-logo.png") },
  ];

  const prefixFill = isLoading ? "#a1a1a1" : "#58cc02";
  const prefixSize = 20;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
          <View style={styles.alignLeft}>
            <BackButton />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
          <Mascot style={styles.mascot} />
          <View style={Styles.bottomGap2} />
          <Text style={styles.h1}>
            <Text style={styles.h1_bold}>Create</Text> your account
          </Text>
          <View style={Styles.bottomGap2} />

          <TextField
            prefix={
              <IdCard
                height={prefixSize}
                width={prefixSize}
                fill={prefixFill}
              />
            }
            enabled={!isLoading}
            validator={nameValidation}
            label="Full name"
            autoCapitalize="words"
            value={name}
            onChange={(text) => setName(text.nativeEvent.text)}
          />
          <View style={Styles.bottomGap3} />

          <TextField
            prefix={
              <Dob height={prefixSize} width={prefixSize} fill={prefixFill} />
            }
            enabled={!isLoading}
            validator={ageValidation}
            label="Age"
            keyboardType="number-pad"
            value={age ? age.toString() : ""}
            onChange={(text) => setAge(parseInt(text.nativeEvent.text))}
          />
          <View style={Styles.bottomGap3} />

          <TextField
            prefix={
              <At height={prefixSize} width={prefixSize} fill={prefixFill} />
            }
            enabled={!isLoading}
            validator={emailValidation}
            label="Email address"
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChange={(text) => setEmail(text.nativeEvent.text)}
          />
          <View style={Styles.bottomGap3} />

          <TextField
            prefix={
              <Lock height={prefixSize} width={prefixSize} fill={prefixFill} />
            }
            enabled={!isLoading}
            validator={passwordValidation}
            label="Password"
            value={password}
            onChange={(text) => setPassword(text.nativeEvent.text)}
            secureTextEntry={true}
          />
          <View style={Styles.bottomGap1} />

          <ElevatedButton
            loading={isLoading}
            title="Continue"
            onPress={handleSignUp}
          />
          <View style={Styles.bottomGap3} />

          <Text style={[styles.center, styles.p]}>
            Already have an account?{" "}
            <Text
              onPress={() => router.back()}
              style={[styles.label, { color: "#58cc02" }]}
            >
              Sign in
            </Text>
          </Text>
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
                  <Pressable
                    onPress={async function () {
                      try {
                        console.log("Sign in with", provider);
                        await signInWithGoogle();
                      } catch (e) {
                        console.error(e);
                      }
                    }}
                  >
                    <Image
                      key={index}
                      source={provider.image}
                      style={{ height: 25, width: 25 }}
                      contentFit="cover"
                      transition={1000}
                    />
                  </Pressable>
                </View>
              ))}
            </View>
            <View style={Styles.bottomGap2} />
          </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  mascot: {
    marginTop: 30,
    marginBottom: 20,
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
  alignLeft: {
    alignSelf: "flex-start",
  },
});
