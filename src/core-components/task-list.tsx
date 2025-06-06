import Button from "../components/button";
import PlusIcon from "../assets/icons/plus.svg?react";
import TaskItem from "./task-item";
import useTasks from "../hooks/use-tasks";
import useTask from "../hooks/use-task";
import type { Task } from "../models/task";

export default function TaskList() {
  const { tasks, isLoadingTasks } = useTasks();
  const { prepareTask } = useTask();

  function handleNewTask() {
    prepareTask();
  }

  return (
    <>
      <section>
        <Button
          icon={PlusIcon}
          className="w-full"
          disabled={tasks.some((task) => task.state === "creating")}
          onClick={handleNewTask}
        >
          Nova Tarefa
        </Button>
      </section>

      <section className="space-y-2">
        {!isLoadingTasks && tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
        {isLoadingTasks && <>
          <TaskItem task={{} as Task} loading/>
          <TaskItem task={{} as Task} loading/>
          <TaskItem task={{} as Task} loading/>
          
        </>}
      </section>
    </>
  );
}
