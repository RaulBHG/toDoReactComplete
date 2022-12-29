import {
  FC,
  useRef,
  useContext,
  useMemo,
  ChangeEvent,
  useState,
  FormEvent,
} from "react";

//* Styled-components
import { Input, DoneButton } from "../../styles/components";

//* Interfaces
import { Task } from "../../interfaces/Task";

//* Context
import { TaskContext } from "../../context/TaskContext";

type Actions = "add" | "update";

interface FormDataProps {
  action: Actions;
  taskUpdated?: Task;
}

export const FormData: FC<FormDataProps> = ({ action, taskUpdated }) => {
  const { addTask, updateTask } = useContext(TaskContext);

  //* Reset form with useRef
  const myForm = useRef<HTMLFormElement>(null);

  const isUpdating = useMemo(() => action === "update", [action]);

  const [task, setTask] = useState<Task>({
    id: "",
    character: isUpdating ? taskUpdated.character : "",
    done: false,
    showUpdate: false,
  });

  //* Esta sería otra manera igual de valida que la tuya pero una manera más legible
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isUpdating) {
      task.id = taskUpdated.id;
      updateTask(task);
      return;
    }

    addTask(task);
    myForm.current?.reset();
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, [target.name]: target.value });
  };

  return (
    <form ref={myForm} onSubmit={handleSubmit}>
      <Input
        defaultValue={isUpdating ? taskUpdated.character : ""}
        type="text"
        name="character"
        onChange={handleChange}
        placeholder="Name"
        required
      />

      {/* Utilizamos useMemo para gestionar de una manera más óptima */}
      <DoneButton>{isUpdating ? "Save" : "Add"}</DoneButton>
    </form>
  );
};
