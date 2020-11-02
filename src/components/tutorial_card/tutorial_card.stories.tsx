import React from 'react';

import {
  TutorialCardData,
  ForwardConditionType,
  CardResourceType,
  CardDataType,
} from 'src/datatypes';

import { TutorialCard } from './tutorial_card';

export default {
  title: 'Tutorial Card',
  component: TutorialCard,
};

const cpdcAppointmentCardData: TutorialCardData = {
  type: CardDataType.TUTORIAL_CARD,
  title: 'Book An Appointment with CPDC',
  resourceCode: 'T01',
  department: 'CPDC',
  resources: [
    {
      resourceText: 'Go to Handshake',
      resource:
        'Follow the link https://cmu.joinhandshake.com/ to get to the front ' +
        'page of Handshake system, where you’d have access to career-related ' +
        'resources by the school.',
      resourceType: CardResourceType.TXT,
      forwardConditionType: ForwardConditionType.URL_MATCH,
      forwardCondition: 'https://cmu.joinhandshake.com/',
    },
    {
      resourceText: 'Sign into Handshake',
      resource: 'Use your Andrew ID to log into the Handshake system.',
      resourceType: CardResourceType.TXT,
    },
    {
      resourceText: 'Click on "Career center" tile',
      resource:
        'Click on the "Career center" tile to enter the CPDC page in ' +
        'Handshake. It should be the first tile on the right of the first ' +
        'row on your Handshake front page.',
      resourceType: CardResourceType.TXT,
    },
    {
      resourceText: 'Click on "Appointments" tile',
      resource:
        'Click on the "Appointments" tile on the CPDC page in Handshake. ' +
        'It should be the first tile under “What can we help you find?”.',
      resourceType: CardResourceType.TXT,
    },
  ],
  owner: 'CpdcAdmin',
  supportingText: '',
  authRequired: false,
};

export const tutorialCardPending = (): JSX.Element => (
  <TutorialCard
    data={cpdcAppointmentCardData}
    completeTutorial={() => {}}
    continueTutorial={() => {}}
    cancelTutorial={() => {}}
    currentStep={0}
    isForwardConditionMet={false}
  />
);
tutorialCardPending.story = {
  name: 'Tutorial Card, step pending',
};

export const tutorialCardComplete = (): JSX.Element => (
  <TutorialCard
    data={cpdcAppointmentCardData}
    completeTutorial={() => {}}
    continueTutorial={() => {}}
    cancelTutorial={() => {}}
    currentStep={0}
    isForwardConditionMet={true}
  />
);
tutorialCardComplete.story = {
  name: 'Tutorial Card, step complete',
};

export const tutorialCardFinalPending = (): JSX.Element => (
  <TutorialCard
    data={cpdcAppointmentCardData}
    completeTutorial={() => {}}
    continueTutorial={() => {}}
    cancelTutorial={() => {}}
    currentStep={3}
    isForwardConditionMet={false}
  />
);
tutorialCardFinalPending.story = {
  name: 'Tutorial Card, final step pending',
};

export const tutorialCardFinalComplete = (): JSX.Element => (
  <TutorialCard
    data={cpdcAppointmentCardData}
    completeTutorial={() => {}}
    continueTutorial={() => {}}
    cancelTutorial={() => {}}
    currentStep={3}
    isForwardConditionMet={true}
  />
);
tutorialCardFinalComplete.story = {
  name: 'Tutorial Card, final step complete',
};
