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
  onClick?: () => void;
}

/** Cart Base component */
export function CardBase({
  size,
  style,
  children,
  className,
  onClick,
}: CardBaseProps): JSX.Element {
  const classNames = ['card-base', size, style];
  if (onClick) {
    classNames.push('card-base--clickable');
  }
  if (className) {
    classNames.push(className);
  }

  return (
    <div className={classNames.join(' ')} onClick={onClick}>
      {children}
    </div>
  );
}
