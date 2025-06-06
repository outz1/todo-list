import React from "react";
import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type Task } from "../models/task";
import { delay } from "../helpers/utils";

export default function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [isLoadingTasks, setIsLoadingTasks] = React.useState(true);

  async function fetchTasks() {
    if (isLoadingTasks) {
      await delay(2000);
      setIsLoadingTasks(false);
    }

    setTasks(tasksData);
  }

  React.useEffect(() => {
    fetchTasks();
  }, [tasksData]);

  return {
    tasks,
    tasksCount: tasks.filter((task) => task.state === "created").length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
    isLoadingTasks,
  };
}
