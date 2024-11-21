const istock = [{
    imageUrl: import.meta.env.BASE_URL+ "/istock-app/1.png",
    imageDescription: 'istock ios app homepage',
    title: "Home",
    detailText: 'iStock was written before SwiftUI. All image grids you see are custom-made. The home page tracks user\'s recent searches, so they can start back right where they left off. It also provides a showcase of curated sets of photos.'
  },
  {
    imageUrl: import.meta.env.BASE_URL+ "/istock-app/2.png",
    imageDescription: 'istock user feed controls',
    title: "Customers First",
    detailText: 'The app has a number of features to improve a customer\'s experience. They can see recently viewed images and searches, save great pictures to \"boards\", and even follow their favorite artists.'
  },
  {
    imageUrl: import.meta.env.BASE_URL+ "/istock-app/3.png",
    imageDescription: 'istock search',
    title: "Search",
    detailText: "iStock\'s catalogue is vast. Our search feature leverages a REST API to help narrow the field to what you\'re looking for. There's even a search-by-image function if you already have something close to what you want - it uses S3 storage buckets to temporarily house an uploaded image."
  },
  {
    imageUrl: import.meta.env.BASE_URL+ "/istock-app/4.png",
    imageDescription: 'rotating curated sets',
    title: "Curation by Experts",
    detailText: "iStock has amazing imagery, and the company has experts who curate images into sets based on trends in the marketplace. We leverage that work in the app, making sure that the front page has fresh offerings for people browsing for inspiring imagery."
  },
]
const releases = [
  {
    imageUrl: import.meta.env.BASE_URL+ "/releases-app/1.png",
    imageDescription: 'test-image-description',
    title: "Select a Release Type",
    detailText: 'The Releases app is full-service, allowing the photographer to generate releases for models or properties. Note that all icons are SVG, for a pixel-perfect look across all device sizes.'
  },
  {
    imageUrl: import.meta.env.BASE_URL+ "/releases-app/3.png",
    imageDescription: 'test-image-description',
    title: "Form Validation",
    detailText: 'Forms are validated in data stores - this is an important separation of concerns so that any validators can be unit-tested. Here, we use a red underscore top notify the user that a field is in need of correction.'
  },
  {
    imageUrl: import.meta.env.BASE_URL+ "/releases-app/2.png",
    imageDescription: 'test-image-description',
    title: "Privacy Built-in",
    detailText: "Built with privacy in mind, the app protects the photographer from models/representatives accessing their personally-identifying information."
  },
  {
    imageUrl: import.meta.env.BASE_URL+ "/releases-app/share-release.gif",
    imageDescription: 'test-image-description',
    title: "Sharing a Release",
    detailText: "Once completed in the app, a PDF of the release is generated. ShareSheet makes the next steps easy. The release can be saved to Files for the photographer's records, and messaged over to the model as well."
  },
]

const gettyIOS = [
  {
    imageUrl: import.meta.env.BASE_URL+ "/getty-ios-app/getty-ios-1.png",
    imageDescription: 'test-image-description',
    title: "stuff",
    detailText: 'this is a screen'
  },
  {
    imageUrl: import.meta.env.BASE_URL+ "/getty-ios-app/getty-ios-2.png",
    imageDescription: 'test-image-description',
    title: "stuff",
    detailText: 'this is a screen'
  },
  {
    imageUrl: import.meta.env.BASE_URL+ "/getty-ios-app/getty-ios-3.png",
    imageDescription: 'test-image-description',
    title: "stuff",
    detailText: 'this is a screen'
  },
  {
    imageUrl: import.meta.env.BASE_URL+ "/getty-ios-app/getty-ios-4.png",
    imageDescription: 'test-image-description',
    title: "stuff",
    detailText: 'this is a screen'
  },
  {
    imageUrl: import.meta.env.BASE_URL+ "/getty-ios-app/getty-ios-5.png",
    imageDescription: 'test-image-description',
    title: "stuff",
    detailText: 'this is a screen'
  },
  {
    imageUrl: import.meta.env.BASE_URL+ "/getty-ios-app/getty-ios-6.png",
    imageDescription: 'test-image-description',
    title: "stuff",
    detailText: 'this is a screen'
  }
]

