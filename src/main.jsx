// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { Store } from './Stores/Store.js'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Provider store={Store}>
    <App />
  </Provider>
)
