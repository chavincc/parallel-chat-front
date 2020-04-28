import React from 'react';
import moment from 'moment';

export default function Message({
  text = '',
  mine = false,
  username = 'anonymous',
  date = 'Wed, 14 Jun 2017 07:00:00 GMT',
  isRead = true,
}) {
  const style = {
    wrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: mine ? 'flex-end' : 'flex-start',
      padding: `0 ${mine ? 0 : '5rem'} 0.5rem ${mine ? '5rem' : 0}`,
    },
    username: {
      textAlign: mine ? 'right' : 'left',
    },
    text: {
      textAlign: mine ? 'right' : 'left',
      padding: '1rem',
      borderRadius: '10px',
      borderTopLeftRadius: mine ? '10px' : '00px',
      borderTopRightRadius: mine ? '0px' : '10px',
      border: `0.5px solid ${mine ? 'white' : 'rgb(187, 187, 187)'}`,
      background: mine ? '#dbffc2' : 'white',
    },
    date: {
      textAlign: mine ? 'right' : 'left',
      color: '#a0a0a0',
      fontSize: '0.75rem',
    },
  };

  return (
    <div className="message-wrapper" style={style.wrapper}>
      <div className="username" style={style.username}>
        {username}
      </div>
      <div className="message-text" style={style.text}>
        {text}
      </div>
      <div className="date" style={style.date}>
        {!isRead && (
          <span
            style={{
              width: '20px',
              height: '20px',
              lineHeight: '20px',
              color: 'red',
              borderRadius: '50%',
            }}
          >
            new
          </span>
        )}{' '}
        {moment(date).format('DD/MM/YY HH:mm')}
      </div>
    </div>
  );
}
