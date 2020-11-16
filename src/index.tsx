import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './app/app';
import { MessageStoreAction } from './data/message_store/message_store_action';

ReactDOM.render(<App />, document.getElementById('root'), () => {
  console.log(document.cookie);
  MessageStoreAction.getWelcomeMessage();
});
