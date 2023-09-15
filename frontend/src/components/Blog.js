import React, { useContext, useEffect } from 'react';
import { UserContext } from '../userContext';
import { useNavigate } from 'react-router-dom';
import { BlogContext } from '../blogContext';

const Blog = () => {
  const { blogInfo } = useContext(BlogContext);
  const { title, imgUrl, body, author, _id } = blogInfo;
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const editHandler = () => {
    navigate('../edit');
  };
  const deleteHandler = async () => {
    if (window.confirm('Are you sure you want to delete this blog ?') == true) {
      await fetch('http://127.0.0.1:4000/delete', {
        method: 'DELETE',
        body: JSON.stringify({
          _id: _id,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      await navigate('../');
    }
  };

  useEffect(() => {
    if (_id == 'error') navigate('/');
  }, []);
  return (
    <div id="blog-page">
      <h1>{title}</h1>
      <h3>By : {author}</h3>
      <img src={imgUrl} alt="" />
      <div>{body}</div>
      {userInfo.username == author && (
        <>
          <button onClick={editHandler}>Edit Blog</button>
          <button
            onClick={() => {
              deleteHandler();
            }}
          >
            Delete Blog
          </button>
        </>
      )}
    </div>
  );
};

export default Blog;
