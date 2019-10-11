import React from 'react'
import { render } from 'react-dom'
import App from './MyApp'
import App2 from './AppTitle'
render(<App />, document.getElementById('reactinjectedhere'))
render(<App2 />, document.getElementById('reactinjectedhere2'))
