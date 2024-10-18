import './App.css'
import WorksSection from './components/sections/WorksSection'
import TextSection from './components/text-section/TextSection'

function App() {
  const publishedWorks = [{
    linkUrl: "istock-app",
    imageUrl: "test-image-url",
    imageDescription: 'test-image-description',
    title: "iStock",
    detailText: ''
  },
  {
    linkUrl: "test-link",
    imageUrl: "test-image-url",
    imageDescription: 'test-image-description',
    title: "Getty Images",
    detailText: ''
  },
  {
    linkUrl: "test-link",
    imageUrl: "test-image-url",
    imageDescription: 'test-image-description',
    title: "Releases",
    detailText: ''
  },
  {
    linkUrl: "test-link",
    imageUrl: "test-image-url",
    imageDescription: 'test-image-description',
    title: "Getty/iStock Android",
    detailText: ''
  },
  {
    linkUrl: "test-link",
    imageUrl: "test-image-url",
    imageDescription: 'test-image-description',
    title: "Council Data Project",
    detailText: ''
  },
]

  return (
    <>
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
    </>
  )
}

export default App
