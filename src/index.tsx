import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { App } from './App'
import { GlobalStyled } from './accets/styled/Global.styled'

import { setupStore } from './store/store'
const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyled />
      <App />  
    </BrowserRouter> 
  </Provider>
)

