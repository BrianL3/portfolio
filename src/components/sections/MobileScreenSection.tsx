import { FC } from 'react';
import Work from '../../schemas/Work';
import MobileScreenCard from '../card/MobileScreenCard';
import { Container } from '@mui/material';
import BackButton from '../general/BackButton';

interface MobileScreenSectionProps {
  sectionTitle: string;
  sectionDetailText: string;
  works: Work[];
}

const MobileScreenSection: FC<MobileScreenSectionProps> = ({
  sectionTitle,
  sectionDetailText,
  works
}: MobileScreenSectionProps) => {

  return (
    <Container sx={{ ...styles.container }}>
      <div className="mzp-l-content mzp-t-content-xl">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <BackButton/>
          <h2 style={{textAlign:"left"}}> {sectionTitle}</h2>
        </div>
        <p style={{ marginBottom: '4rem', justifyContent: 'start', textAlign: 'left' }}>{sectionDetailText}</p>
        {works.map((work, index) => (
            <MobileScreenCard
              imageUrl={work.imageUrl}
              imageDescription={work.imageDescription}
              title={work.title}
              detailText={work.detailText}
              key={work.title + index}
            />
          ))}
      </div>
    </Container>
  );
};

export default MobileScreenSection;
const styles = {
  container: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  contentContainer: {
    borderRadius: "4px",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    boxShadow: 2,
    // backgroundColor: "rgb(188, 188, 188)",
    margin: {xs: "10px", md: "10px"}
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
  icon: {
    borderRadius: "4px",
    backgroundSize: 'cover',
    height: { xs: "64px", md: 84, lg: 128 },
    width: { xs: "64px", md: 84, lg: 128 },
  }
} 