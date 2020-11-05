import React from 'react';

import { AppHeader } from 'src/components/app_header/app_header';
import { ChatPaneContainer } from 'src/components/chat_pane/chat_pane_container';
import { ChatBoxContainer } from 'src/components/chat_box/chat_box_container';

export class App extends React.Component {
  render(): JSX.Element {
    return (
      <div className={'app'}>
        <AppHeader onToggleHeader={() => {}} />
        <ChatPaneContainer />
        <ChatBoxContainer />
      </div>
    );
  }
}
