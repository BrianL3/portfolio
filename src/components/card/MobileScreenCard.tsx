import { FC } from "react";
import useMediaQuery from "../../util/MediaQuery";
import { screenWidths } from "../../util/MediaBreakpoints";

interface MobileScreenCardProps {
  imageUrl: string;
  imageDescription: string;
  title: string;
  detailText: string;
}

const MobileScreenCard: FC<MobileScreenCardProps> = ({
  imageUrl,
  imageDescription,
  title,
  detailText
}: MobileScreenCardProps) => {

  const isLargeScreen = useMediaQuery(`(min-width: ${screenWidths.tablet})`);
  const displayDirection = isLargeScreen ? 'row' : 'column'
  
  return (
    <section style={{ marginBottom: '4rem' }}>
      <div style={{ display: 'flex', flexDirection: displayDirection }}>
        <img
          src={imageUrl}
          style={{maxHeight: isLargeScreen ? 490 : "100%", objectFit:'contain'}}
          alt={imageDescription}
        />
        <div>
          <h2 style={{ textAlign: 'left', marginLeft: "1rem" }}>{title}</h2>
          <p className="mzp-c-card-desc" style={{ textAlign: 'left', marginLeft: "1rem" }}>{detailText}</p>
        </div>
      </div>
    </section>
  );
};

export default MobileScreenCard;
