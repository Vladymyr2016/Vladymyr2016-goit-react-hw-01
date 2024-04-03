import React, { useState } from 'react';
import Counter from 'components/Counter/Counter';
import Button from 'components/Button/Button';

const Wrapper = props => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <Counter number={count} />
      <Button onClick={increment} text="Click plus" />
      {count > 0 && <Button onClick={reset} text="reset" />}
      <h1>Hello ...</h1>
      {props.children}
    </div>
  );
};

export default Wrapper;
