/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ScrollToTop } from './components';
import './index.css';
import App from './App';

import { Globalstyle } from './theme/GlobalStyle';
import { ThemeProvider } from './context/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <ThemeProvider>
            <Globalstyle />
            <ScrollToTop />
            <App />
        </ThemeProvider>
    </Router>
);
