import './App.css'
import WorksSection from './components/sections/WorksSection'
import TextSection from './components/text-section/TextSection'
import { publishedWorks } from './data/PublishedWork'

function App() {
  return (
    <div className="mzp-l-content mzp-t-content-xl">
      <TextSection
        title={"Hi, I'm Brian"}
        textblocks={[
          {
            detailText: 'Broad experience across mobile and web frontend technologies',
            tagline: "And I'm ready to build."
          }
        ]}
      />
      <WorksSection
        sectionTitle={'Published Works'}
        sectionDetailText={'I made these for various organizations'}
        works={publishedWorks} />
    </div>
  )
}

export default App
