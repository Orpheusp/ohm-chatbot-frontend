import React from 'react';

import { AppHeader } from './app_header';

export default {
  title: 'App Header',
  component: AppHeader,
};

export const header = (): JSX.Element => (
  <AppHeader onToggleHeader={() => {}} />
);
header.story = {
  name: 'default',
};
