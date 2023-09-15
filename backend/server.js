const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var bcrypt = require('bcrypt');

const User = require('./UserModel');
const Blog = require('./BlogModel');

const app = express();

mongoose
  .connect(
    'mongodb+srv://xxxxxxxxxxxxxxx'
  )
  .then(() => {
    app.listen(4000, () => {
      console.log('server listening at 4000 & db connected');
    });
  })
  .catch((err) => {
    console.log('db connection failed');
  });

app.use(cors());

app.use(express.json());

var salt = bcrypt.genSaltSync(10);

app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    if (password == '' || username == '') throw new Error('this an error');
    const hash = await bcrypt.hashSync(password, salt);
    const user = await User.create({ username: username, password: hash });
    await res.json(user);
  } catch (error) {
    await res
      .status(400)
      .json('username should be unique & minLength = 4 for both');
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    const match = await bcrypt.compareSync(password, user.password);
    if (match) {
      await res.json(user);
    } else {
      res.status(400).json('wrong credentials');
    }
  } catch (error) {
    res.status(400).json('wrong credentials');
  }
});

app.post('/create', async (req, res) => {
  const { title, imgUrl, body, author } = req.body;
  const blog = await Blog.create({ title, imgUrl, body, author });

  await res.json(blog);
});

app.put('/edit', async (req, res) => {
  const { title, imgUrl, body, author, _id } = req.body;
  const blog = await Blog.findById(_id);
  const data = await blog.updateOne({ title, imgUrl, body });
  res.json(blog);
});

app.delete('/delete', async (req, res) => {
  const { _id } = req.body;
  await Blog.findOneAndDelete({ _id: _id });
  res.send(_id);
});

app.get('/all', async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});
