import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {LandingPage} from './views/LandingPage'
import {HashRouter,Routes,Route} from "react-router-dom";
import { Category } from './views/Category';
import { Product } from './views/Product';

ReactDOM.render(

  <HashRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<LandingPage/>}/>
        <Route path="category/:collection" element={<Category/>}/>
        <Route path="product/:_idT" element={<Product/>}/>
      </Route>
    </Routes>
  </HashRouter>,
document.getElementById('root')
);