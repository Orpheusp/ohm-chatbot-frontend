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

const urlInfoCardDataWithMultipleResources: InformationCardData = {
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

export const urlInfoCardWithMultipleResources = (): JSX.Element => (
  <InfoCard data={urlInfoCardDataWithMultipleResources} />
);
urlInfoCardWithMultipleResources.story = {
  name: 'Info card with multiple resources',
};

const imageInfoCardData: InformationCardData = {
  supportingText: 'Carnegie Mellon University school mascot',
  resources: [
    {
      resourceText: 'Meet Scottie, our school mascot!',
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
  supportingText: "Carnegie Mellon University's Vision",
  resources: [
    {
      resourceText: "The school's vision is:",
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
