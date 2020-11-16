import React from 'react';

import { InfoCard } from './info_card';

import {
  urlInfoCardData,
  urlInfoCardDataWithMultipleResources,
  imageInfoCardData,
  textInfoCardData,
} from 'src/card_data';

export default {
  title: 'Info Card',
  component: InfoCard,
};

export const urlInfoCard = (): JSX.Element => (
  <InfoCard data={urlInfoCardData} />
);
urlInfoCard.story = {
  name: 'Info card with URL',
};

export const urlInfoCardWithMultipleResources = (): JSX.Element => (
  <InfoCard data={urlInfoCardDataWithMultipleResources} />
);
urlInfoCardWithMultipleResources.story = {
  name: 'Info card with multiple resources',
};

export const imageInfoCard = (): JSX.Element => (
  <InfoCard data={imageInfoCardData} />
);
imageInfoCard.story = {
  name: 'Info card with image',
};

export const textInfoCard = (): JSX.Element => (
  <InfoCard data={textInfoCardData} />
);
textInfoCard.story = {
  name: 'Info card with text',
};
