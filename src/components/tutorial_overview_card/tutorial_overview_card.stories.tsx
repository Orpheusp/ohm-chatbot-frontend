import React from 'react';

import {
  TutorialOverviewCard,
  TutorialOverviewCardData,
} from './tutorial_overview_card';

export default {
  title: 'Tutorial Overview Card',
  component: TutorialOverviewCard,
};

const cpdcAppointmentCardData: TutorialOverviewCardData = {
  title: 'Book An Appointment with CPDC',
  content:
    'Follow these steps to book your first Career Services appointment! ',
};

export const cpdcAppointmentCard = (): JSX.Element => (
  <TutorialOverviewCard data={cpdcAppointmentCardData} />
);
cpdcAppointmentCard.story = {
  name: 'CPDC Appointment Tutorial Overview Card',
};
