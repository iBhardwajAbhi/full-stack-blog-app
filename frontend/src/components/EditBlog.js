import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../userContext';
import { BlogContext } from '../blogContext';
const EditBlog = () => {
  const { blogInfo } = useContext(BlogContext);
  const { userInfo } = useContext(UserContext);
  const { title, imgUrl, body, _id } = blogInfo;
  const [_title, setTitle] = useState(title);
  const [_imgUrl, setImgUrl] = useState(imgUrl);
  const [_body, setBody] = useState(body);

  const author = userInfo.username;
  const navigate = useNavigate();

  const submitHandler = async () => {
    await fetch('http://127.0.0.1:4000/edit', {
      method: 'PUT',
      body: JSON.stringify({
        title: _title,
        imgUrl: _imgUrl,
        body: _body,
        author,
        _id,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    navigate('/');
  };

  useEffect(() => {
    if (userInfo._id == 'error' || blogInfo._id == 'error') navigate('/');
  }, []);

  return (
    <div>
      <div id="edit-blog">
        <input
          type="text"
          placeholder="title"
          name=""
          id=""
          value={_title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="image url"
          name=""
          id=""
          value={_imgUrl}
          onChange={(e) => {
            setImgUrl(e.target.value);
          }}
        />
        <textarea
          type="text"
          placeholder="body"
          rows={15}
          name=""
          value={_body}
          id=""
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <button onClick={submitHandler}>Save changes</button>
      </div>
    </div>
  );
};

export default EditBlog;
