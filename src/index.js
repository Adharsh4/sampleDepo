import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reducer from './components/utility/reducer';
import { initialState } from './components/utility/reducer';
import { StateProvider } from './components/utility/stateProvider';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(

    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>,
  document.getElementById('root'),
);
