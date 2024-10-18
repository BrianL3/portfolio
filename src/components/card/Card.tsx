

import { FC } from 'react';

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
  return (
    <section className="mzp-c-card mzp-c-card-extra-small has-aspect-3-2">
      <a className="mzp-c-card-block-link" href={linkUrl}>
        <div className="mzp-c-card-media-wrapper">
          <img
            className="mzp-c-card-image"
            src={imageUrl}
            alt={imageDescription}
            style={{ height: '220px', objectFit: 'cover' }}
          />
        </div>
        <div className="mzp-c-card-content">
          <h2 className="mzp-c-card-title">{title}</h2>
          <p className="mzp-c-card-meta">{detailText}</p>
        </div>
      </a>
    </section>
  );
}

export default Card;