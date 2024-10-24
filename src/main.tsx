import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import MobileScreenSection from './components/sections/MobileScreenSection.tsx'
import { istock, releases, gettyIOS } from './data/PublishedWork.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path='*' element={<App />} />
        <Route path='istock-app' element={
          <MobileScreenSection sectionTitle={'iStock'} sectionDetailText={'technical details of the istock app'} works={istock}
        />} />
        <Route path='getty-app' element={
          <MobileScreenSection sectionTitle={'Getty'} sectionDetailText={'The asset storefront application for Getty.'} works={gettyIOS}
        />} />
        <Route path='releases-app' element={
          <MobileScreenSection sectionTitle={'Releases'} sectionDetailText={'Releases was written in 2024 utilizing SwiftUI.'} works={releases}
        />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
