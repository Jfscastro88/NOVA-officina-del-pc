import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import WorkshopHardware from './pages/WorkshopHardware.jsx'
import Workshop27Giugno from './pages/Workshop27Giugno.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/workshop-hardware" element={<WorkshopHardware />} />
        <Route path="/workshop/27-giugno" element={<Workshop27Giugno />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
