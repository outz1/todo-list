import React from "react";

import { type Task } from "../models/task";
import Card from "../components/card";
import Text from "../components/text";
import InputCheckbox from "../components/input-checkbox";
import ButtonIcon from "../components/button-icon";
import { cx } from "class-variance-authority";

import TrashIcon from "../assets/icons/thrash.svg?react";
import CheckIcon from "../assets/icons/checked.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import InputText from "../components/input-text";

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = React.useState(task?.state === "creating");

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    setIsEditing(false);
  }

  return (
    <Card size={"md"} className="flex items-center gap-4">
      {!isEditing ? (
        <>
          
          <InputCheckbox
            value={task?.concluded?.toString()}
            checked={task?.concluded}
          />

          <Text className={cx("flex-1", {
            "line-through": task?.concluded
          })}>
            {task?.title}
            
          </Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant={"tertiary"} />
            <ButtonIcon
              icon={PencilIcon}
              variant={"tertiary"}
              onClick={handleEditTask}
            />
          </div>
        </>
      ) : (
        <>
          <InputText className="flex-1" />
          <div className="flex gap-1">
            <ButtonIcon
              icon={XIcon}
              variant={"secondary"}
              onClick={handleExitEditTask}
            />
            <ButtonIcon icon={CheckIcon} variant={"primary"} />
          </div>
        </>
      )}
    </Card>
  );
}
