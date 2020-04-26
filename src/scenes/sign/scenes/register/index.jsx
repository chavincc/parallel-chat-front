import React, { useContext } from 'react';
import { Row, Col, Button, Form, Input, Card } from 'antd';

import { AuthContext } from '../../../../services/store/authStore';
import {
  requiredFieldRule,
  usernameRule,
  nameRule,
  passwordRule,
  emailRule,
} from '../../services/rules';

export default function Register() {
  const { adminToken } = useContext(AuthContext);

  const handleRegister = (value) => {
    console.log(value);
  };

  return (
    <Row>
      <Col
        offset="6"
        span="12"
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Card
          style={{
            width: '100%',
            maxWidth: '400px',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              fontSize: '24px',
              marginBottom: '2rem',
            }}
          >
            REGISTER
          </div>
          <Form onFinish={handleRegister}>
            <Form.Item
              label="username"
              name="username"
              rules={[requiredFieldRule, usernameRule]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="password"
              name="password"
              rules={[requiredFieldRule, passwordRule]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="email"
              name="email"
              rules={[requiredFieldRule, emailRule]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="firstname"
              name="first_name"
              rules={[requiredFieldRule, nameRule]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="lastname"
              name="last_name"
              rules={[requiredFieldRule, nameRule]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">register</Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
