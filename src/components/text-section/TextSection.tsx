import { FC } from 'react';
import './TextSection.css';

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
  return (
    <section
      id="locations"
      className="mzp-l-content mzp-t-content-lg"
      style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
    >
      <h2 className="mzp-u-title-md" style={{ textAlign: 'center' }}>
        {title}
      </h2>
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