import React from 'react';

import './tutorial_button.scss';

export interface TutorialButtonProps {
  label: string;
  isActive: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

/** Tutorial Button component */
export function TutorialButton({
  label,
  isActive,
  onClick,
}: TutorialButtonProps): JSX.Element {
  if (isActive) {
    return (
      <div
        className={`tutorial-button tutorial-button--active`}
        onClick={onClick}
      >
        {label}
      </div>
    );
  } else {
    return <div className={'tutorial-button'}>{label}</div>;
  }
}
