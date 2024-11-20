import { FC } from 'react';
import './TextSection.css';
import useMediaQuery from '../../util/MediaQuery';
import { screenWidths } from '../../util/MediaBreakpoints';

interface TextSectionProps {
  title: string;
  textblocks: TextBlock[];
}

interface TextBlock {
  detailText: string;
  tagline: string;
}

const TextSection: FC<TextSectionProps> = ({
  title,
  textblocks
}: TextSectionProps) => {
  const isLargeScreen = useMediaQuery(`(min-width: ${screenWidths.tablet})`);

  return (
    <section
      id="locations"
      className="mzp-l-content mzp-t-content-lg"
      style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
    >
      <h2 className="mzp-u-title-md" style={{ textAlign: 'center' }}>
        {title}
      </h2>
      <img
          src={import.meta.env.BASE_URL+ "imgs/hero-image.jpg" }
          style={{maxHeight: isLargeScreen ? 300 : 270, objectFit:'contain', borderRadius: 12 }}
          alt={"a picture of brian, the author of this website"}
        />
      <div style={{height:30}}/>
      {textblocks.map((section, index) => (
        <div key={index} className="textsection-card" style={{backgroundColor: '-moz-initial'}}>
          <div className="textsection-detailtext">
            <p>{section.detailText}</p>
          </div>
          <div className="textsection-tagline">
            {section.tagline ? section.tagline : ''}
          </div>
        </div>
      ))}
    </section>
  );
}

export default TextSection;