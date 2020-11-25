import { BaseCardData } from 'src/datatypes';
import { MessageStoreAction } from './message_store_action';

/**
 * For dogfood purposes, we assume a local backend server is being run for both
 * dev and prod environment, until later on a proper remote backend server is
 * deployed.
 */
export const CHATBOT_ENDPOINTS = {
  // In a dev environment, the app is run on a local dev server. Due to CROS
  // reasons, a local proxy is needed to redirect our requests and responses.
  development: 'http://localhost:8010/proxy/chats',
  test: 'http://localhost:8010/proxy/chats',
  // In a prod environment, the app is run in Chrome, and no proxy is needed.
  production: 'http://127.0.0.1:5000/chats',
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
