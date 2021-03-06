import React from 'react';

import { TutorialCardData } from 'src/datatypes';
import {
  CardBase,
  CardBaseStyle,
  CardBaseSize,
} from 'src/components/card_base/card_base';
import { ActionButton } from '../action_button/action_button';

import './tutorial_card.scss';

export interface TutorialCardProps {
  data: TutorialCardData;
  completeTutorial: () => void;
  continueTutorial: () => void;
  cancelTutorial: () => void;
  currentStep: number;
  isForwardConditionMet: boolean;
  className?: string;
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
        key={`dot-${i}`}
      />
    );
  }
  return dots;
}

/** Tutorial Card component */
export function TutorialCard({
  data,
  completeTutorial,
  continueTutorial,
  cancelTutorial,
  currentStep,
  isForwardConditionMet,
  className,
}: TutorialCardProps): JSX.Element {
  const { title, resources: steps } = data;
  const { resourceText: stepTitle, resource: stepContent } = steps[currentStep];

  let actionButton: JSX.Element;

  if (currentStep == steps.length - 1) {
    actionButton = (
      <ActionButton
        label={'complete'}
        isActive={isForwardConditionMet}
        onClick={isForwardConditionMet ? completeTutorial : undefined}
      />
    );
  } else {
    actionButton = (
      <ActionButton
        label={'next'}
        isActive={isForwardConditionMet}
        onClick={isForwardConditionMet ? continueTutorial : undefined}
      />
    );
  }

  const closeButtonAction = () => {
    if (currentStep == steps.length && isForwardConditionMet) {
      completeTutorial();
    } else {
      cancelTutorial();
    }
  };

  const completeStatusClassName = isForwardConditionMet
    ? 'tutorial-card--step-complete'
    : 'tutorial-card--step-pending';

  const classNames = ['tutorial-card'];
  if (className) {
    classNames.push(className);
  }

  return (
    <CardBase
      size={CardBaseSize.LARGE}
      style={CardBaseStyle.WHITE}
      className={classNames.join(' ')}
    >
      <div
        className='tutorial-card__close-button'
        onClick={closeButtonAction}
      />
      <div className={'tutorial-card__type'}>tutorial</div>
      <div className={'tutorial-card__tutorial-name'}>{title}</div>
      <div className={'tutorial-card__progress'}>
        {tutorialProgressBar(currentStep, steps.length)}
      </div>
      <div className={`tutorial-card__step-name ${completeStatusClassName}`}>
        {stepTitle}
      </div>
      <div className={'tutorial-card__step-detail'}>{stepContent}</div>
      <div className={'tutorial-card__actions'}>{actionButton}</div>
    </CardBase>
  );
}
