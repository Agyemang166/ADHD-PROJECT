import { ComponentProps } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = Omit<ComponentProps<typeof Pressable>, "title"> & {
  title: string;
};

export function ElevatedButton({ title, ...props }: { title: string } & Props) {
  return (
    <Pressable
      {...props}
      style={[
        styles.button,
        typeof props.style === "function"
          ? props.style({ pressed: false })
          : props.style,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "rgba(246, 122, 39, 1)",
    borderRadius: 6,
    height: 50,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
});
