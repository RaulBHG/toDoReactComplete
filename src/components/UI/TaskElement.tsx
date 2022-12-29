//* Interfaces
import { FC, useContext, useMemo } from "react";

//* Interface
import { Task } from "../../interfaces/Task";

//* Styled-components
import {
  AlertButton,
  DoneButton,
  WarningButton,
} from "../../styles/components";

//* Context
import { TaskContext } from "../../context/TaskContext";

export const TaskElement: FC<Task> = ({ done, character, id, showUpdate }) => {
  const { deleteTask, doTask, handleUpdate } = useContext(TaskContext);

  const isDone = useMemo(() => done, [done, id]);

  return (
    <td>
      <div>
        <span style={{ textDecoration: isDone && "line-through " }}>
          {character}
        </span>
      </div>
      <div>
        <AlertButton onClick={() => deleteTask(id)}>Delete</AlertButton>
        <DoneButton onClick={() => doTask(id)}>
          {isDone ? "Not done" : "Done"}
        </DoneButton>
        <WarningButton onClick={() => handleUpdate(id)}>Update</WarningButton>
      </div>
    </td>
  );
};
