import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { AuthContext } from '../../services/store/authStore';
import { Menu, Button } from 'antd';

export default function Navbar() {
  const router = useHistory();
  const { isAuth, username, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
    document.cookie = 'token=';
    router.push('/login');
  };

  return (
    <Menu mode="horizontal" style={{ marginBottom: '2rem' }}>
      <Menu.Item key="boards">
        <Link to="/">boards</Link>
      </Menu.Item>
      {!isAuth && (
        <Menu.Item key="login">
          <Link to="/login">log in</Link>
        </Menu.Item>
      )}
      {!isAuth && (
        <Menu.Item key="register">
          <Link to="/register">register</Link>
        </Menu.Item>
      )}
      {isAuth && <Button onClick={handleLogout}>log out</Button>}
      {isAuth && <span style={{ marginLeft: '1rem' }}>user:{username}</span>}
    </Menu>
  );
}
