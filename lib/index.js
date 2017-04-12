import React from 'react';
import reactDOM from 'react-dom';
import Weathrly from './components/Weathrly.js';

reactDOM.render(<Weathrly source='http://api.wunderground.com/api/c9d3da5dd7fd3d9e/hourly/conditions/forecast10day/q/'/>, document.getElementById('application'))
