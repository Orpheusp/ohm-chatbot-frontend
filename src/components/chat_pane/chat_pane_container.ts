import { Container } from 'flux/utils';
import { messageStore } from 'src/data/message_store/message_store';

import { ChatPane, ChatPaneProps } from './chat_pane';

/** Get stores for Chat Pane container */
function getStores() {
  return [messageStore];
}

/** Get props for Chat Box container */
function getProps(): ChatPaneProps {
  return {
    chats: messageStore.getState().messages,
  };
}

export const ChatPaneContainer = Container.createFunctional(
  ChatPane,
  getStores,
  getProps
);
