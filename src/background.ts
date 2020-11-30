import {
  ChromeRuntimeMessagePayload,
  ChromeRuntimeMessageType,
} from 'src/datatypes';

import { MessageStoreStateBackupData } from 'src/data/message_store/message_store_action';
import { AppState } from 'src/app/app';

let messageStoreStateBackup: Partial<MessageStoreStateBackupData> = {};
let appStateBackup: Partial<AppState> = {};

chrome.runtime.onConnect.addListener(() => {
  chrome.runtime.onMessage.addListener(
    (message: ChromeRuntimeMessagePayload, _, sendResponse) => {
      if (message.type === ChromeRuntimeMessageType.BACK_UP_MESSAGE_STORE) {
        messageStoreStateBackup = message.message as MessageStoreStateBackupData;
      }
      if (message.type === ChromeRuntimeMessageType.GET_MESSAGE_STORE_BACKUP) {
        sendResponse(messageStoreStateBackup);
      }
      if (message.type === ChromeRuntimeMessageType.BACK_UP_APP_STATE) {
        appStateBackup = message.message as AppState;
      }
      if (message.type === ChromeRuntimeMessageType.GET_APP_STATE_BACKUP) {
        sendResponse(appStateBackup);
      }
    }
  );
});
