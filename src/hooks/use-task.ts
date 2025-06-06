import React from "react";
import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type Task } from "../models/task";
import { delay } from "../helpers/utils";

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [isUpdatingTask, setIsUpdatatingTask] = React.useState(false);
  const [isDeletingTask, setIsDeletingTask] = React.useState(false);

  function prepareTask() {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(36).substring(2, 9),
        title: "",
        state: "creating",
      },
    ]);
  }

  async function updateTask(id: string, payload: { title: Task["title"] }) {
    setIsUpdatatingTask(true);

    await delay(1000);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, state: "created", ...payload } : task
      )
    );

    setIsUpdatatingTask(false);
  }

  function updateTaskStatus(id: string, concluded: boolean) {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, concluded } : task))
    );
  }

  async function deleteTask(id: string) {
    setIsDeletingTask(true);

    await delay(1000);
    setTasks(tasks.filter((task) => task.id !== id));

    setIsDeletingTask(false)
  }

  return {
    prepareTask,
    updateTask,
    updateTaskStatus,
    deleteTask,
    isUpdatingTask,
    isDeletingTask
  };
}
