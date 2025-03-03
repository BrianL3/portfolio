import { Box, Container, CssBaseline } from '@mui/material';
import HeroCarousel from './components/card/HeroCarousel';
import WorksSection from './components/sections/WorksSection';
import { publishedWorks } from './data/PublishedWork';

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ ...styles.appContainer }}>
        <Box sx={styles.heroSection}>
          <HeroCarousel />
        </Box>
        <Container maxWidth="lg" sx={styles.contentContainer}>
          <WorksSection
            sectionTitle="Published Works"
            sectionDetailText="Explore a selection of projects that showcase my contributions across various organizations. Whether through professional endeavors or open-source collaborations, each work reflects my commitment to innovation and quality in software development."
            works={publishedWorks}
          />
        </Container>
      </Box>
    </>
  );
}

export default App;

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "rgb(252, 252, 252)",
  },
  heroSection: {
    width: "100%",
    minHeight: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(240, 240, 240)",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "16px",
    flexGrow: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingY: { xs: 4, md: 6 },
    textAlign: "center",
  },
};