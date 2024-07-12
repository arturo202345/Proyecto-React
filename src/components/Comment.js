import React from 'react';

const Comment = ({ comment }) => (
  <div className="comment">
    <p>{comment.text}</p>
    <small>Autor: {comment.author}</small>
  </div>
);

export default Comment;
