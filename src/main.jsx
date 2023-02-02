import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/*Aquí se importa el módulo BrowserRouter */
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
