import { ComponentProps } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = Omit<ComponentProps<typeof Pressable>, "title"> & {
  title: string;
};

export function TextButton({ title, ...props }: { title: string } & Props) {
  return (
    <Pressable {...props}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "rgba(246, 122, 39, 1)",
    fontSize: 16,
    fontWeight: "500",
  },
});
