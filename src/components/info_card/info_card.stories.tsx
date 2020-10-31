import React from 'react';

import { InfoCard, InfoCardMetadataType, InfoCardData } from './info_card';

export default {
  title: 'Info Card',
  component: InfoCard,
};

const cpdcInfoCardData: InfoCardData = {
  title: 'Career & Professional Development Center (CPDC)',
  content:
    'We provide services, programs and materials focusing on career ' +
    'exploration and decision making, professional development, experiential ' +
    'learning and employment assistance.',
  metadata: [
    {
      type: InfoCardMetadataType.ADDRESS,
      label: '5000 Forbes Avenue Pittsburgh, PA 15213',
    },
    {
      type: InfoCardMetadataType.EMAIL_ADDRESS,
      label: 'career@andrew.cmu.edu',
    },
    {
      type: InfoCardMetadataType.URL,
      label: 'www.cmu.edu/career/',
    },
    {
      type: InfoCardMetadataType.PHONE_NUMBER,
      label: '(412)268-2064',
    },
  ],
};

export const cpdcInfoCard = (): JSX.Element => (
  <InfoCard data={cpdcInfoCardData} />
);
cpdcInfoCard.story = {
  name: 'CPDC Info Card',
};
