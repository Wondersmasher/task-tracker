import React from "react";
import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AddTaskInput } from "../../components/AddTaskInput";
import { EmptyState } from "../../components/EmptyState";
import { FilterBar } from "../../components/FilterBar";
import { TaskItem } from "../../components/TaskItem";
import { useTasks } from "../../hooks/useTasks";

export default function App() {
  const {
    filteredTasks,
    filter,
    setFilter,
    addTask,
    toggleTask,
    deleteTask,
    isLoading,
    counts,
  } = useTasks();

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle='dark-content' backgroundColor='#F9FAFB' />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Task Tracker</Text>
          <Text style={styles.subtitle}>
            {counts.active} task{counts.active !== 1 ? "s" : ""} remaining
          </Text>
        </View>

        <View style={styles.body}>
          <AddTaskInput onAdd={addTask} />
          <FilterBar filter={filter} counts={counts} onSelect={setFilter} />

          {isLoading ? (
            <ActivityIndicator style={styles.loader} color='#6366F1' />
          ) : (
            <FlatList
              data={filteredTasks}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TaskItem
                  task={item}
                  onToggle={toggleTask}
                  onDelete={deleteTask}
                />
              )}
              ListEmptyComponent={<EmptyState filter={filter} />}
              contentContainerStyle={
                filteredTasks.length === 0 ? styles.emptyList : undefined
              }
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps='handled'
            />
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  flex: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#111827",
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 2,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  loader: {
    marginTop: 40,
  },
  emptyList: {
    flex: 1,
  },
});
