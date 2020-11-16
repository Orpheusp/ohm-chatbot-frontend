import { BaseCardData, CardDataType } from 'src/datatypes';

import {
  MessageStoreAction,
  messageDispatcher,
  MessageStoreActionType,
} from './message_store_action';

describe('MessageStoreAction', () => {
  beforeEach(() => {
    jest.spyOn(messageDispatcher, 'dispatch');
  });

  test('it sends message when adding a user message', () => {
    const message = 'test';
    MessageStoreAction.addUserMessage(message);
    expect(messageDispatcher.dispatch as jest.Mock).toHaveBeenCalledWith({
      type: MessageStoreActionType.ADD_USER_MESSAGE,
      message,
    });
  });

  test('it sends message when adding a bot message', () => {
    const message: BaseCardData = {
      type: CardDataType.CHAT_CARD,
      resourceCode: 'C01',
    };
    MessageStoreAction.addBotMessages([message]);
    expect(messageDispatcher.dispatch as jest.Mock).toHaveBeenCalledWith({
      type: MessageStoreActionType.ADD_BOT_MESSAGE,
      message,
    });
  });

  test('it updates when updating user input', () => {
    const message = 'test';
    MessageStoreAction.updateUserInput(message);
    expect(messageDispatcher.dispatch as jest.Mock).toHaveBeenCalledWith({
      type: MessageStoreActionType.UPDATE_USER_INPUT,
      message,
    });
  });
});
