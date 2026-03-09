import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  onAdd: (title: string) => void;
}

export const AddTaskInput = ({ onAdd }: Props) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!value.trim()) {
      setError(true);
      return;
    }
    onAdd(value);
    setValue("");
    setError(false);
  };

  return (
    <View style={styles.wrapper}>
      <View style={[styles.inputRow, error && styles.inputRowError]}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={(text) => {
            setValue(text);
            if (error && text.trim()) setError(false);
          }}
          placeholder='Add a new task…'
          placeholderTextColor='#9CA3AF'
          onSubmitEditing={handleSubmit}
          returnKeyType='done'
          maxLength={200}
        />
        <TouchableOpacity
          onPress={handleSubmit}
          style={styles.addBtn}
          activeOpacity={0.8}
        >
          <Text style={styles.addBtnText}>Add</Text>
        </TouchableOpacity>
      </View>
      {error && (
        <Text style={styles.errorText}>Task name cannot be empty.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    overflow: "hidden",
  },
  inputRowError: {
    borderColor: "#F87171",
  },
  input: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontSize: 15,
    color: "#111827",
  },
  addBtn: {
    backgroundColor: "#6366F1",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  addBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
  errorText: {
    marginTop: 6,
    marginLeft: 4,
    fontSize: 12,
    color: "#EF4444",
  },
});
