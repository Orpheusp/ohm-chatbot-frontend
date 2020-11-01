import React from 'react';

import './action_button.scss';

export interface ActionButtonProps {
  label: string;
  isActive: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

/** Action Button component */
export function ActionButton({
  label,
  isActive,
  onClick,
}: ActionButtonProps): JSX.Element {
  if (isActive) {
    return (
      <div className={`action-button action-button--active`} onClick={onClick}>
        {label}
      </div>
    );
  } else {
    return <div className={'action-button'}>{label}</div>;
  }
}
