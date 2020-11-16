import React from 'react';

import { userChatCard, botChatCard } from 'src/card_data';
import { ChatCard } from './chat_card';

export default {
  title: 'Chat Card',
  component: ChatCard,
};

export const fromUser = (): JSX.Element => <ChatCard data={userChatCard} />;
fromUser.story = {
  name: 'From User',
};

export const fromBot = (): JSX.Element => <ChatCard data={botChatCard} />;
fromBot.story = {
  name: 'From Bot',
};
