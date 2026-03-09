import AsyncStorage from "@react-native-async-storage/async-storage";
import { Task } from "@/types";

const TASKS_KEY = "task-tracker-key";

export async function loadTasks(): Promise<Task[]> {
  const raw = await AsyncStorage.getItem(TASKS_KEY);
  return raw ? JSON.parse(raw) : [];
}

export async function saveTasks(tasks: Task[]): Promise<void> {
  try {
    await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.log(`Error saving tasks: ${error}`);
  }
}
