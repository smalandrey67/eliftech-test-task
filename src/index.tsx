import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App'
import { GlobalStyled } from './accets/styled/Global.styled'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <BrowserRouter>
    <GlobalStyled />
    <App />  
  </BrowserRouter> 
)

