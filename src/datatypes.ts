export enum CardResourceType {
  URL = 'URL',
  TXT = 'TXT',
  IMG = 'IMG',
}

export enum CardDataType {
  CHAT_CARD = 'C',
  INFORMATION_CARD = 'I',
  TUTORIAL_CARD = 'T',
}

export interface BaseCardData {
  type: CardDataType;
}

export enum ChatCardSender {
  USER = 'USR',
  BOT = 'BOT',
}

export interface ChatCardData extends BaseCardData {
  message: string;
  sender: ChatCardSender;
  resourceCode: string;
}

export interface InformationCardResource {
  resource: string;
  resourceText?: string;
  resourceType: CardResourceType;
}

export interface InformationCardData extends BaseCardData {
  title: string;
  resourceCode: string;
  department: string;
  resources?: InformationCardResource[];
  owner: string;
  supportingText: string;
  authRequired: boolean;
}

export enum ForwardConditionType {
  URL_MATCH = 'URL_MATCH',
}

export interface TutorialCardResource {
  resource: string;
  resourceText?: string;
  resourceType: CardResourceType;
  forwardCondition?: string;
  forwardConditionType?: ForwardConditionType;
}

export interface TutorialCardData extends BaseCardData {
  title: string;
  resourceCode: string;
  department: string;
  resources: TutorialCardResource[];
  owner: string;
  supportingText: string;
  authRequired: boolean;
}

export function instanceOfChatCardData(
  object: BaseCardData
): object is ChatCardData {
  return object.type == CardDataType.CHAT_CARD;
}

export function instanceOfInformationCardData(
  object: BaseCardData
): object is InformationCardData {
  return object.type == CardDataType.INFORMATION_CARD;
}

export function instanceOfTutorialCardData(
  object: BaseCardData
): object is TutorialCardData {
  return object.type == CardDataType.TUTORIAL_CARD;
}
