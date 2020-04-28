import React, { useState, useEffect, useContext } from 'react';
import { Card, Form, Input, Button, Divider } from 'antd';
import { useParams, useHistory } from 'react-router-dom';

import { AuthContext } from '../../../../services/store/authStore';
import { getMessagesAPI } from '../../services/api';
import Message from '../message';

import '../styled-scrollbar.css';

export default function ChatBoard() {
  const { boardName } = useParams();
  const router = useHistory();
  const [messages, setMessages] = useState(null);
  const { username } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      if (boardName) {
        const response = await getMessagesAPI(boardName);
        if (!response.error) {
          setMessages(response);
        } else {
          switch (response.status) {
            case 401:
              router.push('/login');
              break;
            default:
              alert('something is wrong');
          }
        }
      }
    })();
  }, [router, boardName]);

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
        {messages &&
          messages.boards.messages.map((item) => {
            if (item.id < messages.last_read) {
              return (
                <Message
                  text={item.message}
                  username={item.username}
                  date={item.timestamp}
                  mine={item.username === username}
                  isRead={false}
                />
              );
            } else if (item.id === messages.last_read) {
              return (
                <>
                  <Message
                    text={item.message}
                    username={item.username}
                    date={item.timestamp}
                    mine={item.username === username}
                    isRead={false}
                  />
                  <Divider />
                </>
              );
            } else if (item.id >= messages.last_read) {
              return (
                <Message
                  text={item.message}
                  username={item.username}
                  date={item.timestamp}
                  mine={item.username === 'mattchampion'}
                  isRead
                />
              );
            }
          })}
        {messages && messages.last_read < 0 && <Divider />}
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
