import React from 'react';

import { ChatBox } from './chat_box';

export default {
  title: 'Chat Box',
  component: ChatBox,
};

export const chatBox = (): JSX.Element => <ChatBox onSubmit={() => {}} />;
chatBox.story = {
  name: 'default',
};
