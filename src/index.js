import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';

console.log("Initializing Google Analytics")
ReactGA.initialize(process.env.REACT_APP_GA_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
