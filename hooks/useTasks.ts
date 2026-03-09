import { useState, useEffect, useCallback } from 'react';
import { Task, FilterType } from '../types';
import { loadTasks, saveTasks } from '../utils/storage';

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadTasks()
      .then(setTasks)
      .finally(() => setIsLoading(false));
  }, []);

  const persist = useCallback((updated: Task[]) => {
    setTasks(updated);
    saveTasks(updated);
  }, []);

  const addTask = useCallback(
    (title: string) => {
      const trimmed = title.trim();
      if (!trimmed) return;
      const task: Task = {
        id: generateId(),
        title: trimmed,
        completed: false,
        createdAt: Date.now(),
      };
      persist([task, ...tasks]);
    },
    [tasks, persist]
  );

  const toggleTask = useCallback(
    (id: string) => {
      persist(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
    },
    [tasks, persist]
  );

  const deleteTask = useCallback(
    (id: string) => {
      persist(tasks.filter((t) => t.id !== id));
    },
    [tasks, persist]
  );

  const filteredTasks = tasks.filter((t) => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const counts = {
    all: tasks.length,
    active: tasks.filter((t) => !t.completed).length,
    completed: tasks.filter((t) => t.completed).length,
  };

  return { filteredTasks, filter, setFilter, addTask, toggleTask, deleteTask, isLoading, counts };
}
