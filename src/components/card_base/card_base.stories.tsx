import React from 'react';

import { CardBase, CardBaseStyle, CardBaseSize } from './card_base';

export default {
  title: 'Card Base',
  component: CardBase,
};

const displayElement = <div>This is sample text.</div>;

export const small = (): JSX.Element => (
  <CardBase size={CardBaseSize.SMALL} style={CardBaseStyle.RED}>
    {displayElement}
  </CardBase>
);
small.story = {
  name: 'Small',
};

export const medium = (): JSX.Element => (
  <CardBase size={CardBaseSize.MEDIUM} style={CardBaseStyle.WHITE}>
    {displayElement}
  </CardBase>
);
medium.story = {
  name: 'Medium',
};

export const large = (): JSX.Element => (
  <CardBase size={CardBaseSize.LARGE} style={CardBaseStyle.WHITE}>
    {displayElement}
  </CardBase>
);
large.story = {
  name: 'Large',
};
