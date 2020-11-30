import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './app/app';

if (chrome?.runtime) {
  chrome.runtime.connect();
}

ReactDOM.render(<App />, document.getElementById('root'));
