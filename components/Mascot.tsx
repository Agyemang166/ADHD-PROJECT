import { StyleSheet } from "react-native";
import { Image } from "expo-image";
import { ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof Image>, "style"> & { style?: any };

export function Mascot({ style, ...props }: { style?: any } & Props) {
  return (
    <Image
      style={[styles.mascot, style]}
      {...props}
      source="https://design.duolingo.com/e69974f04b05dcf07f2a.svg"
      contentFit="contain"
      transition={1000}
    />
  );
}

const styles = StyleSheet.create({
  mascot: {
    width: "100%",
    height: 160,
    objectFit: "contain",
  },
});
