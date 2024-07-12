import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPostsFromServer } from '../api';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPostsFromServer();
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="home">
      <h1>Listado de Blogs</h1>
      {posts.map((post) => (
        <div key={post.id} className="post-preview">
          <Link to={`/post/${post.id}`} className='nop'>
            <h2>{post.title}</h2>
            <p>{post.content.substring(0, 35)}...</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
