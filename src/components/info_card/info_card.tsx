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
}

/** Chat Cart component */
function InfoCardResource({ data }: InfoCardResourceProps): JSX.Element {
  const { resource, resourceType, resourceText } = data;
  let resourceContent: JSX.Element;

  if (resourceType == CardResourceType.IMG) {
    resourceContent = (
      <div className={'info-card-resource__resource'}>
        <img />
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
export function InfoCard({ data }: InfoCardProps): JSX.Element {
  const text = data.supportingText || '';
  const resources = data.resources || [];
  return (
    <CardBase
      size={CardBaseSize.MEDIUM}
      style={CardBaseStyle.WHITE}
      className={'info-card'}
    >
      <div className={'info-card__type'}>info</div>
      <div className={'info-card__title'}>{text}</div>
      <div className={'info-card__resources'}>
        {resources.map((resource, i) => (
          <InfoCardResource data={resource} key={i} />
        ))}
      </div>
    </CardBase>
  );
}
