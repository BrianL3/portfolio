import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import MobileScreenSection from './components/sections/MobileScreenSection.tsx'
import { istock, releases, gettyIOS, cdp } from './data/PublishedWork.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path='*' element={<App />} />
        <Route path='istock-app' element={
          <MobileScreenSection sectionTitle={'iStock'} sectionDetailText={'The iOS asset storefront application for iStock (a property of Getty Images). Written starting in 2017 in Swift, this app uses mostly UIKit with a few scattered shared components in Objective C. The networking services are in Swift, and are shared as a package between the iStock and Getty iOS apps. The code is proprietary and belongs to Getty Images.'} works={istock}
        />} />
        <Route path='getty-app' element={
          <MobileScreenSection sectionTitle={'Getty'} sectionDetailText={'The iOS asset storefront application for Getty. Written starting in 2015 in Objective-C, transitioning to Swift in 2016 and later. The code is proprietary and belongs to Getty Images.'} works={gettyIOS}
        />} />
        <Route path='releases-app' element={
          <MobileScreenSection sectionTitle={'Releases'} sectionDetailText={'Releases was written in 2024 utilizing SwiftUI. The code is proprietary and belongs to Getty Images.'} works={releases}
        />} />
        <Route path='cdp' element={
          <MobileScreenSection sectionTitle={'Council Data Project'} sectionDetailText={'Council Data Project (CDP) is an open-source project dedicated to providing journalists, activists, researchers, and all members of each community we serve with the tools they need to stay informed and hold their council members accountable. By combining and simplifying sources of information on council meetings and actions, CDP ensures that everyone is empowered to participate in local government.'} works={cdp}
        />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
