import React from 'react';

import { cpdcAppointmentCardData } from 'src/card_data';
import { TutorialCard } from './tutorial_card';

export default {
  title: 'Tutorial Card',
  component: TutorialCard,
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
