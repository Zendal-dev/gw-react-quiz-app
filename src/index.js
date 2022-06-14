import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/store'

import App from './App'
import { GlobalStyles } from './styles'

ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <Provider store={ store }>
            <App/>
            <GlobalStyles/>
         </Provider>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById('root')
)

