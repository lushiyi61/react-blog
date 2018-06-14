import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import MainRouter from './main/MainRouter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <MainRouter />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
