import React from 'react';

import { TutorialOverviewCard } from './tutorial_overview_card';

import { TutorialCardData } from 'src/datatypes';

export default {
  title: 'Tutorial Overview Card',
  component: TutorialOverviewCard,
};

const oieCardData: TutorialCardData = {
  title: 'Reach out to OIE using this quick tutorial!',
  resourceCode: 'T01',
  department: 'OIE',
  resources: [],
  owner: 'OieAdmin',
  supportingText: 'To contact OiE, follow the simple steps below',
  authRequired: false,
};

export const oieCard = (): JSX.Element => (
  <TutorialOverviewCard
    data={oieCardData}
    enterTutorial={(data: TutorialCardData) => {}}
  />
);
oieCard.story = {
  name: 'OIE Tutorial Overview Card',
};
