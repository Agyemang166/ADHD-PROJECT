import { StyleSheet } from "react-native";
import { Image } from "expo-image";
import { ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof Image>, "style"> & { style?: any };

export function Mascot({ style, ...props }: { style: any } & Props) {
  return (
    <Image
      style={[styles.mascot, style]}
      {...props}
      source="https://miro.medium.com/v2/resize:fit:1400/1*4i-icnegCm9D-DvHC_3BkQ.png"
      contentFit="cover"
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
