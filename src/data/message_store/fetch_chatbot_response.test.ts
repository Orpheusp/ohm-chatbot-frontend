import { BaseCardData, CardDataType } from 'src/datatypes';

import {
  fetchChatbotResponse,
  CHATBOT_ENDPOINT_URL,
} from './fetch_chatbot_response';
import { MessageStoreAction } from './message_store_action';

describe('fetchChatbotResponse', () => {
  const cardData: BaseCardData = {
    type: CardDataType.CHAT_CARD,
    resourceCode: 'C01',
  };
  let fetchMock: jest.Mock;

  beforeEach(() => {
    fetchMock = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(cardData),
      } as Response)
    );
    global.fetch = fetchMock;
  });

  test('it fetches chat response from the specified endpoint', async () => {
    const message = 'test';
    await fetchChatbotResponse(message);
    expect(fetchMock).toHaveBeenCalledWith(CHATBOT_ENDPOINT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
  });

  test('it adds received card data to message store', async () => {
    jest.spyOn(MessageStoreAction, 'addBotMessage');

    const message = 'test';
    await fetchChatbotResponse(message);
    expect(MessageStoreAction.addBotMessage as jest.Mock).toHaveBeenCalledWith(
      cardData
    );
  });
});
