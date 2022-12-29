import { useReducer } from "react";
import { v4 as uuid } from "uuid";

//* Interfaces
import { Task } from "interfaces/Task";

import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";

export interface TaskState {
  tasks: Task[];
}

const INITIAL_STATE: TaskState = {
  tasks: [],
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const TaskProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(taskReducer, INITIAL_STATE);

  const deleteTask = (id: string) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };

  const doTask = (id: string) => {
    dispatch({
      type: "DO_TASK",
      payload: id,
    });
  };

  //* Con uuid creamos una id aleatoria de forma automática
  const addTask = (task: Task) => {
    task.id = uuid();
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  };

  const handleUpdate = (id: string) => {
    dispatch({
      type: "SHOWUPD_TASK",
      payload: id,
    });
  };

  const updateTask = (task: Task) => {
    dispatch({
      type: "UPDATE_TASK",
      payload: task,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        ...state,

        //* Methods
        deleteTask,
        doTask,
        handleUpdate,
        addTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
