import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import MobileScreenSection from './components/sections/MobileScreenSection.tsx'
import { istock } from './data/PublishedWork.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path='*' element={<App />} />
        <Route path='istock-app' element={
          <MobileScreenSection sectionTitle={'iStock'} sectionDetailText={'An asset storefront application for iStock, a property of Getty Images. You can the entire iStock image collection based on any criteria you can dream of, including looking for images similar to a picture you upload. See larger images in full-screen view with rotation and pinch-and-zoom. Save images to your existing Boards, create new Boards and use the same Boards on your iOS device or your computer. Share images and Boards via email and messaging'} works={istock}
        />} />
        <Route path='releases-app' element={
          <MobileScreenSection sectionTitle={'Releases'} sectionDetailText={'Getty Images Releases is a free all-in-one digital release management app for Getty Images and iStock creators that lets you create, complete, and manage all of your model and property releases on your smart phone or mobile device. Releases enables creators to move off paper release forms and adopt a 100% digital release workflow. Create a new model or property release, have the model or property agent complete and sign it right there on your device, and then save it.'} works={istock}
        />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
