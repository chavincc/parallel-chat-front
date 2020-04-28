import React, { useState, useEffect, useContext, useRef } from 'react';
import { Card, Form, Input, Button, Divider } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { useParams, useHistory } from 'react-router-dom';

import { AuthContext } from '../../../../services/store/authStore';
import { getMessagesAPI, postMessageAPI } from '../../services/api';
import Message from '../message';

import '../styled-scrollbar.css';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default function ChatBoard() {
  const { boardName } = useParams();
  const router = useHistory();
  const [messages, setMessages] = useState(null);
  const [newMessage, setNewMessages] = useState('');
  const { username } = useContext(AuthContext);

  const [savedUnread, setSavedUnread] = useState(-1);
  const [savedLast, setSavedLast] = useState(-1);
  const [once, setOnce] = useState(false);

  useEffect(() => {
    renderMessage();
  }, [router, boardName]);

  useInterval(() => {
    renderMessagePartialChange();
  }, 4000);

  const renderMessage = async () => {
    if (boardName) {
      const response = await getMessagesAPI(boardName);
      if (!response.error) {
        if (!once) setOnce(true);
        setSavedUnread(response.last_read);
        setSavedLast(
          response.boards.messages.length
            ? response.boards.messages[response.boards.messages.length - 1].id
            : 0
        );
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
  };

  const renderMessagePartialChange = async () => {
    const response = await getMessagesAPI(boardName);
    if (!response.error) {
      if (!once) {
        setOnce(true);
        setSavedUnread(response.last_read);
        setSavedLast(
          response.boards.messages.length
            ? response.boards.messages[response.boards.messages.length - 1].id
            : 0
        );
      }
      setMessages(response);
    }
  };

  const handleMessageSend = async () => {
    if (newMessage.length > 0) {
      const response = await postMessageAPI(boardName, { message: newMessage });
      if (!response.error) {
        await renderMessagePartialChange();
        setNewMessages('');
      } else {
        alert(response.error);
      }
    }
  };

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
        {boardName || ''}
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
            if (item.id < savedUnread) {
              return (
                <Message
                  text={item.message}
                  username={item.username}
                  date={item.timestamp}
                  mine={item.username === username}
                  isRead
                />
              );
            } else if (item.id === savedUnread) {
              return (
                <>
                  <Message
                    text={item.message}
                    username={item.username}
                    date={item.timestamp}
                    mine={item.username === username}
                    isRead
                  />
                  <Divider />
                </>
              );
            } else if (item.id >= savedUnread && item.id < savedLast) {
              return (
                <Message
                  text={item.message}
                  username={item.username}
                  date={item.timestamp}
                  mine={item.username === 'mattchampion'}
                  isRead={false}
                />
              );
            } else if (item.id === savedLast) {
              return (
                <>
                  <Message
                    text={item.message}
                    username={item.username}
                    date={item.timestamp}
                    mine={item.username === 'mattchampion'}
                    isRead={false}
                  />
                  {<Divider />}
                </>
              );
            } else if (item.id > savedLast) {
              return (
                <Message
                  text={item.message}
                  username={item.username}
                  date={item.timestamp}
                  mine={item.username === 'mattchampion'}
                  isRead={true}
                />
              );
            }
          })}
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
        <Form layout="inline" onFinish={handleMessageSend}>
          <Form.Item>
            <Input
              style={{ width: '250px' }}
              autoComplete="off"
              value={newMessage}
              onChange={(e) => {
                setNewMessages(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              disabled={!newMessage}
              shape="circle"
              icon={<RightOutlined />}
              htmlType="submit"
            />
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
