import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/campers-rental">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
