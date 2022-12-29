import { useContext } from 'react'
import { TaskContext } from '../context/TaskState'
import { AlertButton } from './styled/AlertButton'
import { DoneButton } from './styled/DoneButton'
import FormData from './FormData';
import { WarningButton } from './styled/WarningButton';

const TaskList = () => {
  const { tasks, deleteTask, doTask, showUpdate } = useContext(TaskContext)
  
  return (
    <div>
      <table>
        <tbody>
        {/* <TaskElement 
              key={ task.id }
              id={ task.id }
              personaje={ task.personaje }
              done={ task.done }
            /> */}
          {tasks.map((task) => (
            <tr key={ task.id }>  
              { 
                (task.showUpdate != true) ?
                 <td>{ task.personaje }</td> 
                 : 
                 <td><FormData action='update' taskUpdated={ task }></FormData></td>
              }        
              
              { (task.showUpdate != true) ?
                  <td>
                  <AlertButton
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </AlertButton>
                  <DoneButton
                    onClick={() => doTask(task.id)}
                  >
                    { (task.done != true) ? 'Not Done' : 'Done' }
                  </DoneButton>
                  <WarningButton
                    onClick={() => showUpdate(task.id)}
                  >
                    Update                  
                  </WarningButton>
                </td> 
                :
                ""               
              }
              
            </tr>
          ))}
        </tbody>
      </table>
      <FormData action='add'></FormData>
    </div>
  )  
};

export default TaskList;