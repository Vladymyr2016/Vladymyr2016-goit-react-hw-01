import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList2';
import TodoForm from './TodoForm2';
import TodosActions from './TodosActions';

const Proekt2 = () => {
  const [todos, setTodos] = useState([]);

  const handleChangeTodo = text => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodoHandler = id => {
    setTodos(
      todos.map(todo => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodo = () => {
    setTodos(todos.filter(todo => !todo.isCompleted));
  };

  return (
    <div>
      <h1>Todo APP 2</h1>
      <TodoForm addTodo={handleChangeTodo} />
      {!!todos.length && (
        <TodosActions
          resetTodos={resetTodosHandler}
          deleteTodos={deleteCompletedTodo}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
    </div>
  );
};

export default Proekt2;
