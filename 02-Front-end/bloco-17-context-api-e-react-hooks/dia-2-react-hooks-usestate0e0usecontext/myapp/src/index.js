// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FormProvider from './context/FormProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FormProvider>
    <App />
  </FormProvider>,
);
