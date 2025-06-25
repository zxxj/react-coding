// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // 开发模式下StrictMode会导致额外的渲染
  // <StrictMode>
    <App />
  // </StrictMode>,
)
