import { Dispatcher } from 'flux';

import { BaseCardData } from 'src/datatypes';

export enum MessageStoreActionType {
  ADD_USER_MESSAGE = 'ADD_USER_MESSAGE',
  ADD_BOT_MESSAGE = 'ADD_BOT_MESSAGE',
  UPDATE_USER_INPUT = 'UPDATE_USER_INPUT',
  GET_WELCOME_MESSAGE = 'GET_WELCOME_MESSAGE',
  BACK_UP_MESSAGE_STORE = 'BACK_UP_MESSAGE_STORE',
  RESTORE_MESSAGE_STORE = 'RESTORE_MESSAGE_STORE',
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
  getWelcomeMessage: (): void => {
    messageDispatcher.dispatch({
      type: MessageStoreActionType.GET_WELCOME_MESSAGE,
    });
  },
  backUpMessageStore: (): void => {
    messageDispatcher.dispatch({
      type: MessageStoreActionType.BACK_UP_MESSAGE_STORE,
    });
  },
  restoreMessageStore: (message: LocalStorageData): void => {
    messageDispatcher.dispatch({
      type: MessageStoreActionType.RESTORE_MESSAGE_STORE,
      message,
    });
  },
};

export interface MessageStoreState {
  userInput: string;
  messages: BaseCardData[];
}

export interface LocalStorageData {
  messageStoreState: MessageStoreState;
  lastDismissalTimestamp: number;
}
