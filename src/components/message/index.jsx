import React from 'react';

export default function Message({ text = '', mine = false }) {
  const style = {
    wrapper: {},
    text: {},
  };

  return (
    <div className="message-wrapper" style={style.wrapper}>
      <div className="message-text" style={style.text}>
        {text}
      </div>
    </div>
  );
}
