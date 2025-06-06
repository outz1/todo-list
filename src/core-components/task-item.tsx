import React from "react";

import { type Task } from "../models/task";
import Card from "../components/card";
import Text from "../components/text";
import InputCheckbox from "../components/input-checkbox";
import ButtonIcon from "../components/button-icon";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-task";

import TrashIcon from "../assets/icons/thrash.svg?react";
import CheckIcon from "../assets/icons/checked.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import InputText from "../components/input-text";
import Skeleton from "../components/skeleton";

interface TaskItemProps {
  loading?: boolean;
  task: Task;
}

export default function TaskItem({ task, loading }: TaskItemProps) {
  const [isEditing, setIsEditing] = React.useState(task?.state === "creating");

  const {
    updateTask,
    updateTaskStatus,
    deleteTask,
    isUpdatingTask,
    isDeletingTask,
  } = useTask();

  const [taskTitle, setTaskTitle] = React.useState(task.title || "");

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    if (task.state === "creating") {
      deleteTask(task.id);
    }

    setIsEditing(false);
  }

  async function handleClickDeleteTask() {
    await deleteTask(task.id);
  }

  function handleChangeStatus(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;

    updateTaskStatus(task.id, checked);
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || "");
  }

  async function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await updateTask(task.id, { title: taskTitle });

    setIsEditing(false);
  }

  return (
    <Card size={"md"}>
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            checked={task?.concluded}
            onChange={handleChangeStatus}
            loading={loading}
          />
          {!loading ? (
            <Text
              className={cx("flex-1", {
                "line-through": task?.concluded,
              })}
            >
              {task?.title}
            </Text>
          ) : (
            <Skeleton className="flex-1 h-6" />
          )}
          <div className="flex gap-1">
            <ButtonIcon
              icon={TrashIcon}
              variant={"tertiary"}
              onClick={handleClickDeleteTask}
              loading={loading}
              handling={isDeletingTask}
            />
            <ButtonIcon
              icon={PencilIcon}
              variant={"tertiary"}
              onClick={handleEditTask}
              loading={loading}
            />
          </div>
        </div>
      ) : (
        <form className="flex items-center gap-4" onSubmit={handleSaveTask}>
          <InputText
            value={taskTitle}
            className="flex-1"
            onChange={handleChangeTaskTitle}
            required
            autoFocus
          />
          <div className="flex gap-1">
            <ButtonIcon
              type="button"
              icon={XIcon}
              variant={"secondary"}
              onClick={handleExitEditTask}
            />
            <ButtonIcon
              type="submit"
              icon={CheckIcon}
              variant={"primary"}
              handling={isUpdatingTask}
            />
          </div>
        </form>
      )}
    </Card>
  );
}
