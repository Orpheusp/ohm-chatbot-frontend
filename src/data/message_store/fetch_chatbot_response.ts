import { BaseCardData } from 'src/datatypes';
import { MessageStoreAction } from './message_store_action';

export const CHATBOT_ENDPOINTS = {
  development: 'http://localhost:8010/proxy/chats',
  test: 'http://localhost:8010/proxy/chats',
  production: '',
};

/** Fetch chatbot data from backend. */
export async function fetchChatbotResponse(message: string): Promise<void> {
  const data = { message };
  const url = process.env.NODE_ENV
    ? CHATBOT_ENDPOINTS[process.env.NODE_ENV]
    : '';
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    credentials: 'include',
  });

  const cardData: BaseCardData[] = await response.json();
  MessageStoreAction.addBotMessages(cardData);
}
