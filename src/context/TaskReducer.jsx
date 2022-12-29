
const taskReducer = (state, action) => {
  switch (action.type) {    
    case "ADD_TASK":
      console.log(action.payload)
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload)
      }
    case "DO_TASK":
      const toggleDone = state.tasks.map((task) => {
        if(task.id === action.payload){
          return { ...task, done: !task.done }
        }
        return task
      })
      return {
        ...state,
        tasks: toggleDone
      }

    case "SHOWUPD_TASK":
      const toggleShowUpdate = state.tasks.map((task) => {
        if(task.id === action.payload){
          return { ...task, showUpdate: !task.showUpdate }
        }
        return task
      })
      return {
        ...state,
        tasks: toggleShowUpdate
      }

    case "UPDATE_TASK":
      const updatedTask = state.tasks.map((task) => {
        if(task.id === action.payload.id){
          return { ...task, personaje: action.payload.personaje, showUpdate: false }
        }
        return task
      })
      return {
        ...state,
        tasks: updatedTask
      }
  
    default:
      return state      
  }
};

export default taskReducer;

