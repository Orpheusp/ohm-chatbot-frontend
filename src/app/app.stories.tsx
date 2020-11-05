import React from 'react';

import { MessageStoreAction } from 'src/data/message_store/message_store_action';
import { cpdcAppointmentCardData } from 'src/card_data';

import { App } from './app';

export default {
  title: 'App',
  component: App,
};

MessageStoreAction.addBotMessage(cpdcAppointmentCardData);
export const base = (): JSX.Element => <App />;
base.story = {
  name: 'Base',
};
