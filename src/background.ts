import { MessageStoreAction } from 'src/data/message_store/message_store_action';

chrome.runtime.onConnect.addListener((externalPort) => {
  externalPort.onDisconnect.addListener(function () {
    // When popup window closes
    MessageStoreAction.backUpMessageStore();
  });
});
