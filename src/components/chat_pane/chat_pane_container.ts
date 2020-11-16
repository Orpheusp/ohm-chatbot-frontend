import { Container } from 'flux/utils';
import { messageStore } from 'src/data/message_store/message_store';
import { TutorialCardData } from 'src/datatypes';

import { ChatPane, ChatPaneProps } from './chat_pane';

export interface ChatPaneContainerProps {
  enterTutorial: (tutorial: TutorialCardData) => void;
}

/** Get stores for Chat Pane container */
function getStores() {
  return [messageStore];
}

/** Get props for Chat Box container */
function getProps(
  _: ChatPaneProps,
  props?: ChatPaneContainerProps
): ChatPaneProps {
  return {
    chats: messageStore.getState().messages,
    enterTutorial: props?.enterTutorial || (() => {}),
  };
}

export const ChatPaneContainer = Container.createFunctional(
  ChatPane,
  getStores,
  getProps,
  { withProps: true }
);
