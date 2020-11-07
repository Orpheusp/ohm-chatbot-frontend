import { BaseCardData } from 'src/datatypes';
import { MessageStoreAction } from './message_store_action';

export const CHATBOT_ENDPOINT_URL = '/chats';

/** Fetch chatbot data from backend. */
export async function fetchChatbotResponse(message: string): Promise<void> {
  const data = { message };
  const response = await fetch(CHATBOT_ENDPOINT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const cardData: BaseCardData = await response.json();
  MessageStoreAction.addBotMessage(cardData);
}
