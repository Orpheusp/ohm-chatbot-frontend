import React, { useState } from 'react';

import { ChatBox } from './chat_box';

export default {
  title: 'Chat Box',
  component: ChatBox,
};

export const chatBox = (): JSX.Element => {
  const [message, setMessage] = useState('');
  return (
    <div>
      <ChatBox
        onSubmit={(m: string) => {
          setMessage('');
        }}
        onInputChange={(m: string) => {
          setMessage(m);
        }}
        userInput={message}
      />
    </div>
  );
};

chatBox.story = {
  name: 'default',
};
