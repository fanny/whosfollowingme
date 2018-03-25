import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';

const vcard = document.getElementsByClassName('p-nickname vcard-username d-block')[0];

const app = document.createElement('div')

app.id = 'root';
let user = ''
if (vcard){ 
    vcard.appendChild(app); 
    user = vcard.textContent;
};

ReactDOM.render(<App user={user}/>, document.getElementById('root'));