const cdp = [
  
  {
    imageUrl: import.meta.env.BASE_URL+ "/cdp/cdp-events.png",
    imageDescription: 'CDP screenshot of event tracking',
    title: "Event Tracking",
    detailText: 'Pick any phrase and search through timestamped transcripts.'
  },
  {
    imageUrl: import.meta.env.BASE_URL+ "/cdp/cdp-legislation-tracking.png",
    imageDescription: 'CDP screenshot of legislation history tracker',
    title: "Stay on Top of Local Legislation",
    detailText: 'Pick any phrase and search through timestamped transcripts.'
  },
  {
    imageUrl: import.meta.env.BASE_URL+ "/cdp/cdp-search.png",
    imageDescription: 'test-image-description',
    title: "Providing Trackability",
    detailText: 'Track legislation you care about through the council process.'
  },
  {
    imageUrl: import.meta.env.BASE_URL+ "/cdp/cdp-searchable-transcripts.png",
    imageDescription: 'test-image-description',
    title: "Providing Accountability",
    detailText: 'Access full voting records and contact info of each council member.'
  },
  {
    imageUrl: import.meta.env.BASE_URL+ "/cdp/cdp-accountability.png",
    imageDescription: 'test-image-description',
    title: "Providing Accountability",
    detailText: 'Pick any phrase and search through timestamped transcripts.'
  },
]

const aas = [
  {
    imageUrl: import.meta.env.BASE_URL+ "/aas/home-screen.png",
    imageDescription: 'android app home',
    title: "Home",
    detailText: 'Access full voting records and contact info of each council member.'
  },
  {
    imageUrl: import.meta.env.BASE_URL+ "/aas/boards.png",
    imageDescription: 'android app boards',
    title: "Save Faves",
    detailText: 'Something about boards.'
  },
  {
    imageUrl: import.meta.env.BASE_URL+ "/aas/curated-set.png",
    imageDescription: 'android app curated',
    title: "Stay on Top of Local Legislation",
    detailText: 'Pick any phrase and search through timestamped transcripts.'
  },
  {
    imageUrl: import.meta.env.BASE_URL+ "/aas/editorial-search.png",
    imageDescription: 'android app search',
    title: "Providing Trackability",
    detailText: 'Track legislation you care about through the council process.'
  },
]



const publishedWorks = [{
  linkUrl: "istock-app",
  imageUrl: import.meta.env.BASE_URL+"istock-app/app-icon.png",
  imageDescription: "iStock's app icon",
  title: "iStock by Getty",
  detailText: "An asset storefront application for iStock, a property of Getty Images. You can search the entire iStock image collection based on any criteria you can dream of, including looking for images similar to a picture you upload. See larger images in full-screen view with rotation and pinch-and-zoom. Save images you like to Boards, and share them via email and messaging."
},
{
  linkUrl: "releases-app",
  imageUrl: import.meta.env.BASE_URL+"releases-app/app-icon.png",
  imageDescription: 'ios releases app icon',
  title: "Releases",
  detailText: 'Getty Images Releases is a free all-in-one digital release management app for Getty Images and iStock creators that lets you create, complete, and manage all of your model and property releases on your phone. Releases enables creators to adopt a 100% digital release workflow. Create a new model or property release, have the model or property agent complete and sign it right there on your device.'
},
{
  linkUrl: "getty-app",
  imageUrl: import.meta.env.BASE_URL+"getty-ios-app/getty-ios-icon.png",
  imageDescription: 'getty images ios storefront app icon',
  title: "Getty on iOS",
  detailText: 'Designed for creative and media professionals, and photography enthusiasts everywhere. Search, save and share our spectacular collection of creative, editorial and archival imagery and video — wherever and whenever you want.'
},
{
  linkUrl: "aas",
  imageUrl: import.meta.env.BASE_URL+"imgs/android_robot.png",
  imageDescription: 'test-image-description',
  title: "Getty/iStock Android",
  detailText: 'The asset storefront for Android users. They can seamlessly browse and download their purchased assets, while also organizing their favorites into customizable boards for easy access later. This app was written in Kotlin with flavors: one for Getty and one for iStock. It offers the same intuitive interface for both brands, ensuring that users can manage their digital assets effortlessly.'
},
{
  linkUrl: "cdp",
  imageUrl: import.meta.env.BASE_URL+"imgs/cdp-icon.png",
  imageDescription: 'test-image-description',
  title: "Council Data Project",
  detailText: 'An open-source search engine for local government. We aim to empower journalists, activists, and community members in following council action by combining and simplifying sources of information on municipal council meetings and actions. I contributed to the frontend development of this project, and am co-author of a publication in the Journal of Open Source software.'
},
{
  linkUrl: "",
  imageUrl: import.meta.env.BASE_URL+"imgs/identity-icon.png",
  imageDescription: 'portfolio site icon',
  title: "My Portfolio",
  detailText: " This portfolio site, built with React and Vite, showcases my work and skills as a web developer. Explore my projects, learn about my journey, and see how I approach problem-solving in the tech landscape. The source code is available on GitHub for those interested in the development process!"
},
]
  export { cdp, istock, releases, gettyIOS, publishedWorks, aas}