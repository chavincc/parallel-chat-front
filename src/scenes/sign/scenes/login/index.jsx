import React from 'react';
import { Row, Col, Button, Form, Input, Card } from 'antd';

export default function Register() {
  const handleLogin = (value) => {
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
            LOG IN
          </div>
          <Form onFinish={handleLogin}>
            <Form.Item label="username" name="username">
              <Input />
            </Form.Item>
            <Form.Item label="password" name="password">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">login</Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
