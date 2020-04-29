import React from 'react';
import { Row, Col } from 'antd';

const style = {
  headWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 'auto',
    width: '200px',
    flexDirection: 'column',
    padding: '1.5rem',
    textAlign: 'left',
    border: '3px solid #505050',
    borderTop: '0px',
    borderRight: '0px',
  },
  head: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: '2rem',
  },
  headsub: {
    fontSize: '1rem',
    color: '#909090',
  },
  detail: {
    width: '150px',
    marginTop: '2rem',
    textAlign: 'justify',
  },
  allWrap: {
    display: 'flex',
    width: '400px',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 'auto',
  },
};

export default function Home() {
  console.log(process.env);
  return (
    <Row>
      <Col offset="5" span="14">
        <div className="all-wrap" style={style.allWrap}>
          <div className="head-wrap" style={style.headWrap}>
            <>
              <div className="head" style={style.head}>
                NoSocketChat. {process.env.REACT_APP_BASE_URL}
              </div>
              <div className="headsub" style={style.headsub}>
                render by polling
              </div>
            </>
          </div>
          <div className="detail" style={style.detail}>
            a mini project for 2020 parallel and distributed system class.{' '}
            <br />
            <br />
            all design credit goes to{' '}
            <a href="http://www.linecorp.com">linecorp.com</a> and{' '}
            <a href="http://ant.design">ant design</a>.
          </div>
        </div>
      </Col>
    </Row>
  );
}
