import { Dispatcher } from 'flux';

import { BaseCardData } from 'src/datatypes';

export enum MessageStoreActionType {
  ADD_USER_MESSAGE = 'ADD_USER_MESSAGE',
  ADD_BOT_MESSAGE = 'ADD_BOT_MESSAGE',
  UPDATE_USER_INPUT = 'UPDATE_USER_INPUT',
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
  addBotMessages: (message: BaseCardData[]): void => {
    messageDispatcher.dispatch({
      type: MessageStoreActionType.ADD_BOT_MESSAGE,
      message,
    });
  },
  updateUserInput: (message: string): void => {
    messageDispatcher.dispatch({
      type: MessageStoreActionType.UPDATE_USER_INPUT,
      message,
    });
  },
};

export interface MessageStoreState {
  userInput: string;
  messages: BaseCardData[];
}
