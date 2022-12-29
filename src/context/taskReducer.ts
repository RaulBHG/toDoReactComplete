import { TaskState } from "./TaskProvider";

//* Interface
import { Task } from "interfaces/Task";

type TaskAction =
  | {
      type: "ADD_TASK";
      payload: Task;
    }
  | {
      type: "DELETE_TASK";
      payload: string;
    }
  | {
      type: "SHOWUPD_TASK";
      payload: string;
    }
  | {
      type: "DO_TASK";
      payload: string;
    }
  | {
      type: "UPDATE_TASK";
      payload: Task;
    };

export const taskReducer = (
  state: TaskState,
  { type, payload }: TaskAction
): TaskState => {
  switch (type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task: Task) => task.id !== payload),
      };
    case "DO_TASK":
      const toggleDone = state.tasks.map((task: Task) => {
        if (task.id === payload) {
          return { ...task, done: !task.done };
        }
        return task;
      });
      return {
        ...state,
        tasks: toggleDone,
      };
    case "SHOWUPD_TASK":
      const toggleShowUpdate = state.tasks.map((task: Task) => {
        if (task.id === payload) {
          return { ...task, showUpdate: !task.showUpdate };
        }
        return task;
      });
      return {
        ...state,
        tasks: toggleShowUpdate,
      };
    case "UPDATE_TASK":
      const updateTask = state.tasks
        .map((task: Task) => {
          if (task.id === payload.id) return payload;
          return task;
        })
        .filter((task: Task) => task.id !== payload.id);
      return {
        ...state,
        tasks: [...updateTask, payload],
      };

    default:
      return state;
  }
};
