import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import WorksSection from './components/sections/WorksSection.tsx'

const istock = [{
  imageUrl: import.meta.env.BASE_URL+ "/assets/istock-app/1.png",
  imageDescription: 'test-image-description',
  title: "stuff",
  detailText: 'this is a screen'
},
{
  imageUrl: import.meta.env.BASE_URL+ "/assets/istock-app/2.png",
  imageDescription: 'test-image-description',
  title: "things",
  detailText: 'this is a screen'
},
{
  imageUrl: import.meta.env.BASE_URL+ "/assets/istock-app/3.png",
  imageDescription: 'test-image-description',
  title: "cosas",
  detailText: 'this is a screen'
},
{
  imageUrl: import.meta.env.BASE_URL+ "/assets/istock-app/4.png",
  imageDescription: 'test-image-description',
  title: "more stuff",
  detailText: 'this is a screen'
},
]


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path='*' element={<App />} />
        <Route path='istock-app' element={
          <WorksSection sectionTitle={'iStock'} sectionDetailText={'I made this for Getty'} works={istock}
        />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
