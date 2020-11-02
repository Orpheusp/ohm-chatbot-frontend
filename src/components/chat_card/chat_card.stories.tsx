import React from 'react';

import { ChatCardSender, ChatCardData, CardDataType } from 'src/datatypes';
import { ChatCard } from './chat_card';

export default {
  title: 'Chat Card',
  component: ChatCard,
};

const userChatCard: ChatCardData = {
  type: CardDataType.CHAT_CARD,
  resourceCode: 'C01',
  sender: ChatCardSender.USER,
  message: 'Where can I find someone to help me with my recume?',
};

export const fromUser = (): JSX.Element => <ChatCard data={userChatCard} />;
fromUser.story = {
  name: 'From User',
};

const botChatCard: ChatCardData = {
  type: CardDataType.CHAT_CARD,
  resourceCode: 'C01',
  sender: ChatCardSender.BOT,
  message: 'Hi Scottie, how can I help you?',
};

export const fromBot = (): JSX.Element => <ChatCard data={botChatCard} />;
fromBot.story = {
  name: 'From Bot',
};
