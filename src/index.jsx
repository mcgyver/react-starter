import React from 'react';
import ReactDOM from 'react-dom';
import './img/favicon.png';
import Button from 'material-ui/Button';
import './css/index.css';

ReactDOM.render(
    <div>
        <h1>Bem Vindo ao React</h1>
        <Button> Welcome React</Button>
    </div>,
    document.querySelector("#main")
)