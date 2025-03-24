import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TubeApp from './tube-app.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TubeApp />
  </StrictMode>,
)
