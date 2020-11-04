import React from 'react';

import {
  userChatCard,
  botChatCard,
  botChatCard2,
  urlInfoCardData,
  urlInfoCardDataWithMultipleResources,
} from 'src/card_data';
import { AppHeader } from 'src/components/app_header/app_header';
import { ChatPane } from 'src/components/chat_pane/chat_pane';
import { ChatBox } from 'src/components/chat_box/chat_box';
import { BaseCardData } from 'src/datatypes';

export class App extends React.Component {
  private messages: BaseCardData[] = [
    botChatCard,
    userChatCard,
    botChatCard2,
    urlInfoCardData,
    urlInfoCardDataWithMultipleResources,
  ];

  render(): JSX.Element {
    return (
      <div className={'app'}>
        <AppHeader onToggleHeader={() => {}} />
        <ChatPane chats={this.messages} />
        <ChatBox onSubmit={() => {}} />
      </div>
    );
  }
}
