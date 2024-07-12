import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { savePostToServer } from '../api';

const CrearPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { id: Date.now(), title, content, comments: [] };
    await savePostToServer(newPost);
    navigate('/');
  };

  return (
    <div className="crear-post">
      <h1>Crear Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titulo"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Contenido"
          required
        ></textarea>
        <button type="submit">Guardad post</button>
      </form>
    </div>
  );
};

export default CrearPost;
