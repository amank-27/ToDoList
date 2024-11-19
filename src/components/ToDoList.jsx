import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList() {
  const [todo, setTodo] = useState(""); 
  const [todos, setTodos] = useState([]); 
const handleAdd = () => {
    if (todo.trim()) {
      setTodos([...todos, { id: Date.now(), todo, isCompleted: false }]);
      setTodo(""); 
    }
  };
const handleChange = (e) => {
    setTodo(e.target.value);
  };

const handleEdit = (id) => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, todo: prompt("Edit your task:", item.todo) } : item
    );
    setTodos(updatedTodos);
  };
const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
const handleToggleCompletion = (id) => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(updatedTodos);
  };

  return (
    <>
     <div className="addTodo my-5 ">
     <h2 className="text-lg font-bold flex justify-center text-purple-700  hover:font-extrabold transition-all ">ADD A TASK</h2>
     <div className='wrapper flex justify-center'>
     <input onChange={handleChange}  value={todo}  type="text"  className="w-[50vw] rounded-md border-8  "/>
     <button onClick={handleAdd} 
    className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6">
    ADD
    </button>
    </div>
    </div>
      <h2 className="text-lg font-bold flex justify-center  text-purple-700 hover:font-extrabold transition-all">YOUR TASKS</h2>
    <div className="todos flex justify-center items-center flex-col  text-purple-700 hover:font-extrabold transition-all">
     {todos.map((item) => (
    <ToDoItem 
            key={item.id} 
            todo={item} 
            handleEdit={handleEdit} 
            handleDelete={handleDelete} 
            handleToggleCompletion={handleToggleCompletion} />
        ))}
      </div>
    </>
  );
}

export default ToDoList;
