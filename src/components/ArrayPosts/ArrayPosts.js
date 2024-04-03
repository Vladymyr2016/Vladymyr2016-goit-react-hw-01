import React, { useEffect, useState } from 'react';
import Post from './Post';

const API = 'https://jsonplaceholder.typicode.com/posts';

const ArrayPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     (async function () {
  //       try {
  //         const result = await fetch(API);
  //         const posts = await result.json();
  //         setPosts(posts);
  //       } catch (error) {
  //         setError(error.message);
  //       }
  //       setIsLoading(false);
  //     })();
  //   }, []); пример  с IIFE, можно убрать отдкльний вищов ф-і а сразу сделать ее безимянной и визвать

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetch(API);
        const posts = await result.json();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  //   useEffect(() => {
  //     fetch(API)
  //       .then(response => response.json())
  //       .then(posts => {
  //         console.log(posts);
  //         setPosts(posts);
  //       })
  //       .catch(error => setError(error.message))
  //       .finally(() => setIsLoading(false));
  //   }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      <h1>My Posts</h1>
      <hr />

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts.map(post => <Post key={post.id} {...post} />)
      )}
    </div>
  );
};

export default ArrayPosts;
