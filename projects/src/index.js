import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from './components/app'
import store from './config/store'
import GlobalStyle from './design/global_styles'

const root = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle />
        <App />
    </Provider>,
    root
)