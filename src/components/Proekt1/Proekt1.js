import React, { useState } from 'react';
import TodoForm from './Todos/TodoForm';
import TodoList from './Todos/TodoList';
const Proekt1 = () => {
  const [todos, setTodos] = useState([]);

  const handleChangeTodo = text => {
    setTodos([...todos, text]);
  };

  const deleteTodoHandler = index => {
    setTodos(todos.filter(todo => todo.index !== index));
  };
  return (
    <div>
      <h1>Todo APP 1</h1>
      <TodoForm addTodo={handleChangeTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
};

export default Proekt1;
