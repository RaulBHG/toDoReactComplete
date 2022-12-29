import React from 'react';

const TaskElement = ( personaje, id ) => {
  return (
    <tr key={ id }>
      <td>{ personaje }</td>
      <td>
        <button
          onClick={() => deleteTask(id)}
        >
          Delete
        </button>
        <button
          onClick={() => doTask(id)}
        >
          { (task.done != true) ? 'Not Done' : 'Done' }
        </button>
      </td>
    </tr>
  );
};

export default TaskElement;