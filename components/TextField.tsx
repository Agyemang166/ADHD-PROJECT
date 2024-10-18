import { ComponentProps, ReactElement, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type Props = ComponentProps<typeof TextInput>;

export function TextField({
  prefix,
  label,
  ...rest
}: { prefix?: ReactElement; label: string } & Props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Pressable onPress={() => setIsFocused(true)}>
      <View style={[styles.textField, isFocused && styles.focusedTextField]}>
        {prefix && <View style={{ marginRight: 10 }}>{prefix}</View>}
        {!isFocused ? (
          <Text style={styles.label}>{label}</Text>
        ) : (
          <TextInput
            autoFocus
            selectionColor={"#58cc02"}
            {...rest}
            style={styles.textInput}
          />
        )}
        {/* <TextInput {...rest} /> */}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontFamily: "Poppins",
    color: "rgba(95, 95, 95, 1)",
  },
  focusedTextField: {
    borderColor: "#58cc02",
  },
  textField: {
    height: 50,
    borderRadius: 10,
    borderColor: "rgba(95, 95, 95, 0.2)",
    borderWidth: 1.5,
    width: "100%",
    backgroundColor: "rgba(245, 245, 245, 1)",
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    width: "100%",
    fontFamily: "Poppins",
  },
});
