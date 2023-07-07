import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { getElementById } from './_dom/dom-utils';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    console.log('Hello world');
  }

  override render(): JSX.Element {
    return <>
      <h1>Express</h1>
      <p>Welcome to Express</p>
      <div id='app'></div>
    </>
  }
}

const root = ReactDOM.createRoot(getElementById('content')!);
root.render(
  <App/>
);
