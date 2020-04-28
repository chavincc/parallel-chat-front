import React, { useState, useEffect } from 'react';
import { List, Tooltip, Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';

import { getBoardsAPI } from '../../services/api';

import '../styled-scrollbar.css';

export default function BoardList() {
  const router = useHistory();

  const [boards, setBoards] = useState(null);
  useEffect(() => {
    (async () => {
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
    })();
  }, [router]);

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
      ></List>
    )
  );
}
