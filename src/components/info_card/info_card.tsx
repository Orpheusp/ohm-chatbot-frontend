import React from 'react';

import {
  CardBase,
  CardBaseStyle,
  CardBaseSize,
} from 'src/components/card_base/card_base';

import {
  CardResourceType,
  InformationCardResource,
  InformationCardData,
} from 'src/datatypes';

import './info_card.scss';

interface InfoCardResourceProps {
  data: InformationCardResource;
}

export interface InfoCardProps {
  data: InformationCardData;
  className?: string;
}

/** Info Card component */
function InfoCardResource({ data }: InfoCardResourceProps): JSX.Element {
  const { resource, resourceType, resourceText } = data;
  let resourceContent: JSX.Element;

  if (resourceType == CardResourceType.IMG) {
    resourceContent = (
      <div className={'info-card-resource__resource'}>
        <img
          className={'info-card-resource__image'}
          src={resource}
          alt={resourceText}
        />
      </div>
    );
  } else if (resourceType == CardResourceType.URL) {
    resourceContent = (
      <div className={'info-card-resource__resource'}>
        <div className={`info-card-resource__icon`}>
          <div className={'icon-url icon'} />
        </div>
        <a className={'info-card-resource__label'} href={resource}>
          {resource}
        </a>
      </div>
    );
  } else {
    resourceContent = (
      <div className={'info-card-resource__resource'}>
        <div className={`info-card-resource__icon`}>
          <div className={'icon-info icon'} />
        </div>
        <div className={'info-card-resource__label'}>{resource}</div>
      </div>
    );
  }

  return (
    <div className={'info-card-resource'}>
      <div className={'info-card-resource__content'}>{resourceText || ''}</div>
      {resourceContent}
    </div>
  );
}

/** Chat Cart component */
export function InfoCard({ data, className }: InfoCardProps): JSX.Element {
  const { title, supportingText } = data;
  const resources = data.resources || [];
  const classNames = ['info-card'];
  if (className) {
    classNames.push(className);
  }
  return (
    <CardBase
      size={CardBaseSize.MEDIUM}
      style={CardBaseStyle.WHITE}
      className={classNames.join(' ')}
    >
      <div className={'info-card__type'}>info</div>
      <div className={'info-card__title'}>{title}</div>
      <div className={'info-card__content'}>{supportingText}</div>
      <div className={'info-card__resources'}>
        {resources.map((resource, i) => (
          <InfoCardResource data={resource} key={i} />
        ))}
      </div>
    </CardBase>
  );
}
