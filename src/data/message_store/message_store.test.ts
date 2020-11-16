import {
  BaseCardData,
  CardDataType,
  ChatCardData,
  ChatCardSender,
} from 'src/datatypes';
import * as FetchChatbotResponseModule from './fetch_chatbot_response';

import {
  MessageStoreState,
  MessageDispatcherPayload,
  MessageStoreActionType,
} from './message_store_action';
import { MessageStore } from './message_store';

describe('MessageStore', () => {
  let messageStore: MessageStore;
  let fetchChatbotResponseSpy: jest.SpyInstance;

  beforeEach(() => {
    messageStore = new MessageStore();
    fetchChatbotResponseSpy = jest.spyOn(
      FetchChatbotResponseModule,
      'fetchChatbotResponse'
    );
  });

  test('it returns the correct initial state', () => {
    expect(messageStore.getInitialState()).toEqual({
      userInput: '',
      messages: [],
    });
  });

  test('it does not add empty user message', () => {
    const userMessage = '';
    const state: MessageStoreState = {
      userInput: userMessage,
      messages: [],
    };

    const action: MessageDispatcherPayload = {
      type: MessageStoreActionType.ADD_USER_MESSAGE,
      message: userMessage,
    };

    expect(messageStore.reduce(state, action)).toEqual({
      userInput: '',
      messages: [],
    });
  });

  test('it does not fetch chatbot response for empty user message', () => {
    const userMessage = '';
    const state: MessageStoreState = {
      userInput: userMessage,
      messages: [],
    };

    const action: MessageDispatcherPayload = {
      type: MessageStoreActionType.ADD_USER_MESSAGE,
      message: userMessage,
    };

    messageStore.reduce(state, action);
    expect(fetchChatbotResponseSpy).not.toHaveBeenCalled();
  });

  test('it adds user message', () => {
    const userMessage = 'message';
    const userMessageCardData: ChatCardData = {
      type: CardDataType.CHAT_CARD,
      resourceCode: 'U01',
      sender: ChatCardSender.USER,
      message: userMessage,
    };
    const state: MessageStoreState = {
      userInput: userMessage,
      messages: [],
    };

    const action: MessageDispatcherPayload = {
      type: MessageStoreActionType.ADD_USER_MESSAGE,
      message: userMessage,
    };

    expect(messageStore.reduce(state, action)).toEqual({
      userInput: '',
      messages: [userMessageCardData],
    });
  });

  test('it fetches chatbot response for user message', () => {
    const userMessage = 'message';
    const state: MessageStoreState = {
      userInput: userMessage,
      messages: [],
    };

    const action: MessageDispatcherPayload = {
      type: MessageStoreActionType.ADD_USER_MESSAGE,
      message: userMessage,
    };

    messageStore.reduce(state, action);
    expect(fetchChatbotResponseSpy).toHaveBeenCalledWith(userMessage);
  });

  test('it adds bot message', () => {
    const state: MessageStoreState = {
      userInput: '',
      messages: [],
    };

    const botMessage: BaseCardData = {
      type: CardDataType.CHAT_CARD,
      resourceCode: 'C01',
    };
    const action: MessageDispatcherPayload = {
      type: MessageStoreActionType.ADD_BOT_MESSAGE,
      message: [botMessage],
    };

    expect(messageStore.reduce(state, action)).toEqual({
      userInput: '',
      messages: [botMessage],
    });
  });

  test('it appends bot message', () => {
    const botMessage: BaseCardData = {
      type: CardDataType.CHAT_CARD,
      resourceCode: 'C01',
    };
    const state: MessageStoreState = {
      userInput: '',
      messages: [botMessage],
    };
    const action: MessageDispatcherPayload = {
      type: MessageStoreActionType.ADD_BOT_MESSAGE,
      message: [botMessage],
    };

    expect(messageStore.reduce(state, action)).toEqual({
      userInput: '',
      messages: [botMessage, botMessage],
    });
  });

  test('it updates user input', () => {
    const userMessage = 'a';
    const state: MessageStoreState = {
      userInput: '',
      messages: [],
    };
    const action: MessageDispatcherPayload = {
      type: MessageStoreActionType.UPDATE_USER_INPUT,
      message: userMessage,
    };

    expect(messageStore.reduce(state, action)).toEqual({
      userInput: userMessage,
      messages: [],
    });
  });

  test('it fetches welcome message', () => {
    const state: MessageStoreState = {
      userInput: '',
      messages: [],
    };

    const action: MessageDispatcherPayload = {
      type: MessageStoreActionType.GET_WELCOME_MESSAGE,
    };

    messageStore.reduce(state, action);
    expect(fetchChatbotResponseSpy).toHaveBeenCalledWith('');
  });
});
