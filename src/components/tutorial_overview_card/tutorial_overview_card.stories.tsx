import React from 'react';

import { oieCardData } from 'src/card_data';

import { TutorialOverviewCard } from './tutorial_overview_card';

export default {
  title: 'Tutorial Overview Card',
  component: TutorialOverviewCard,
};

export const oieCard = (): JSX.Element => (
  <TutorialOverviewCard data={oieCardData} enterTutorial={(data) => {}} />
);
oieCard.story = {
  name: 'OIE Tutorial Overview Card',
};
