import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import AppWrapper from './AppWrapper';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppWrapper>
          <App />
        </AppWrapper>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
