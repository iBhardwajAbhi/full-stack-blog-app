import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../userContext';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [body, setBody] = useState('');
  const { userInfo } = useContext(UserContext);
  const author = userInfo.username;

  const navigate = useNavigate();
  const submitHandler = async () => {
    await fetch('http://127.0.0.1:4000/create', {
      method: 'POST',
      body: JSON.stringify({ title, imgUrl, body, author }),
      headers: { 'Content-Type': 'application/json' },
    });
    navigate('/');
  };

  useEffect(() => {
    if (userInfo._id == 'error') navigate('/');
  }, []);
  return (
    <div id="new-blog">
      <input
        type="text"
        placeholder="title"
        name=""
        id=""
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="image url"
        name=""
        id=""
        onChange={(e) => {
          setImgUrl(e.target.value);
        }}
      />
      <textarea
        rows={15}
        type="text"
        placeholder="body"
        name=""
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      ></textarea>

      <button onClick={submitHandler}>Save blog</button>
    </div>
  );
};

export default AddBlog;
