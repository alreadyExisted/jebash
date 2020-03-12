import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { register } from './sw'

import './theme/index.css'

ReactDOM.render(<App />, document.getElementById('root'))

register()
