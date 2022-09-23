import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Message({ content, title, type }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant={type} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{title}</Alert.Heading>
        <p>{content}</p>
      </Alert>
    );
  }
  return <></>;
}

export default Message;
