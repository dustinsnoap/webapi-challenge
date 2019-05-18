import {createGlobalStyle} from 'styled-components'
import {reset} from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {box-sizing: border-box}
    html {
        font-size: 62.5%;
        height: 100%;
        width: 100%;
    }
    body {
        height: 100%;
        width: 100%;
    }
    #root {
        height: 100%;
    }
`

export default GlobalStyle