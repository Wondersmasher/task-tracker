import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Task } from "../../types";

interface Props {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem = ({ task, onToggle, onDelete }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onToggle(task.id)}
        style={styles.checkbox}
        activeOpacity={0.7}
      >
        <View
          style={[
            styles.checkboxInner,
            task.completed && styles.checkboxChecked,
          ]}
        >
          {task.completed && <Text style={styles.checkmark}>✓</Text>}
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onToggle(task.id)}
        style={styles.titleWrapper}
        activeOpacity={0.7}
      >
        <Text
          style={[styles.title, task.completed && styles.titleDone]}
          numberOfLines={2}
        >
          {task.title}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onDelete(task.id)}
        style={styles.deleteBtn}
        activeOpacity={0.7}
      >
        <Text style={styles.deleteIcon}>✕</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  checkbox: {
    marginRight: 12,
  },
  checkboxInner: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: "#6366F1",
    borderColor: "#6366F1",
  },
  checkmark: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    color: "#111827",
    fontWeight: "500",
  },
  titleDone: {
    color: "#9CA3AF",
    textDecorationLine: "line-through",
  },
  deleteBtn: {
    marginLeft: 10,
    padding: 4,
  },
  deleteIcon: {
    fontSize: 13,
    color: "#D1D5DB",
    fontWeight: "600",
  },
});
