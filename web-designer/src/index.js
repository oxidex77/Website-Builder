import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import reportWebVitals from './utils/reportWebVitals';
import store from './utils/store';
import App from './containers/App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
