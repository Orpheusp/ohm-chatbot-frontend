import React from 'react';

import {
  CardBase,
  CardBaseStyle,
  CardBaseSize,
} from 'src/components/card_base/card_base';

import { TutorialCardData } from 'src/datatypes';

import './tutorial_overview_card.scss';

export interface TutorialOverviewCardProps {
  data: TutorialCardData;
  enterTutorial: (data: TutorialCardData) => void;
  className?: string;
}

/** Tutorial Overview Card component */
export function TutorialOverviewCard({
  data,
  enterTutorial,
  className,
}: TutorialOverviewCardProps): JSX.Element {
  const { supportingText, title } = data;
  const classNames = ['tutorial-overview-card'];
  if (className) {
    classNames.push(className);
  }
  return (
    <CardBase
      size={CardBaseSize.MEDIUM}
      style={CardBaseStyle.WHITE}
      className={classNames.join(' ')}
      onClick={() => {
        enterTutorial(data);
      }}
    >
      <div className={'tutorial-overview-card__type'}>tutorial</div>
      <div className={'tutorial-overview-card__text'}>
        <div className={'tutorial-overview-card__title'}>{title}</div>
        <div className={'tutorial-overview-card__content'}>
          {supportingText}
        </div>
      </div>
      <div className={'tutorial-overview-card__guide'}>
        <div className={'icon-next icon'} />
      </div>
    </CardBase>
  );
}
