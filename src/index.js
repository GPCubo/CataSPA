import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {LandingPage} from './views/LandingPage'
import {HashRouter,Routes,Route} from "react-router-dom";

ReactDOM.render(

  <HashRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<LandingPage/>}/>
      </Route>
    </Routes>
  </HashRouter>,
document.getElementById('root')
);