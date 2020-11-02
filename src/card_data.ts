import {
  CardResourceType,
  InformationCardData,
  CardDataType,
  ChatCardSender,
  ChatCardData,
  TutorialCardData,
  ForwardConditionType,
} from 'src/datatypes';

// Chat cards
export const userChatCard: ChatCardData = {
  type: CardDataType.CHAT_CARD,
  resourceCode: 'C01',
  sender: ChatCardSender.USER,
  message: 'Where can I find someone to help me with my recume?',
};

export const botChatCard: ChatCardData = {
  type: CardDataType.CHAT_CARD,
  resourceCode: 'C01',
  sender: ChatCardSender.BOT,
  message: 'Hi Scottie, how can I help you?',
};

// Info cards
export const urlInfoCardData: InformationCardData = {
  type: CardDataType.INFORMATION_CARD,
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

export const urlInfoCardDataWithMultipleResources: InformationCardData = {
  type: CardDataType.INFORMATION_CARD,
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

export const imageInfoCardData: InformationCardData = {
  type: CardDataType.INFORMATION_CARD,
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

export const textInfoCardData: InformationCardData = {
  type: CardDataType.INFORMATION_CARD,
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

// Tutorial cards
export const oieCardData: TutorialCardData = {
  type: CardDataType.TUTORIAL_CARD,
  title: 'Reach out to OIE using this quick tutorial!',
  resourceCode: 'T01',
  department: 'OIE',
  resources: [],
  owner: 'OieAdmin',
  supportingText: 'To contact OiE, follow the simple steps below',
  authRequired: false,
};

export const cpdcAppointmentCardData: TutorialCardData = {
  type: CardDataType.TUTORIAL_CARD,
  title: 'Book An Appointment with CPDC',
  resourceCode: 'T01',
  department: 'CPDC',
  resources: [
    {
      resourceText: 'Go to Handshake',
      resource:
        'Follow the link https://cmu.joinhandshake.com/ to get to the front ' +
        'page of Handshake system, where you’d have access to career-related ' +
        'resources by the school.',
      resourceType: CardResourceType.TXT,
      forwardConditionType: ForwardConditionType.URL_MATCH,
      forwardCondition: 'https://cmu.joinhandshake.com/',
    },
    {
      resourceText: 'Sign into Handshake',
      resource: 'Use your Andrew ID to log into the Handshake system.',
      resourceType: CardResourceType.TXT,
    },
    {
      resourceText: 'Click on "Career center" tile',
      resource:
        'Click on the "Career center" tile to enter the CPDC page in ' +
        'Handshake. It should be the first tile on the right of the first ' +
        'row on your Handshake front page.',
      resourceType: CardResourceType.TXT,
    },
    {
      resourceText: 'Click on "Appointments" tile',
      resource:
        'Click on the "Appointments" tile on the CPDC page in Handshake. ' +
        'It should be the first tile under “What can we help you find?”.',
      resourceType: CardResourceType.TXT,
    },
  ],
  owner: 'CpdcAdmin',
  supportingText: '',
  authRequired: false,
};
