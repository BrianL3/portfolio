import './App.css'
import WorksSection from './components/sections/WorksSection'
import { TextSection } from './components/text-section/TextSection'

function App() {
  const publishedWorks = [{
    linkUrl: "test-link",
    imageUrl: "test-image-url",
    imageDescription: 'test-image-description',
    title: "test title card",
    detailText: ''
  }]

  return (
    <>
      <TextSection />
      <WorksSection
        sectionTitle={'Published Works'}
        sectionDetailText={'I made these for various organizations'}
        works={publishedWorks} />
    </>
  )
}

export default App
