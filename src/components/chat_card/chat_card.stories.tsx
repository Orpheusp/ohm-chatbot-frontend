import React from 'react';

import { ChatCard, ChatCardSender } from './chat_card';

export default {
  title: 'Chat Card',
  component: ChatCard,
};

export const fromUser = (): JSX.Element => (
  <ChatCard
    message={'Where can I find someone to help me with my recume?'}
    from={ChatCardSender.USER}
  />
);
fromUser.story = {
  name: 'From User',
};

export const fromBot = (): JSX.Element => (
  <ChatCard
    message={'Hi Scottie, how can I help you?'}
    from={ChatCardSender.BOT}
  />
);
fromBot.story = {
  name: 'From Bot',
};
