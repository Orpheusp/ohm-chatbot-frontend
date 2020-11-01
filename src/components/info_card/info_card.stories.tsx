import React from 'react';

import { InfoCard } from './info_card';

import { CardResourceType, InformationCardData } from 'src/datatypes';

export default {
  title: 'Info Card',
  component: InfoCard,
};

const urlInfoCardData: InformationCardData = {
  supportingText: 'Immigration and internation travel resources',
  resources: [
    {
      resourceText:
        "Here you'll find government resources and links related to " +
        'immigration and international travel, including USCIS, SEVIS, ' +
        'Visas, and embassy information.',
      resource: 'https://www.cmu.edu/oie/immigration-and-travel/index.html',
      resourceType: CardResourceType.URL,
    },
  ],
  resourceCode: 'I01',
  department: 'OIE',
  owner: 'OieAdmin',
  authRequired: false,
};

export const urlInfoCard = (): JSX.Element => (
  <InfoCard data={urlInfoCardData} />
);
urlInfoCard.story = {
  name: 'Info card with URL',
};

const urlInfoCardDataWithResourceText: InformationCardData = {
  supportingText: 'Know all about maintaining your visa',
  resources: [
    {
      resourceText: 'For newly admitted students, click here:',
      resource:
        'https://www.cmu.edu/oie/faq/f20sevpguidancefaqnewstudents.html',
      resourceType: CardResourceType.URL,
    },
    {
      resourceText: 'For continuing students, click here:',
      resource:
        'https://www.cmu.edu/oie/faq/f20sevpguidancefaqscurrentstudents.html',
      resourceType: CardResourceType.URL,
    },
  ],
  resourceCode: 'I01',
  department: 'OIE',
  owner: 'OieAdmin',
  authRequired: false,
};

export const urlInfoCardWithResourceText = (): JSX.Element => (
  <InfoCard data={urlInfoCardDataWithResourceText} />
);
urlInfoCardWithResourceText.story = {
  name: 'Info card with multiple resources',
};
