import React from 'react';
import ReactDOM from 'react-dom';
import './img/favicon.png';
import Button from 'material-ui/Button';
import './css/index.css';
import './img/icon-72x72.png';
import './img/icon-96x96.png';
import './img/icon-128x128.png';
import './img/icon-144x144.png';
import './img/icon-152x152.png';
import './img/icon-192x192.png';

ReactDOM.render(
    <div>
        <h1>Bem Vindo ao React</h1>
        <Button> Welcome React</Button>
    </div>,
    document.querySelector("#main")
)