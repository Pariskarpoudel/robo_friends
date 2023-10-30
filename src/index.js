import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Card from './Card.js'

import reportWebVitals from './reportWebVitals';
import 'tachyons'
import App from './container_classes/App.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 10 otai card lai <card>  lekhna jheu hunxa , so estoma always try to maintain parent-child relationships, and every ind. chijlai small comp ma break garni */}
    {/* so create a parent-like cardlist component which contains all the card components */}
    {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
