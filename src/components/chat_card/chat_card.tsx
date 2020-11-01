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
}

/** Chat Cart component */
export function ChatCard({ data }: ChatCardProps): JSX.Element {
  const { message, sender } = data;
  const style =
    sender == ChatCardSender.USER ? CardBaseStyle.RED : CardBaseStyle.WHITE;
  const classNames = [
    'chat-card',
    sender == ChatCardSender.USER ? 'chat-card--user' : 'chat-card--bot',
  ];
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
