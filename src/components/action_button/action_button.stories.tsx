import React from 'react';

import { ActionButton } from './action_button';

export default {
  title: 'Action Button',
  component: ActionButton,
};

export const active = (): JSX.Element => (
  <ActionButton label={'Test'} isActive={true} />
);
active.story = {
  name: 'Active',
};

export const inactive = (): JSX.Element => (
  <ActionButton label={'Test'} isActive={false} />
);
inactive.story = {
  name: 'Inactive',
};
