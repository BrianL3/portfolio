import './App.css'
import WorksSection from './components/sections/WorksSection'
import TextSection from './components/text-section/TextSection'

function App() {
  const publishedWorks = [{
    linkUrl: "istock-app",
    imageUrl: import.meta.env.BASE_URL+"/istock-app/app-icon.png",
    imageDescription: "iStock's app icon",
    title: "iStock by Getty",
    detailText: "The iStock brand's asset storefront for iOS devices."
  },
  {
    linkUrl: "releases",
    imageUrl: import.meta.env.BASE_URL+"/releases-app/app-icon.png",
    imageDescription: 'test-image-description',
    title: "Releases",
    detailText: 'Getty Images Releases is a free all-in-one digital release management app for Getty Images and iStock creators that lets you create, complete, and manage all of your model and property releases on your smart phone or mobile device. Releases enables creators to move off paper release forms and adopt a 100% digital release workflow. Create a new model or property release, have the model or property agent complete and sign it right there on your device, and then save it.'
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
