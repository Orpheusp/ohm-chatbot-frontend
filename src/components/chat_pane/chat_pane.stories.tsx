import React from 'react';

import {
  userChatCard,
  botChatCard,
  botChatCard2,
  urlInfoCardData,
  urlInfoCardDataWithMultipleResources,
} from 'src/card_data';

import { ChatPane } from './chat_pane';

export default {
  title: 'Chat Pane',
  component: ChatPane,
};

export const chatPane = (): JSX.Element => (
  <ChatPane chats={[userChatCard]} enterTutorial={() => {}} />
);
chatPane.story = {
  name: 'default',
};

const chats = [
  botChatCard,
  userChatCard,
  botChatCard2,
  urlInfoCardData,
  urlInfoCardDataWithMultipleResources,
];

export const chatPaneScrollable = (): JSX.Element => (
  <ChatPane chats={chats} enterTutorial={() => {}} />
);
chatPaneScrollable.story = {
  name: 'scrollable',
};
