import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reducers from './components/redux/reducers/index'
import { createStore } from 'redux'
import { Provider } from 'react-redux';

const store = createStore(reducers);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
);
