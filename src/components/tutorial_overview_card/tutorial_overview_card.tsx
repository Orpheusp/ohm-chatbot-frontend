import React from 'react';

import {
  CardBase,
  CardBaseStyle,
  CardBaseSize,
} from 'src/components/card_base/card_base';

import './tutorial_overview_card.scss';

export interface TutorialOverviewCardData {
  title: string;
  content: string;
}

export interface TutorialOverviewCardProps {
  data: TutorialOverviewCardData;
}

/** Tutorial Overview Card component */
export function TutorialOverviewCard({
  data,
}: TutorialOverviewCardProps): JSX.Element {
  const { title, content } = data;
  return (
    <CardBase
      size={CardBaseSize.MEDIUM}
      style={CardBaseStyle.WHITE}
      className={'tutorial-overview-card'}
    >
      <div className={'tutorial-overview-card__type'}>tutorial</div>
      <div className={'tutorial-overview-card__text'}>
        <div className={'tutorial-overview-card__title'}>{title}</div>
        <div className={'tutorial-overview-card__content'}>{content}</div>
      </div>
      <div className={'tutorial-overview-card__guide'}>
        <div className={'icon-right icon'} />
      </div>
    </CardBase>
  );
}
