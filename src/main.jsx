import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/styles.css';
import { PasswordGeneratorApp } from './PasswordGeneratorApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PasswordGeneratorApp />
  </React.StrictMode>
)
