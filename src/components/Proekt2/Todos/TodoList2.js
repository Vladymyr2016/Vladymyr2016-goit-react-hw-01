import React from 'react';
import Todo from './Todo2';

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div>
      {!todos.length && <h2> Todos is empty</h2>}
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
