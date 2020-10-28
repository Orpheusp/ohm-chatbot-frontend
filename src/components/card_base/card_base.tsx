import React from 'react';

import './card_base.scss';

export enum CardBaseSize {
  SMALL = 'card-base--small',
  MEDIUM = 'card-base--medium',
  LARGE = 'card-base--large',
}

export enum CardBaseStyle {
  RED = 'card-base--red',
  WHITE = 'card-base--white',
}

export interface CardBaseProps {
  size: CardBaseSize;
  style: CardBaseStyle;
  children: React.ReactNode;
  className?: string;
}

/** Cart Base component */
export function CardBase({
  size,
  style,
  children,
  className,
}: CardBaseProps): JSX.Element {
  return (
    <div className={`card-base ${size} ${style} ${className}`}>{children}</div>
  );
}
