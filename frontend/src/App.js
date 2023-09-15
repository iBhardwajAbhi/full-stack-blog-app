import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import AddBlog from './components/AddBlog';
import EditBlog from './components/EditBlog';
import Blog from './components/Blog';

function App() {
  return (
    <Routes>
      <Route path="/" Component={Header}>
        <Route path="login" Component={Login} />
        <Route path="signup" Component={Signup} />
        <Route path="create" Component={AddBlog} />
        <Route path="view" Component={Blog} />
        <Route path="edit" Component={EditBlog} />
        <Route index Component={Home} />
      </Route>
    </Routes>
  );
}

export default App;
