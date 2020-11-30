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
  LocalStorageData,
  MessageStoreAction,
} from './message_store_action';

import { fetchChatbotResponse } from './fetch_chatbot_response';

const MIN_TIME_ELAPSED_BEFORE_WELCOME = 20 * 60 * 1000;

export class MessageStore extends ReduceStore<
  MessageStoreState,
  MessageDispatcherPayload
> {
  constructor() {
    super(messageDispatcher);

    chrome.storage.sync.get(
      ['messageStoreState', 'lastDismissalTimestamp'],
      (data) => {
        if (!data || !data.lastDismissalTimestamp || !data.messageStoreState) {
          // Immediately retrieve welcome message if no local storage content
          // is found.
          fetchChatbotResponse('');
        }
        MessageStoreAction.restoreMessageStore(data as LocalStorageData);
      }
    );
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

    if (action.type == MessageStoreActionType.BACK_UP_MESSAGE_STORE) {
      this.backUpToLocalStorage();
    }

    if (action.type == MessageStoreActionType.RESTORE_MESSAGE_STORE) {
      const {
        messageStoreState,
        lastDismissalTimestamp,
      } = action.message as LocalStorageData;

      const timeElapsedSinceLastDismissal = Date.now() - lastDismissalTimestamp;

      if (timeElapsedSinceLastDismissal >= MIN_TIME_ELAPSED_BEFORE_WELCOME) {
        fetchChatbotResponse('');
      }
      return { ...messageStoreState };
    }

    return state;
  }

  private backUpToLocalStorage() {
    chrome.storage.sync.set({
      messageStoreState: this.getState(),
      lastDismissalTimestamp: Date.now(),
    });
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
