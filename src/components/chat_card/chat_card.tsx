import React from 'react';

import {
  CardBase,
  CardBaseStyle,
  CardBaseSize,
} from 'src/components/card_base/card_base';

import './chat_card.scss';

export enum ChatCardSender {
  USER = 'user',
  BOT = 'bot',
}

export interface ChatCardProps {
  message: string;
  from: ChatCardSender;
}

/** Chat Cart component */
export function ChatCard({ message, from }: ChatCardProps): JSX.Element {
  const style =
    from == ChatCardSender.USER ? CardBaseStyle.RED : CardBaseStyle.WHITE;
  return (
    <CardBase
      size={CardBaseSize.SMALL}
      style={style}
      className={`chat-card chat-card--${from}`}
    >
      <div>{message}</div>
    </CardBase>
  );
}
