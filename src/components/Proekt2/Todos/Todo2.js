import React from 'react';
import { RiDeleteBack2Line, RiTodoFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import s from './Todo2.module.css';

const Todo = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div className={`${s.todo} ${todo.isCompleted ? s.completedTodo : ''}`}>
      <RiTodoFill className={s.todoIcon} />
      <div className={s.todotext}>{todo.text}</div>
      <RiDeleteBack2Line
        className={s.deleteIcon}
        onClick={() => {
          deleteTodo(todo.id);
        }}
      />
      <FaCheck
        className={s.checkIcon}
        onClick={() => {
          toggleTodo(todo.id);
        }}
      />
    </div>
  );
};

export default Todo;
