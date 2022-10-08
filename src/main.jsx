import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './stateManagement/store/store'
import { Provider } from 'react-redux'
import { AppRouter } from './router/AppRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
       <AppRouter />
     </Provider>
  </React.StrictMode>
)
