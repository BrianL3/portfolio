import { Box, Typography, Card, CardContent, CardMedia, CardActionArea, Grid2 as Grid } from '@mui/material';
import { Link } from 'react-router-dom';

interface Work {
  imageUrl: string;
  imageDescription: string;
  linkUrl: string;
  title: string;
  detailText: string;
}

interface WorksSectionProps {
  sectionTitle: string;
  sectionDetailText: string;
  works: Work[];
}

const WorksSection = ({ sectionTitle, sectionDetailText, works }: WorksSectionProps) => {
  return (
    <Box sx={styles.sectionContainer}>
      <Typography variant="h4" sx={styles.sectionTitle}>
        {sectionTitle}
      </Typography>
      <Typography variant="body1" sx={styles.sectionDescription}>
        {sectionDetailText}
      </Typography>

      <Grid container spacing={3} sx={styles.gridContainer}>
        {works.map((work, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3}} key={index} component={"div"}> 
            <Card sx={styles.workCard}>
              <CardActionArea component={Link} to={work.linkUrl}  sx={styles.cardAction}>
                <CardMedia
                  sx={styles.cardImage}
                  component="img"
                  image={work.imageUrl}
                  alt={work.imageDescription}
                />
                <CardContent>
                  <Typography variant="h6">{work.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {work.detailText}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WorksSection;

const styles = {
  cardAction: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
  },
  cardImage: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },
  sectionContainer: {
    textAlign: "center",
    padding: "24px 16px",
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: "8px",
  },
  sectionDescription: {
    maxWidth: "600px",
    margin: "0 auto 24px",
    color: "gray",
  },
  gridContainer: {
    justifyContent: "center",
  },
  workCard: {
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
};