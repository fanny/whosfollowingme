import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
/* global chrome */

const vcard = document.getElementsByClassName('p-nickname vcard-username d-block')[0];


const doTask = async () => {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({}, function (response) {
            resolve(response.currentUser);
        });
    });
};

var currentUser = 'oii';
const teste = async () => {
    const user = await doTask();
    currentUser = user;
    return user;
}

console.log(currentUser);

const app = document.createElement('div')

app.id = 'root';
let toUser = ''
if (vcard){ 
    vcard.appendChild(app); 
    toUser = vcard.textContent;
};

ReactDOM.render(<App toUser={toUser} currentUser={currentUser}/>, document.getElementById('root'));
