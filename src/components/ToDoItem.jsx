import React from 'react';

function ToDoItem(props) {
  return (
    <div className="todo flex w-[50vw] my-3 justify-between">
     <input 
        type="checkbox" 
        checked={props.todo.isCompleted} onChange={() => props.handleToggleCompletion(props.todo.id)} 
        className="mr-2"/>
    <div className={props.todo.isCompleted ? "line-through" : ""}>
        {props.todo.todo}
      </div>
    <div className="buttons flex space-x-2">
     <button onClick={() => props.handleEdit(props.todo.id)}
     className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1" >
     Edit
    </button>
   <button onClick={() => props.handleDelete(props.todo.id)}
    className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1" >
    Delete
    </button>
    </div>
    </div>
  );
}

export default ToDoItem;
