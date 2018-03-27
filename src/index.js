import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
/* global chrome */

const vcard = document.getElementsByClassName('p-nickname vcard-username d-block')[0];

let currentUser = '';
chrome.runtime.sendMessage({}, async (response) => {
    currentUser = await response.currentUser;
    console.log(currentUser);
});

const app = document.createElement('div')

app.id = 'root';
let toUser = ''
if (vcard){ 
    vcard.appendChild(app); 
    toUser = vcard.textContent;
};

ReactDOM.render(<App toUser={toUser} currentUser={currentUser}/>, document.getElementById('root'));
