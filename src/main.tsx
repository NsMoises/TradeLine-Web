import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App'
import { PrivacyPage, TermsPage } from './pages/LegalPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacidad" element={<PrivacyPage />} />
        <Route path="/terminos" element={<TermsPage />} />
        <Route path="*" element={<App />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  </StrictMode>,
)
