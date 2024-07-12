import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById, saveCommentToServer } from '../api';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const BlogPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPostById(parseInt(postId));
      setPost(post);
    };

    fetchPost();
  }, [postId]);

  const addComment = async (postId, comment) => {
    await saveCommentToServer(parseInt(postId), comment);
    const updatedPost = await getPostById(parseInt(postId));
    setPost(updatedPost);
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <CommentForm postId={parseInt(postId)} addComment={addComment} />
      <CommentList postId={parseInt(postId)} />
    </div>
    
  );
};

export default BlogPost;
