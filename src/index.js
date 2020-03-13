import React from 'react';
// import ReactDOM from 'react-dom';
import ReactZRenderer from './renderer/index';
import './index.css';
import App from './App/index';
import * as serviceWorker from './serviceWorker';

ReactZRenderer.render(<App />, document.getElementById('root'), {renderer: 'canvas'});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
