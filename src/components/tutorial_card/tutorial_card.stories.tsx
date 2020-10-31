import React from 'react';

import {
  TutorialCard,
  TutorialCardData,
  TutorialStepForwardConditionType,
} from './tutorial_card';

export default {
  title: 'Tutorial Card',
  component: TutorialCard,
};

const cpdcAppointmentCardData: TutorialCardData = {
  title: 'Book An Appointment with CPDC',
  steps: [
    {
      title: 'Go to Handshake',
      content:
        'Follow the link https://cmu.joinhandshake.com/ to get to the front ' +
        'page of Handshake system, where you’d have access to career-related ' +
        'resources by the school.',
      forwardCondition: {
        conditionType: TutorialStepForwardConditionType.URL_MATCH,
        detail: 'https://cmu.joinhandshake.com/',
      },
    },
    {
      title: 'Sign into Handshake',
      content: 'Use your Andrew ID to log into the Handshake system.',
      forwardCondition: {
        conditionType: TutorialStepForwardConditionType.URL_MATCH,
        detail: 'https://cmu.joinhandshake.com/',
      },
    },
    {
      title: 'Click on "Career center" tile',
      content:
        'Click on the "Career center" tile to enter the CPDC page in ' +
        'Handshake. It should be the first tile on the right of the first ' +
        'row on your Handshake front page.',
      forwardCondition: {
        conditionType: TutorialStepForwardConditionType.URL_MATCH,
        detail: 'https://cmu.joinhandshake.com/',
      },
    },
    {
      title: 'Click on "Appointments" tile',
      content:
        'Click on the "Appointments" tile on the CPDC page in Handshake. ' +
        'It should be the first tile under “What can we help you find?”.',
      forwardCondition: {
        conditionType: TutorialStepForwardConditionType.URL_MATCH,
        detail: 'https://cmu.joinhandshake.com/',
      },
    },
  ],
};

export const cpdcAppointmentCard = (): JSX.Element => (
  <TutorialCard data={cpdcAppointmentCardData} />
);
cpdcAppointmentCard.story = {
  name: 'CPDC Appointment Tutorial Card',
};
