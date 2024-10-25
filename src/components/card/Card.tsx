

import { FC } from 'react';
import useMediaQuery from '../../util/MediaQuery';
import { screenWidths } from '../../util/MediaBreakpoints';

interface CardProps {
  linkUrl?: string;
  imageUrl: string;
  imageDescription: string;
  title: string;
  detailText: string;
}

const Card: FC<CardProps> = ({
  linkUrl,
  imageUrl,
  imageDescription,
  title,
  detailText
}: CardProps) => {

  const isLargeScreen = useMediaQuery(`(min-width: ${screenWidths.tablet})`);
  const iconSize = isLargeScreen ? '128' : '64'

  return (
    <div className="mzp-t-picto-side">
      <div style={{ display: "flex", flexDirection: "row", alignItems: 'center' }}>
        <a href={linkUrl}><img style={{borderRadius: 8}} src={imageUrl} width={iconSize} height={iconSize} alt={imageDescription} /></a>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 16 }}>
          <div className="mzp-c-picto-body">
            <h4 style={{ display: 'flex', justifyContent: 'left' }}>{title}</h4>
            <p style={{textAlign: "left"}}>{detailText} <a href={linkUrl}>Check it out!</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;