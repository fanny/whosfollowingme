import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
/* global chrome */

const vcard = document.getElementsByClassName('p-nickname vcard-username d-block')[0];


const doTask = () => {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({}, (response) => {
            resolve(response.currentUser);
        });
    });
};

const app = document.createElement('div')

app.id = 'root';
let toUser = ''
if (vcard){ 
    vcard.appendChild(app); 
    toUser = vcard.textContent;
    doTask().then(response => { 
        ReactDOM.render(<App toUser={toUser} currentUser={response}/>, document.getElementById('root'));
    }).catch(err =>{})
};


