import React, { useContext } from 'react';

import { Link, Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../userContext';

const Header = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className="App">
      <header>
        <Link className="link" id="logo" to="/">
          My Blog
        </Link>
        {userInfo._id != 'error' ? (
          <>
            <div>Welcome {userInfo.username} !</div>
            <div className="buttons">
              <button
                onClick={() => {
                  navigate('create');
                }}
              >
                New blog
              </button>
              <button
                onClick={() => {
                  setUserInfo({ _id: 'error' });
                  navigate('/');
                }}
              >
                {' '}
                Log Out
              </button>
            </div>
          </>
        ) : (
          <>
            <div>
              <nav>
                <Link className="link" to="/login">
                  Login
                </Link>
                <Link className="link" to="/signup">
                  Signup
                </Link>
              </nav>{' '}
            </div>
          </>
        )}
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
