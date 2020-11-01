export enum CardResourceType {
  URL = 'URL',
  TXT = 'TXT',
  IMG = 'IMG',
}

export interface InformationCardResource {
  resource: string;
  resourceText?: string;
  resourceType: CardResourceType;
}

export interface InformationCardData {
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

export interface TutorialCardData {
  title: string;
  resourceCode: string;
  department: string;
  resources: TutorialCardResource[];
  owner: string;
  supportingText: string;
  authRequired: boolean;
}
