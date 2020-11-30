import { ReduceStore } from 'flux/utils';

import {
  BaseCardData,
  CardDataType,
  ChatCardSender,
  ChatCardData,
  ChromeRuntimeMessagePayload,
  ChromeRuntimeMessageType,
} from 'src/datatypes';

import {
  MessageStoreState,
  MessageDispatcherPayload,
  MessageStoreActionType,
  messageDispatcher,
  MessageStoreStateBackupData,
  MessageStoreAction,
} from './message_store_action';

import { fetchChatbotResponse } from './fetch_chatbot_response';

const MIN_TIME_ELAPSED_BEFORE_WELCOME = 20 * 60 * 1000;

export class MessageStore extends ReduceStore<
  MessageStoreState,
  MessageDispatcherPayload
> {
  private userMessageCounter = 0;

  constructor() {
    super(messageDispatcher);

    if (!chrome.runtime) {
      return;
    }
    chrome.runtime.sendMessage(
      {
        type: ChromeRuntimeMessageType.GET_MESSAGE_STORE_BACKUP,
      } as ChromeRuntimeMessagePayload,
      (response: Partial<MessageStoreStateBackupData>) => {
        if (!response.lastActiveTimestamp || !response.messageStoreState) {
          fetchChatbotResponse('');
          return;
        }

        const { messageStoreState, lastActiveTimestamp } = response;

        const timeElapsedSinceLastActive = Date.now() - lastActiveTimestamp;

        if (timeElapsedSinceLastActive >= MIN_TIME_ELAPSED_BEFORE_WELCOME) {
          fetchChatbotResponse('');
          return;
        }

        MessageStoreAction.restoreMessageStore(messageStoreState);
      }
    );
  }

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
      const newState = {
        messages: [...state.messages, userChatCard],
        userInput: '',
      };
      this.backUpToBackground(newState);
      return newState;
    }

    if (action.type == MessageStoreActionType.ADD_BOT_MESSAGE) {
      const newState = {
        messages: [...state.messages, ...(action.message as BaseCardData[])],
        userInput: state.userInput,
      };
      this.backUpToBackground(newState);
      return newState;
    }

    if (action.type == MessageStoreActionType.UPDATE_USER_INPUT) {
      const newState = {
        messages: state.messages,
        userInput: action.message as string,
      };
      this.backUpToBackground(newState);
      return newState;
    }

    if (action.type == MessageStoreActionType.GET_WELCOME_MESSAGE) {
      fetchChatbotResponse('');
    }

    if (action.type == MessageStoreActionType.RESTORE_MESSAGE_STORE) {
      const newState = action.message as MessageStoreState;
      return newState;
    }

    return state;
  }

  private backUpToBackground(state: MessageStoreState) {
    const data = {
      messageStoreState: state,
      lastActiveTimestamp: Date.now(),
    } as MessageStoreStateBackupData;
    if (!chrome?.storage) {
      return;
    }
    chrome.runtime.sendMessage({
      type: ChromeRuntimeMessageType.BACK_UP_MESSAGE_STORE,
      message: data,
    } as ChromeRuntimeMessagePayload);
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
