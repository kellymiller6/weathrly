import React from 'react'
import reactDOM from 'react-dom'
import Weathrly from './components/Weathrly'

reactDOM.render(<Weathrly source='https://weatherly-api.herokuapp.com/api/weather/' />, document.getElementById('application'))
