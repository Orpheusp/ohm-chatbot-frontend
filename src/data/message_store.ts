import { ReduceStore } from 'flux/utils';
import { Dispatcher } from 'flux';

import {
  BaseCardData,
  CardDataType,
  ChatCardSender,
  ChatCardData,
} from 'src/datatypes';

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

export class MessageStore extends ReduceStore<
  MessageStoreState,
  MessageDispatcherPayload
> {
  private userMessageCounter = 1;

  getInitialState(): MessageStoreState {
    return [];
  }

  reduce(
    state: MessageStoreState,
    action: MessageDispatcherPayload
  ): MessageStoreState {
    if (action.type == MessageStoreActionType.ADD_USER_MESSAGE) {
      this.userMessageCounter += 1;

      const userChatCard: ChatCardData = {
        type: CardDataType.CHAT_CARD,
        resourceCode: `U${this.userMessageCounter}`,
        sender: ChatCardSender.USER,
        message: action.message as string,
      };
      state.push(userChatCard);
      return state;
    }

    if (action.type == MessageStoreActionType.ADD_BOT_MESSAGE) {
      state.push(action.message as BaseCardData);
      return state;
    }

    return state;
  }
}
