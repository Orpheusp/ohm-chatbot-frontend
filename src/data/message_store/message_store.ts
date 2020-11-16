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
    return {
      userInput: '',
      messages: [],
    };
  }

  reduce(
    state: MessageStoreState,
    action: MessageDispatcherPayload
  ): MessageStoreState {
    if (action.type == MessageStoreActionType.ADD_USER_MESSAGE) {
      const message = action.message as string;
      if (!message) {
        return state;
      }
      const userChatCard: ChatCardData = this.generateChatCardData(message);
      fetchChatbotResponse(message);
      return {
        messages: [...state.messages, userChatCard],
        userInput: '',
      };
    }

    if (action.type == MessageStoreActionType.ADD_BOT_MESSAGE) {
      return {
        messages: [...state.messages, ...(action.message as BaseCardData[])],
        userInput: state.userInput,
      };
    }

    if (action.type == MessageStoreActionType.UPDATE_USER_INPUT) {
      return {
        messages: state.messages,
        userInput: action.message as string,
      };
    }

    if (action.type == MessageStoreActionType.GET_WELCOME_MESSAGE) {
      fetchChatbotResponse('');
    }

    return state;
  }

  private generateChatCardData(message: string): ChatCardData {
    this.userMessageCounter += 1;
    const resourceCode =
      this.userMessageCounter < 10
        ? `U0${this.userMessageCounter}`
        : `U${this.userMessageCounter}`;

    return {
      type: CardDataType.CHAT_CARD,
      resourceCode,
      sender: ChatCardSender.USER,
      message: message as string,
    };
  }

  areEqual(one: MessageStoreState, two: MessageStoreState): boolean {
    return (
      one === two &&
      one.userInput === two.userInput &&
      one.messages === two.messages
    );
  }
}

export const messageStore = new MessageStore();
