import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';
import './index.css'

ReactDom.render(
  <App className="app"/>,
  document.getElementById('root')
)
