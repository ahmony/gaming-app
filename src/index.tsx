import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import dataFetchingReducer from './reducers/dataFetching'
import { createStore } from 'redux'
import { Provider } from 'react-redux';

const store = createStore(dataFetchingReducer);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
);
