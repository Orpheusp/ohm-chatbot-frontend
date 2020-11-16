import React from 'react';

import {
  BaseCardData,
  instanceOfChatCardData,
  instanceOfInformationCardData,
  instanceOfTutorialCardData,
  ChatCardSender,
  TutorialCardData,
} from 'src/datatypes';
import { InfoCard } from 'src/components/info_card/info_card';
import { ChatCard } from 'src/components/chat_card/chat_card';
import { TutorialOverviewCard } from 'src/components/tutorial_overview_card/tutorial_overview_card';

import './chat_pane.scss';

export interface ChatPaneProps {
  chats: BaseCardData[];
  enterTutorial: (tutorial: TutorialCardData) => void;
}

/** Chat Box component */
export function ChatPane({ chats, enterTutorial }: ChatPaneProps): JSX.Element {
  const chatConmponents: JSX.Element[] = [];

  for (let i = 0; i < chats.length; i++) {
    const chat = chats[i];
    if (instanceOfChatCardData(chat)) {
      chatConmponents.push(
        <div className={'chat-pane__card-container'}>
          <ChatCard
            data={chat}
            key={chat.resourceCode}
            className={
              chat.sender == ChatCardSender.USER
                ? 'chat-pane__card--user'
                : 'chat-pane__card--bot'
            }
          />
        </div>
      );
    } else if (instanceOfInformationCardData(chat)) {
      chatConmponents.push(
        <div className={'chat-pane__card-container'}>
          <InfoCard
            data={chat}
            key={chat.resourceCode}
            className={'chat-pane__card--bot'}
          />
        </div>
      );
    } else if (instanceOfTutorialCardData(chat)) {
      chatConmponents.push(
        <div className={'chat-pane__card-container'}>
          <TutorialOverviewCard
            data={chat}
            enterTutorial={enterTutorial}
            key={chat.resourceCode}
            className={'chat-pane__card--bot'}
          />
        </div>
      );
    }
  }

  return <div className={'chat-pane'}>{chatConmponents}</div>;
}
