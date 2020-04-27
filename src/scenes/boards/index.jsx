import React from 'react';
import { Row, Col } from 'antd';

import ChatBoard from './components/chat-board';
import BoardList from './components/board-list';

export default function Boards() {
  return (
    <Row>
      <Col
        offset="4"
        span="16"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <BoardList />
        <ChatBoard />
      </Col>
    </Row>
  );
}
