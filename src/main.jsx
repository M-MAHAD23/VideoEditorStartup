import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalProvider } from './Context/global';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
    <BrowserRouter>
          <App />
    </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>
);

reportWebVitals()
