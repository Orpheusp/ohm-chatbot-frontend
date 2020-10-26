import React from 'react';

import { App } from './app';

export default {
  title: 'App',
  component: App,
};

export const base = (): JSX.Element => <App />;
base.story = {
  name: 'Base',
};
