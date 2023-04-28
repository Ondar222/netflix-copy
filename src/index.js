import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/globals.css'
import './styles/header.css'
import './styles/main.css'
import Header from './components/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <body>

    <Header />
    <Main />
    <Footer />
     </body>
  
  </React.StrictMode>
);
