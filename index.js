import React from 'react';
import ReactDOM from 'react-dom/client';
import './dist/css/style.css';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Products from './components/Products';
import Contato from './components/Contato';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Carousel/>
    <Products/>
    <Contato/>
    
  </React.StrictMode>
);



