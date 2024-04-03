import Button from 'UI/Button';
import React from 'react';
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';

const TodosActions = ({ resetTodos, deleteTodos }) => {
  return (
    <div>
      <Button title="Reset" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button title="Delete todos" onClick={deleteTodos}>
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
};

export default TodosActions;
