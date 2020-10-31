import React from 'react';

import { TutorialButton } from './tutorial_button';

export default {
  title: 'Tutorial Button',
  component: TutorialButton,
};

export const active = (): JSX.Element => (
  <TutorialButton label={'Test'} isActive={true} />
);
active.story = {
  name: 'Active',
};

export const inactive = (): JSX.Element => (
  <TutorialButton label={'Test'} isActive={false} />
);
inactive.story = {
  name: 'Inactive',
};
