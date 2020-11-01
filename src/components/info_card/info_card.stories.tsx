import React from 'react';

import { InfoCard } from './info_card';

import { CardResourceType, InformationCardData } from 'src/datatypes';

export default {
  title: 'Info Card',
  component: InfoCard,
};

const urlInfoCardData: InformationCardData = {
  title: 'Find immigration information with OIE',
  supportingText:
    "Here you'll find government resources and links related to immigration " +
    'and international travel, including USCIS, SEVIS, visas, and embassy ' +
    'information.',
  resources: [
    {
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

const urlInfoCardDataWithMultipleResources: InformationCardData = {
  title: 'Explore OIE for student visa information',
  supportingText: 'Know all about your visa here',
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

export const urlInfoCardWithMultipleResources = (): JSX.Element => (
  <InfoCard data={urlInfoCardDataWithMultipleResources} />
);
urlInfoCardWithMultipleResources.story = {
  name: 'Info card with multiple resources',
};

const imageInfoCardData: InformationCardData = {
  title: 'Carnegie Mellon University school mascot',
  supportingText: 'Meet Scottie, our school mascot!',
  resources: [
    {
      resource:
        'https://www.cmu.edu/brand/brand-guidelines/images/scottycrop2-600x600.png',
      resourceType: CardResourceType.IMG,
    },
  ],
  resourceCode: 'I10',
  department: 'university',
  owner: 'UniversityAdmin',
  authRequired: false,
};

export const imageInfoCard = (): JSX.Element => (
  <InfoCard data={imageInfoCardData} />
);
imageInfoCard.story = {
  name: 'Info card with image',
};

const textInfoCardData: InformationCardData = {
  title: "Carnegie Mellon University's Vision",
  supportingText: "The school's vision is:",
  resources: [
    {
      resource:
        'Carnegie Mellon University will have a transformative impact on ' +
        'society through continual innovation in education, research, ' +
        'creativity, and entrepreneurship.',
      resourceType: CardResourceType.TXT,
    },
  ],
  resourceCode: 'I10',
  department: 'university',
  owner: 'UniversityAdmin',
  authRequired: false,
};

export const textInfoCard = (): JSX.Element => (
  <InfoCard data={textInfoCardData} />
);
textInfoCard.story = {
  name: 'Info card with text',
};
