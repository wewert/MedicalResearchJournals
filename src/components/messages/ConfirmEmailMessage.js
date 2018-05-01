import React from 'react';
import { Message } from 'semantic-ui-react';

  const ConfirmEmailMessage = () => (
    <Message info>
      <Message.Header>Email not found...please retry...</Message.Header>
    </Message>
  );

export default ConfirmEmailMessage;
