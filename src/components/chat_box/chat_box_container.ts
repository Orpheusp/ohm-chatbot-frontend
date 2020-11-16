import { Container } from 'flux/utils';
import { messageStore } from 'src/data/message_store/message_store';
import { MessageStoreAction } from 'src/data/message_store/message_store_action';

import { ChatBox, ChatBoxProps } from './chat_box';

/** Get stores for Chat Box container */
function getStores() {
  return [messageStore];
}

/** Get props for Chat Box container */
function getProps(): ChatBoxProps {
  return {
    onSubmit: MessageStoreAction.addUserMessage,
    onInputChange: MessageStoreAction.updateUserInput,
    userInput: messageStore.getState().userInput,
  };
}

export const ChatBoxContainer = Container.createFunctional(
  ChatBox,
  getStores,
  getProps
);
