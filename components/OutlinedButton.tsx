import { ComponentProps } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = Omit<ComponentProps<typeof Pressable>, "title"> & {
  title: string;
};

export function OutlinedButton({ title, ...props }: { title: string } & Props) {
  return (
    <Pressable {...props} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderColor: "rgba(60, 60, 67, 0.18)",
    borderWidth: 1,
    borderRadius: 50,
    height: 50,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
});
