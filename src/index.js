import React from 'react';
import ReactDOM from 'react-dom';

import App from './container/App';
import getCookie from './utils/getCookie';

const vcard = document.getElementsByClassName('p-nickname vcard-username d-block')[0];

const app = document.createElement('div');
app.id = 'root';

let toUser = '';

if (vcard) { 
    toUser = vcard.textContent.trim();
    vcard.appendChild(app); 
};

getCookie().then(response => { 
    console.log('ahahha', toUser, response);
    ReactDOM.render(<App toUser={toUser} currentUser={response} />, document.getElementById('root'));
}).catch(err => {});
