import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import Main from './Main.js'
const template = React.createElement('p', {}, 'Hello from react');

ReactDOM.render(<Main/>, document.getElementById('root'));