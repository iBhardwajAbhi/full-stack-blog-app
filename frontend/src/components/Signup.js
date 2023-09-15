import React, { useContext, useState } from 'react';
import { UserContext } from '../userContext';
import { Navigate, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignup = async () => {
    const res = await fetch('http://127.0.0.1:4000/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (res.ok) {
      const user = await res.json();
      setUserInfo(user);
      await navigate('/');
    } else {
      alert('username not unique');
    }
  };
  return (
    <div className="signup-form">
      <input
        type="text"
        name=""
        id=""
        placeholder="username"
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
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
