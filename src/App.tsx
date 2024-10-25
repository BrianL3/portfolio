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
            detailText: 'I have experience across a broad range of mobile and web frontend technologies: Swift, React Native, JavaScript, Node, TypeScript, and Kotlin.',
            tagline: "And I'm ready to build."
          }
        ]}
      />
      <WorksSection
        sectionTitle={'Published Works'}
        sectionDetailText={'Explore a selection of projects that showcase my contributions across various organizations. Whether through professional endeavors or open-source collaborations, each work reflects my commitment to innovation and quality in software development.'}
        works={publishedWorks} />
    </div>
  )
}

export default App
