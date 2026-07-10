import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import Layout from './components/Layout.jsx'
import App from './App.jsx'
import Privacy from './pages/Privacy.jsx'
import WorkshopDay from './pages/WorkshopDay.jsx'
import TeacherDay from './pages/TeacherDay.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/workshop/:workshopId" element={<WorkshopDay />} />
          <Route path="/docenti/:workshopId" element={<TeacherDay />} />
          <Route path="/workshop-hardware" element={<Navigate to="/docenti/2026-06-27" replace />} />
          <Route path="/workshop/27-giugno" element={<Navigate to="/workshop/2026-06-27" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    <Analytics />
  </StrictMode>,
)
