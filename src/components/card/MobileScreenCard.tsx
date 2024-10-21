import { FC } from "react";
import styled from "@emotion/styled";
import useMediaQuery from "../../util/MediaQuery";
import { screenWidths } from "../../util/MediaBreakpoints";

interface MobileScreenCardProps {
  imageUrl: string;
  imageDescription: string;
  title: string;
  detailText: string;
}

interface ImgProps {
  left: string;
  width: string;
}

const Img = styled.img<ImgProps>((props) => ({
  objectFit: "cover",
  left: `${props.left} !important`,
  width: `${props.width} !important`,
  height: "100%",
}));

const MobileScreenCard: FC<MobileScreenCardProps> = ({
  imageUrl,
  imageDescription,
  title,
  detailText
}: MobileScreenCardProps) => {

  const isLargeScreen = useMediaQuery(`(min-width: ${screenWidths.tablet})`);
  const displayDirection = isLargeScreen ? 'row' : 'column'
  return (
    <section className="mzp-c-card mzp-c-card-medium mzp-has-aspect-16-9">
      <div className="mzp-c-card-block-link" style={{display: 'flex', flexDirection: displayDirection}}>
        <div className="mzp-c-card-media-wrapper">
            <Img
              className="mzp-c-card-image"
              src={imageUrl}
              width={"60%"}
              left={"40%"}
              alt={imageDescription}
            />
        </div>
        <div className="mzp-c-card-content">
          <h2 className="mzp-c-card-title">{title}</h2>
          <p className="mzp-c-card-desc" style={{textAlign: 'left'}}>{detailText}</p>
        </div>
      </div>
    </section>
  );
};

export default MobileScreenCard;
