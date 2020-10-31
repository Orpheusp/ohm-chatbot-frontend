import React from 'react';

import {
  CardBase,
  CardBaseStyle,
  CardBaseSize,
} from 'src/components/card_base/card_base';

import './info_card.scss';

export enum InfoCardMetadataType {
  ADDRESS,
  EMAIL_ADDRESS,
  URL,
  PHONE_NUMBER,
}

const icons = {
  [InfoCardMetadataType.ADDRESS]: 'address',
  [InfoCardMetadataType.EMAIL_ADDRESS]: 'email',
  [InfoCardMetadataType.URL]: 'url',
  [InfoCardMetadataType.PHONE_NUMBER]: 'phone',
};

export interface InfoCardMetadata {
  type: InfoCardMetadataType;
  label: string;
}

export interface InfoCardData {
  title: string;
  content: string;
  metadata?: InfoCardMetadata[];
}

interface InfoCardMetadataRowProps {
  content: InfoCardMetadata;
}

export interface InfoCardProps {
  data: InfoCardData;
}

/** Chat Cart component */
function InfoCardMetadataRow({
  content,
}: InfoCardMetadataRowProps): JSX.Element {
  const { type, label } = content;
  return (
    <div className={'info-card-metadata-row'}>
      <div className={`info-card-metadata-row__icon`}>
        <div className={`icon-${icons[type]} icon`} />
      </div>
      <div className={'info-card-metadata-row__label'}>{label}</div>
    </div>
  );
}

/** Chat Cart component */
export function InfoCard({ data }: InfoCardProps): JSX.Element {
  const { title, content } = data;
  const metadata = data.metadata || [];
  return (
    <CardBase
      size={CardBaseSize.MEDIUM}
      style={CardBaseStyle.WHITE}
      className={'info-card'}
    >
      <div className={'info-card__type'}>info</div>
      <div className={'info-card__title'}>{title}</div>
      <div className={'info-card__content'}>{content}</div>
      <div className={'info-card__metadata-rows'}>
        {metadata.map((row, i) => (
          <InfoCardMetadataRow content={row} key={i} />
        ))}
      </div>
    </CardBase>
  );
}
