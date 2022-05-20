import React from 'react'
import ReactDOM from 'react-dom/client'
import '/node_modules/antd/dist/antd.css'
import Home from './pages/home'
import { Provider } from 'react-redux'
import store from './core/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>
)
