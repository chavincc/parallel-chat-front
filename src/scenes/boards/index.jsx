import React from 'react';
import { Row, Col } from 'antd';

import ChatBoard from './components/chat-board';

export default function Boards() {
  return (
    <Row>
      <Col
        offset="6"
        span="12"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ChatBoard />
      </Col>
    </Row>
  );
}
