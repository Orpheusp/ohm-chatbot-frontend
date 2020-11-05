import { Dispatcher } from 'flux';

import { BaseCardData } from 'src/datatypes';

export enum MessageStoreActionType {
  ADD_USER_MESSAGE = 'ADD_USER_MESSAGE',
  ADD_BOT_MESSAGE = 'ADD_BOT_MESSAGE',
}

export interface MessageDispatcherPayload {
  type: MessageStoreActionType;
  message?: unknown;
}

export const messageDispatcher = new Dispatcher<MessageDispatcherPayload>();

export const MessageStoreAction = {
  addUserMessage: (message: string): void => {
    messageDispatcher.dispatch({
      type: MessageStoreActionType.ADD_USER_MESSAGE,
      message,
    });
  },
  addBotMessage: (message: BaseCardData): void => {
    messageDispatcher.dispatch({
      type: MessageStoreActionType.ADD_BOT_MESSAGE,
      message,
    });
  },
};

export type MessageStoreState = Array<BaseCardData>;
