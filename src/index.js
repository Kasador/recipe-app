import React from 'react';
import ReactDOM from 'react-dom';
import App from './Main/App';
import './reset.css';
import './index.scss';

const destination = document.querySelector('#root');

ReactDOM.render(<App />,  destination);