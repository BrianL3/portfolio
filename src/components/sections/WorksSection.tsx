import { FC } from 'react';
import Card from '../card/Card';
import Work from '../../schemas/Work';

interface WorksSectionProps {
  sectionTitle: string;
  sectionDetailText: string;
  works: Work[];
}

const WorksSection: FC<WorksSectionProps> = ({
  sectionTitle,
  sectionDetailText,
  works
}: WorksSectionProps) => {

  return (
    <section
      id="locations"
      style={{ padding: '2rem 0' }}
    >
      <div className="mzp-l-content mzp-t-content-xl">
        <h2 className="mzp-u-title-md">{sectionTitle}</h2>
        <p style={{ marginBottom: '4rem' }}>{sectionDetailText}</p>
        <div className="mzp-l-card-third">
          {works.map((work, index) => (
            <Card
              linkUrl={work.linkUrl}
              imageUrl={work.imageUrl}
              imageDescription={work.imageDescription}
              title={work.title}
              detailText={work.detailText}
              key={work.title + index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;