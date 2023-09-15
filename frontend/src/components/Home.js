import React, { useContext, useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import { useNavigate } from 'react-router-dom';
import { BlogContext } from '../blogContext';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const navigate = useNavigate();
  const { setBlogInfo } = useContext(BlogContext);
  const clickHandler = (blog) => {
    setBlogInfo(blog);
    navigate('view');
  };
  useEffect(() => {
    fetch('http://127.0.0.1:4000/all')
      .then((res) => {
        res.json().then((data) => {
          setBlogs(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div id="blogs-container">
      {blogs ? (
        blogs
          .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
          .map((blog) => {
            return (
              <div
                onClick={() => {
                  clickHandler(blog);
                }}
              >
                <BlogCard
                  imgUrl={blog.imgUrl}
                  title={blog.title}
                  author={blog.author}
                  body={blog.body}
                  updatedAt={blog.updatedAt}
                ></BlogCard>
              </div>
            );
          })
      ) : (
        <div>no blog to display</div>
      )}
    </div>
  );
};

export default Home;
