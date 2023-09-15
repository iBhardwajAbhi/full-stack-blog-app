import React from 'react';
const dayjs = require('dayjs');

const BlogCard = (props) => {
  return (
    <div id="blog-card">
      <img src={props.imgUrl} alt="" />
      <h1>{props.title}</h1>
      <h3>By : {props.author}</h3>
      
      <p>{props.body}</p>
    </div>
  );
};

export default BlogCard;
