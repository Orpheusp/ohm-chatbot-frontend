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
}

/** Tutorial Overview Card component */
export function TutorialOverviewCard({
  data,
  enterTutorial,
}: TutorialOverviewCardProps): JSX.Element {
  const { supportingText, title } = data;
  return (
    <CardBase
      size={CardBaseSize.MEDIUM}
      style={CardBaseStyle.WHITE}
      className={'tutorial-overview-card'}
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
