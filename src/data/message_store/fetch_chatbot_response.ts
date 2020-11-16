import { BaseCardData } from 'src/datatypes';
import { MessageStoreAction } from './message_store_action';

export const CHATBOT_ENDPOINT_URL_DEV = 'http://127.0.0.1:5000/chats';
export const CHATBOT_ENDPOINT_URL_PROD = '';

/** Fetch chatbot data from backend. */
export async function fetchChatbotResponse(message: string): Promise<void> {
  const data = { message };
  const url =
    process.env.NODE_ENV === 'development'
      ? CHATBOT_ENDPOINT_URL_DEV
      : CHATBOT_ENDPOINT_URL_PROD;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const cardData: BaseCardData[] = await response.json();
  MessageStoreAction.addBotMessages(cardData);
}
