import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FilterType } from "../../types";

const MESSAGES: Record<
  FilterType,
  { emoji: string; heading: string; sub: string }
> = {
  all: {
    emoji: "📋",
    heading: "No tasks yet",
    sub: "Add your first task above to get started.",
  },
  active: {
    emoji: "🎉",
    heading: "All caught up!",
    sub: "No active tasks remaining.",
  },
  completed: {
    emoji: "⏳",
    heading: "Nothing completed yet",
    sub: "Complete a task and it will show up here.",
  },
};

export const EmptyState = ({ filter }: { filter: FilterType }) => {
  const { emoji, heading, sub } = MESSAGES[filter];
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.sub}>{sub}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 60,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 14,
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    color: "#374151",
    marginBottom: 6,
  },
  sub: {
    fontSize: 14,
    color: "#9CA3AF",
    textAlign: "center",
    maxWidth: 220,
  },
});
