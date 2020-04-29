import React, { useState, useEffect } from 'react';
import { List, Tooltip, Button, Form, Modal, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';

import { getBoardsAPI, postBoardAPI } from '../../services/api';

import '../styled-scrollbar.css';

export default function BoardList() {
  const router = useHistory();
  const [formVisible, setFormVisible] = useState(false);
  const [newBoardName, setNewBoardName] = useState('');
  const [boards, setBoards] = useState(null);

  useEffect(() => {
    renderBoard();
  }, [router]);

  const renderBoard = async () => {
    const response = await getBoardsAPI();
    if (!response.error) {
      setBoards(response);
    } else {
      switch (response.status) {
        case 401:
          router.push('/login');
          break;
        default:
          alert('something is wrong');
      }
    }
  };

  const handleAddBoard = async () => {
    setNewBoardName('');
    const response = await postBoardAPI(newBoardName);
    if (!response.error) {
      renderBoard();
    } else {
      alert('something is wrong');
    }
    setFormVisible(false);
  };

  return (
    boards && (
      <List
        header={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <Tooltip title="ADD BOARD">
              <Button
                type="primary"
                icon={<PlusCircleOutlined />}
                style={{
                  width: '200px',
                }}
                onClick={() => {
                  setFormVisible(true);
                }}
              />
            </Tooltip>
          </div>
        }
        style={{
          height: '599px',
          transform: 'translate(1px, -2px)',
          border: '0.5px solid rgb(187, 187, 187)',
          width: '200px',
          overflowY: 'scroll',
          overflowX: 'hidden',
        }}
        bordered
        dataSource={boards}
        renderItem={(item) => (
          <List.Item>
            <Link style={{ color: 'black' }} to={`/board/${item.name}`}>
              {item.name}
            </Link>
          </List.Item>
        )}
      >
        <Modal
          visible={formVisible}
          footer={null}
          onCancel={() => {
            setFormVisible(false);
          }}
        >
          <Form layout="vertical">
            <Form.Item label="name">
              <Input onChange={(e) => setNewBoardName(e.target.value)} />
            </Form.Item>
            <Form.Item>
              <Button disabled={!newBoardName} onClick={handleAddBoard}>
                submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </List>
    )
  );
}
