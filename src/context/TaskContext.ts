import { createContext } from "react";

//* Interfaces
import { Task } from "interfaces/Task";

interface TaskContextProps {
  tasks: Task[];

  //* Methods
  deleteTask(id: string): void;
  doTask(id: string): void;
  handleUpdate(id: string): void;
  addTask(task: Task): void;
  updateTask(task: Task): void;
}

export const TaskContext = createContext<TaskContextProps>(
  {} as TaskContextProps
);
