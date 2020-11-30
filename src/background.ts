import {
  ChromeRuntimeMessagePayload,
  ChromeRuntimeMessageType,
  BackgroundStorageData,
} from 'src/data/message_store/message_store_action';

let permanentState: Partial<BackgroundStorageData> = {};

chrome.runtime.onConnect.addListener(() => {
  chrome.runtime.onMessage.addListener(
    (message: ChromeRuntimeMessagePayload, _, sendResponse) => {
      if (message.type === ChromeRuntimeMessageType.BACK_UP_MESSAGE_STORE) {
        permanentState = message.message as BackgroundStorageData;
      }
      if (message.type === ChromeRuntimeMessageType.GET_MESSAGE_STORE_BACKUP) {
        sendResponse(permanentState);
      }
      return;
    }
  );
});
