import React, { useState } from 'react';

import './header.scss';

export interface HeaderProps {
  onToggleHeader: (isCollapsed: boolean) => void;
}
/** Chat Box component */
export function Header({ onToggleHeader }: HeaderProps): JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onClick = () => {
    const newIsCollapsed = !isCollapsed;
    setIsCollapsed(newIsCollapsed);
    onToggleHeader(newIsCollapsed);
  };

  return (
    <div className='header' onClick={onClick}>
      {'OHM'}
    </div>
  );
}
