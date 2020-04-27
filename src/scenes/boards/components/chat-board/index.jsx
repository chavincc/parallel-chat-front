import React from 'react';
import { Card, Form, Input, Button } from 'antd';

import Message from '../message';

import '../styled-scrollbar.css';

export default function ChatBoard() {
  return (
    <div
      className="card-container"
      style={{
        width: '100%',
        maxWidth: '400px',
      }}
    >
      <Card
        style={{
          borderColor: 'rgb(187, 187, 187)',
          textAlign: 'center',
        }}
      >
        Board Name
      </Card>
      <Card
        style={{
          overflowY: 'scroll',
          height: '450px',
          borderColor: 'rgb(187, 187, 187)',
          transform: 'translateY(-2px)',
        }}
      >
        <Message text="test" mine />
        <Message text="test" mine />
        <Message
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem facilis repudiandae facere vel, tempore ea"
          mine
        />
        <Message text="test" />
        <Message text="test" />
        <Message text="test" mine />
        <Message text="test" mine />
        <Message text="testLorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, odio!" />
      </Card>
      <Card
        style={{
          transform: 'translateY(-4px)',
          borderColor: 'rgb(187, 187, 187)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Form layout="inline">
          <Form.Item>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button>send</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
