import React from 'react';

import {
  CardBase,
  CardBaseStyle,
  CardBaseSize,
} from 'src/components/card_base/card_base';

import { TutorialButton } from 'src/components/tutorial_button/tutorial_button';

import './tutorial_card.scss';

export enum TutorialStepForwardConditionType {
  URL_MATCH,
}

export interface TutorialStepForwardCondition {
  conditionType: TutorialStepForwardConditionType;
  detail: string;
}

export interface TutorialStepData {
  title: string;
  content: string;
  forwardCondition: TutorialStepForwardCondition;
}

export interface TutorialCardData {
  title: string;
  steps: TutorialStepData[];
}

export interface TutorialCardProps {
  data: TutorialCardData;
}

/** Utility function for creating progress bar */
function tutorialProgressBar(
  currentStepIndex: number,
  tutorialLength: number
): JSX.Element[] {
  const dots: JSX.Element[] = [];
  for (let i = 0; i < tutorialLength; i++) {
    const classNameSuffix = i <= currentStepIndex ? 'done' : 'undone';
    dots.push(
      <div
        className={`tutorial-progress-dot tutorial-progress-dot--${classNameSuffix}`}
      />
    );
  }
  return dots;
}

/** Tutorial Card component */
export function TutorialCard({ data }: TutorialCardProps): JSX.Element {
  const { title, steps } = data;
  const currentStepIndex = 0;
  const currentStep = steps[currentStepIndex];
  return (
    <CardBase
      size={CardBaseSize.LARGE}
      style={CardBaseStyle.WHITE}
      className={'tutorial-card'}
    >
      <div className={'tutorial-card__type'}>tutorial</div>
      <div className={'tutorial-card__tutorial-name'}>{title}</div>
      <div className={'tutorial-card__progress'}>
        {tutorialProgressBar(currentStepIndex, steps.length)}
      </div>
      <div className={'tutorial-card__step-name'}>{currentStep.title}</div>
      <div className={'tutorial-card__step-detail'}>{currentStep.content}</div>
      <div className={'tutorial-card__actions'}>
        <TutorialButton label={'next'} isActive={true} />
      </div>
    </CardBase>
  );
}
