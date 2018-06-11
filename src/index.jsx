import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './img/favicon.png';
import './css/index.css';
import './img/icon-72x72.png';
import './img/icon-96x96.png';
import './img/icon-128x128.png';
import './img/icon-144x144.png';
import './img/icon-152x152.png';
import './img/icon-192x192.png';

import Home from './components/Home';

ReactDOM.render(
    <BrowserRouter>
        <Home/>
    </BrowserRouter>,
    document.querySelector("#main")
)