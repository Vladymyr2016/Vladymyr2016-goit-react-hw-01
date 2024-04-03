import React from 'react';
import { useState } from 'react';
import s from './InputForm.module.css';

const InputForm = () => {
  const [data, setData] = useState({ username: '', password: '' });

  function handlFormSubmit(event) {
    event.preventDefault();
    console.log(data);
  }

  // const handleChangeUsername = e => {
  //   setData({ ...data, username: e.target.value });
  // };

  // const handleChangePassword = e => {
  //   setData({ ...data, password: e.target.value });
  // };

  const handleChangeInput = (e, name) => {
    setData({ ...data, [name]: e.target.value });
  };

  return (
    <>
      <h1>Login Form</h1>
      <div>
        <form onSubmit={handlFormSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={data.username}
              onChange={e => handleChangeInput(e, 'username')}
              name="username"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={data.password}
              onChange={e => handleChangeInput(e, 'password')}
              name="password"
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default InputForm;
