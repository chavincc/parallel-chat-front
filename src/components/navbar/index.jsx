import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../services/store/authStore';
import { Menu, Button } from 'antd';

export default function Navbar() {
  const { isAuth, username, logOut } = useContext(AuthContext);

  return (
    <Menu mode="horizontal" style={{ marginBottom: '3rem' }}>
      <Menu.Item key="boards">
        <Link to="/boards">boards</Link>
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
      {isAuth && (
        <Menu.Item>
          <Button onClick={logOut}>log out</Button>
        </Menu.Item>
      )}
      {isAuth && <span>user:{username}</span>}
    </Menu>
  );
}
