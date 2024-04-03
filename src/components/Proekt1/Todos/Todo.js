import React from 'react';
import { RiTodoFill } from 'react-icons/ri';
import s from './Todo.module.css';

const Todo = ({ todo, index, deleteTodo }) => {
  console.log(todo);
  console.log(index);
  return (
    <div id={index} className={s.todo} onClick={() => deleteTodo(index)}>
      <RiTodoFill className={s.todoIcon} />
      <div className={s.todotext}>{todo}</div>
    </div>
  );
};

export default Todo;
