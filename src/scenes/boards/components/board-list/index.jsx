import React from 'react';
import { List } from 'antd';

import '../styled-scrollbar.css';

export default function BoardList() {
  const data = [
    'board1',
    'board2',
    'board3',
    'board1',
    'board2',
    'board1',
    'board2',
    'board1',
    'board2',
    'board1',
    'board2',
    'board1xxxxxxxxxxxxxxxxxxxxxx',
    'board2',
    'board1',
  ];

  return (
    <List
      style={{
        height: '599px',
        transform: 'translate(1px, -2px)',
        border: '0.5px solid rgb(187, 187, 187)',
        width: '200px',
        overflowY: 'scroll',
        overflowX: 'hidden',
      }}
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    ></List>
  );
}
