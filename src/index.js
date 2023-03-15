/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ScrollToTop } from './components';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { Globalstyle } from './theme/GlobalStyle';
import { ThemeProvider } from './context/ThemeProvider';
import { FilterProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <FilterProvider>
      <ThemeProvider>
        <Globalstyle />
        <ScrollToTop />
        <ToastContainer
          closeButton={true}
          autoClose={5000}
          position={'bottom-center'}
        />
        <App />
      </ThemeProvider>
    </FilterProvider>
  </Router>
);
