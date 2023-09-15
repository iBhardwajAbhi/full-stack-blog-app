import React from 'react';

const Post = ({ props }) => {
  const { imgLink, title, summary } = props;
  return (
    <div>
      <img src={imgLink} alt="" />
      <h1>{title}</h1>
      <h2>{summary}</h2>
    </div>
  );
};

export default Post;
