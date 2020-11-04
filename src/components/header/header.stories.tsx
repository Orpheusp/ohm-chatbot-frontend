import React from 'react';

import { Header } from './header';

export default {
  title: 'Header',
  component: Header,
};

export const header = (): JSX.Element => <Header onToggleHeader={() => {}} />;
header.story = {
  name: 'default',
};
