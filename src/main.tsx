import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
// @ts-ignore
import './index.css'

createRoot(document.getElementById('root')!).render(  // infiring the type of root element (Assertion not null)
  <StrictMode>
    <App />
  </StrictMode>,
)
