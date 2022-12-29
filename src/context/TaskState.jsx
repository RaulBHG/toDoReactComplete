import { createContext, useReducer } from "react"
import taskReducer from './TaskReducer';


const dataTask = {
  tasks: [
    { id: 0, personaje: "Naruto", done: false, showUpdate: false },
    { id: 1, personaje: "Goku", done: false, showUpdate: false },
    { id: 2, personaje: "Kenshin Himura", done: false, showUpdate: false },
    { id: 3, personaje: "Monkey D. Luffy", done: false, showUpdate: false },
    { id: 4, personaje: "Edward Elric", done: false, showUpdate: false },
    { id: 5, personaje: "Seto Kaiba", done: false, showUpdate: false },
  ]
};

export const TaskContext = createContext(dataTask)

export const TaskProvider = ({ children }) => {

  const [state, dispatch] = useReducer(taskReducer, dataTask)

  function deleteTask(id) {
    dispatch({
      type: 'DELETE_TASK',
      payload: id
    } )
  }

  function doTask(id) {
    dispatch({
      type: 'DO_TASK',
      payload: id
    } )
  }

  function addTask(task) {
    dispatch({
      type: 'ADD_TASK',
      payload: { ...task, id: (state.tasks[state.tasks.length - 1].id + 1), showUpdate: false }
    } )
  }

  function showUpdate(id) {
    dispatch({
      type: 'SHOWUPD_TASK',
      payload: id
    } )
   
  }

  function updateTask(task) {
    dispatch({
      type: 'UPDATE_TASK',
      payload: task
    } )
  }
  

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        deleteTask,
        doTask,
        addTask,
        showUpdate,
        updateTask,
      }}
    >      
      {children}
    </TaskContext.Provider>
  );
};

