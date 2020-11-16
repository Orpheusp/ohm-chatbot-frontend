import React from 'react';

import { ChatCardSender, ChatCardData } from 'src/datatypes';
import {
  CardBase,
  CardBaseStyle,
  CardBaseSize,
} from 'src/components/card_base/card_base';

import './chat_card.scss';

export interface ChatCardProps {
  data: ChatCardData;
  className?: string;
}

/** Chat Cart component */
export function ChatCard({ data, className }: ChatCardProps): JSX.Element {
  const { message, sender } = data;
  const style =
    sender == ChatCardSender.USER ? CardBaseStyle.RED : CardBaseStyle.WHITE;
  const classNames = [
    'chat-card',
    sender == ChatCardSender.USER ? 'chat-card--user' : 'chat-card--bot',
  ];
  if (className) {
    classNames.push(className);
  }
  return (
    <CardBase
      size={CardBaseSize.SMALL}
      style={style}
      className={classNames.join(' ')}
    >
      <div>{message}</div>
    </CardBase>
  );
}
