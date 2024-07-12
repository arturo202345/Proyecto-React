import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import { getCommentsFromServer } from '../api';

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const comments = await getCommentsFromServer(postId);
      setComments(comments);
    };

    fetchComments();
  }, [postId]);

  return (
    <div className="comment-list">
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
