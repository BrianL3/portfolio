import { Box } from '@mui/material'
import './App.css'
import HeroCarousel from './components/card/HeroCarousel'
import WorksSection from './components/sections/WorksSection'
import { publishedWorks } from './data/PublishedWork'

function App() {
  return (
    <Box
      sx={{...styles.container}}
    >
      <Box sx={{ ...styles.box, ...styles.heroBox }}>
        <div style={{ flex: 1 }}/>
        <HeroCarousel />
        <div style={{ flex: 1 }}/>
      </Box>
      <WorksSection
        sectionTitle={'Published Works'}
        sectionDetailText={'Explore a selection of projects that showcase my contributions across various organizations. Whether through professional endeavors or open-source collaborations, each work reflects my commitment to innovation and quality in software development.'}
        works={publishedWorks} />
    </Box>
  )
}

export default App

const styles = {
  container: {
    display: "flex",
    flexDirection: 'column',
    backgroundColor: "rgb(252, 252, 252)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "auto",
    width: "100%",
    height: "100%",
    maxWidth: 1180,
  },
  box: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  heroBox: {
    marginTop: "12px",
    minHeight: 480,
    // maxWidth: 480,
    // width: {md: "100%", lg: "480px"},
    // flex: 1,
    // height: "100%",
    // padding: "10px 0"
  }
}

