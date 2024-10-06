import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import {ThirdwebProvider } from '@thirdweb-dev/react';


import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider activeChain={"sepolia"} >
    <Router>
      <App/>
    </Router>
  </ThirdwebProvider>
);