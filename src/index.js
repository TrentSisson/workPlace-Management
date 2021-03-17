import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { WorkPlace } from './WorkPlace.js';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router >
      <WorkPlace />
    </Router >
  </React.StrictMode>,
  document.getElementById('root')
);

