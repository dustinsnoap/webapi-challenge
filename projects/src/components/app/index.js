import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import Projects from '../projects'

const App = () =>
    <div className='app'>
        <Router>
            <Projects />
        </Router>
    </div>

export default App