import { useContext, useState } from 'react';
import { Input } from './styled/Input';
import { TaskContext } from './../context/TaskState';
import { DoneButton } from './styled/DoneButton';

const FormData = ({ action, taskUpdated }) => {
  const { tasks, addTask, updateTask } = useContext(TaskContext)

  const [task, setTask] = useState({
    id: '',
    personaje: (action == "update") ? taskUpdated.personaje : '',
    done: false,
    showUpdate: false
  });

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (action) {
      case "add":
        addTask(task)
        break;
      case "update":
        task.id = taskUpdated.id
        updateTask(task)
        break;
    
      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input defaultValue={ (action == "update") ? taskUpdated.personaje : "" } type='text' name='personaje' onChange={handleChange} placeholder='Name' required/>
      { (action != "update") ? <DoneButton>Add</DoneButton> : <DoneButton>Save</DoneButton> }
    </form>
  );
};

export default FormData;