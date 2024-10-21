import { ComponentProps, ReactElement, useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type Props = ComponentProps<typeof TextInput>;

/**
 * @param validator - A string that represents the validation prompt to notify user of invalid inputs.
 * @param label - A string that represents the label of the text field.
 * @param prefix - A ReactElement that represents the prefix of the text field.
 * @param enabled - A boolean that represents if the text field is enabled.
 * @returns [TextField]
 */
export function TextField({
  prefix,
  enabled: enabled = true,
  validator,
  label,
  ...rest
}: {
  prefix?: ReactElement;
  enabled?: boolean;
  validator?: string | null;
  label: string;
} & Props) {
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    // If the text field is disabled, then it should not be focused.
    if (!enabled) setIsFocused(false);
  }, [enabled]);

  return (
    <View>
      <Pressable
        onPress={rest["onPress"] ?? enabled ? () => setIsFocused(true) : null}
      >
        <View
          style={[
            styles.textField,
            isFocused && styles.focusedTextField,
            validator != null && styles.errorTextField,
          ]}
        >
          {prefix && <View style={{ marginRight: 10 }}>{prefix}</View>}
          {(!isFocused && rest["value"] == "") || null ? (
            <Text style={styles.label}>{label}</Text>
          ) : (
            <TextInput
              autoFocus
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              selectionColor={validator != null ? "#ff0000" : "#58cc02"}
              {...rest}
              style={styles.textInput}
            />
          )}
        </View>
      </Pressable>
      {validator != null && (
        <Text style={styles.validationText}>{validator}</Text>
      )}
    </View>
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
  errorTextField: {
    borderColor: "#ff0000",
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
  validationText: {
    color: "#ff0000",
    fontSize: 12,
    fontFamily: "Poppins",
    marginTop: 5,
    marginLeft: 10,
  },
});
