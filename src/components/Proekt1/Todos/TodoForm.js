import React, { useState } from 'react';
import s from './TodoForm.module.css';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const onSubmitForm = event => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div>
      <form className={s.form} onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Enter you todo"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
