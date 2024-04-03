import React from 'react';
import s from './Post.module.css';

const Post = props => {
  const { id, userId, title, body } = props;
  return (
    <div className={s.post}>
      <small>{id}</small>
      <h2>{title}</h2>
      <p>{body}</p>
      <h3>{userId}</h3>
    </div>
  );
};

export default Post;
