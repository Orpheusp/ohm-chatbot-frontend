import React from 'react';

import './action_button.scss';

export interface ActionButtonProps {
  label: string;
  isActive: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string;
}

/** Action Button component */
export function ActionButton({
  label,
  isActive,
  onClick,
  className,
}: ActionButtonProps): JSX.Element {
  const classNames = ['action-button'];
  if (className) {
    classNames.push(className);
  }

  if (isActive) {
    classNames.push('action-button--active');
    return (
      <div className={classNames.join(' ')} onClick={onClick}>
        {label}
      </div>
    );
  } else {
    return <div className={classNames.join(' ')}>{label}</div>;
  }
}
