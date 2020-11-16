import React, { useState } from 'react';

import './app_header.scss';

export interface HeaderProps {
  onToggleHeader: (isCollapsed: boolean) => void;
}
/** Chat Box component */
export function AppHeader({ onToggleHeader }: HeaderProps): JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onClick = () => {
    const newIsCollapsed = !isCollapsed;
    setIsCollapsed(newIsCollapsed);
    onToggleHeader(newIsCollapsed);
  };

  return (
    <div className='app-header' onClick={onClick}>
      {'OHM'}
    </div>
  );
}
