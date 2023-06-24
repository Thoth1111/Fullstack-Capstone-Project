import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import {vespaApi} from './redux/vespaAPI';
import './index.css';
import AppWrapper from './AppWrapper';
import App from './App';

store.dispatch(vespaApi.endpoints.getAllVespas.initiate());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <AppWrapper>
            <App />
          </AppWrapper>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
