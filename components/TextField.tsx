import { Styles } from "@/constants/Styles";
import { ComponentProps } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

type Props = ComponentProps<typeof TextInput>;

export function TextField({ label, ...rest }: { label: string } & Props) {
  return (
    <View style={rest["style"]}>
      <Text style={[styles.label, Styles.bottomGap3]}>{label}</Text>
      <TextInput
        {...rest}
        style={styles.textField}
        placeholderTextColor={styles.placeholder.color}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: "400",
  },
  textField: {
    height: 55,
    width: "100%",
    backgroundColor: "rgba(243, 243, 243, 1)",
    paddingHorizontal: 15,
  },
  placeholder: {
    color: "rgba(95, 95, 95, 1)",
  },
});
