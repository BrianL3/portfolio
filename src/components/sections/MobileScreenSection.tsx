import { FC } from 'react';
import Work from '../../schemas/Work';
import MobileScreenCard from '../card/MobileScreenCard';

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
    <section
      style={{ padding: '2rem 0' }}
    >
      <div className="mzp-l-content mzp-t-content-xl">
        <h2 style={{textAlign:"left"}}> {sectionTitle}</h2>
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
    </section>
  );
};

export default MobileScreenSection;