import LottieView from "lottie-react-native";

export function LoadingIndicator() {
  return (
    <LottieView
      autoPlay={true}
      loop
      style={{
        width: 30,
        height: 30,
      }}
      source={require("@/assets/animations/loading.json")}
    />
  );
}