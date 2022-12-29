import { useContext } from "react";

//* Context
import { TaskContext } from "../../context/TaskContext";

//* Components
import { FormData, TaskElement } from "../UI";

//* Interface
import { Task } from "../../interfaces/Task";

export const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <table>
      <tbody>
        {tasks.map((task: Task) => (
          <tr key={task.id}>
            {!task.showUpdate ? (
              <TaskElement {...task} />
            ) : (
              <td>
                <FormData action="update" taskUpdated={task} />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
