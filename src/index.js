import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
/* global chrome */

const vcard = document.getElementsByClassName('p-nickname vcard-username d-block')[0];

chrome.runtime.sendMessage({}, (response) => {
    console.log(document.cookie);
    console.log(response);
});

const app = document.createElement('div')

app.id = 'root';
let user = ''
if (vcard){ 
    vcard.appendChild(app); 
    user = vcard.textContent;
};

ReactDOM.render(<App user={user}/>, document.getElementById('root'));
