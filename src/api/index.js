export const savePostToServer = async (post) => {
  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.push(post);
  localStorage.setItem('posts', JSON.stringify(posts));
};

export const getPostsFromServer = async () => {
  return JSON.parse(localStorage.getItem('posts')) || [];
};

export const getPostById = async (id) => {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  return posts.find((post) => post.id === id);
};

export const saveCommentToServer = async (postId, comment) => {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  const post = posts.find((post) => post.id === postId);
  if (post) {
    post.comments = post.comments || [];
    post.comments.push(comment);
    localStorage.setItem('posts', JSON.stringify(posts));
  }
};

export const getCommentsFromServer = async (postId) => {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  const post = posts.find((post) => post.id === postId);
  return post ? post.comments || [] : [];
};
