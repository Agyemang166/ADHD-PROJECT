import { ComponentProps } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import { LoadingIndicator } from "./LoadingIndicator";

type Props = Omit<ComponentProps<typeof TouchableOpacity>, "title"> & {
  title: string;
};

export function ElevatedButton({
  loading,
  title,
  ...props
}: { loading?: boolean; title: string } & Props) {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.button, props.style, loading && styles.disabled_button]}
    >
      {loading ? (
        <LoadingIndicator />
      ) : (
        <Text style={[styles.text, loading && styles.disabled_text]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#58cc02",
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
  },
  disabled_button: {
    backgroundColor: "#e1e1e1",
  },
  text: {
    fontFamily: "Poppins-SemiBold",
    color: "white",
    fontSize: 16,
  },
  disabled_text: {
    color: "grey",
  },
});
