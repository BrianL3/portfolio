

import { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

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
    <Container sx={{ ...styles.container }}>
      <Container sx={{ ...styles.contentContainer }}>
        <Box
          component="img"
          sx={{ ...styles.icon }}
          alt={imageDescription}
          src={imageUrl}
        />
        <Box
          sx={{ ...styles.textContainer }}
        >
          <Typography
            variant='h4'
          >
            <Link
              to={{
                pathname: `${linkUrl}`,
              }}>
              {title}
            </Link>
          </Typography>
          <Typography style={{marginBottom: "8px", marginLeft: "8px", marginRight: "8px"}}>{detailText}</Typography>
        </Box>
      </Container>
    </Container>
  );
}

export default Card;

const styles = {
  container: {
    display: "flex",
    flexDirection: 'row',
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