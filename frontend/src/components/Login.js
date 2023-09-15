import React, { useContext, useState } from 'react';
import { UserContext } from '../userContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { userInfo, setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogin = async () => {
    const res = await fetch('http://127.0.0.1:4000/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
      // credentials: 'include',
    });
    if (res.ok) {
      const user = await res.json();
      setUserInfo(user);
      await navigate('/');
    } else {
      alert('wrong id pass');
    }
  };
  return (
    <div className="login-form">
      <input
        type="text"
        name=""
        placeholder="username"
        id=""
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        name=""
        id=""
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
