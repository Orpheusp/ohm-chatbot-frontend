import { ReduceStore } from 'flux/utils';

import {
  BaseCardData,
  CardDataType,
  ChatCardSender,
  ChatCardData,
} from 'src/datatypes';

import {
  MessageStoreState,
  MessageDispatcherPayload,
  MessageStoreActionType,
  messageDispatcher,
} from './message_store_action';

import { fetchChatbotResponse } from './fetch_chatbot_response';

export class MessageStore extends ReduceStore<
  MessageStoreState,
  MessageDispatcherPayload
> {
  constructor() {
    super(messageDispatcher);
  }

  private userMessageCounter = 0;

  getInitialState(): MessageStoreState {
    return [];
  }

  reduce(
    state: MessageStoreState,
    action: MessageDispatcherPayload
  ): MessageStoreState {
    if (action.type == MessageStoreActionType.ADD_USER_MESSAGE) {
      const message = action.message as string;
      this.userMessageCounter += 1;

      const userChatCard: ChatCardData = this.createChatCardData(message);
      state.push(userChatCard);
      fetchChatbotResponse(message);
      return state;
    }

    if (action.type == MessageStoreActionType.ADD_BOT_MESSAGE) {
      state.push(action.message as BaseCardData);
      return state;
    }

    return state;
  }

  private createChatCardData(message: string): ChatCardData {
    return {
      type: CardDataType.CHAT_CARD,
      resourceCode: `U${this.userMessageCounter}`,
      sender: ChatCardSender.USER,
      message: message as string,
    };
  }
}

export const messageStore = new MessageStore();
