import At from "@/assets/icons/at";
import Lock from "@/assets/icons/lock.svg";
import { ElevatedButton } from "@/components/ElevatedButton";

import { TextField } from "@/components/TextField";
import { Styles } from "@/constants/Styles";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen() {
  const federatedProviders: FederatedProviderProps[] = [
    { image: require("@/assets/images/google.png") },
    { image: require("@/assets/images/facebook.png") },
    { image: require("@/assets/images/apple-logo.png") },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Image
          style={styles.mascot}
          source="https://miro.medium.com/v2/resize:fit:1400/1*4i-icnegCm9D-DvHC_3BkQ.png"
          contentFit="cover"
          transition={1000}
        />
        <View style={Styles.bottomGap2} />
        <Text style={styles.h1}>
          <Text style={styles.h1_bold}>Login</Text> to your account
        </Text>
        <View style={Styles.bottomGap2} />
        <TextField
          prefix={<At height={20} width={20} fill={"#58cc02"} />}
          label="Email address"
          keyboardType="email-address"
        />
        <View style={Styles.bottomGap3} />
        <TextField
          prefix={<Lock height={20} width={20} fill={"#58cc02"} />}
          label="Password"
          secureTextEntry={true}
        />
        <View style={Styles.bottomGap2} />
        <Text style={[styles.alignRight, styles.label]}>Forgot password?</Text>
        <View style={Styles.bottomGap1} />
        <ElevatedButton title="Next" />
        <View style={Styles.bottomGap3} />
        <Text style={[styles.center, styles.p]}>
          Don't have an account?{" "}
          <Text style={[styles.label, { color: "#58cc02" }]}>Signup</Text>
        </Text>
      </View>
      <View style={Styles.bottomGap3} />
      <View>
        <Text style={[styles.center, styles.p]}>
          <Text style={[styles.label]}>- </Text>
          Or sign in with
          <Text style={[styles.label]}> -</Text>
        </Text>
        <View style={Styles.bottomGap2} />
        <View style={styles.providersRow}>
          {federatedProviders.map((provider, index) => (
            <View style={styles.federatedProvider}>
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
  );
}

interface FederatedProviderProps {
  image: string;
}

const styles = StyleSheet.create({
  safeArea: {
    marginHorizontal: 20,
    marginTop: 20,
    flex: 1,
    justifyContent: "space-between",
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
    // fontWeight: 'bold',
    fontSize: 18,
  },
  h1: {
    fontFamily: "Poppins",
    fontSize: 18,
  },
  h2: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
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
