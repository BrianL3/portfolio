import * as React from 'react'
import { Container, MobileStepper, Typography } from '@mui/material'

export default function HeroCarousel() {
    const [activeStep, setActiveStep] = React.useState(0);
    const numberOfHeroes = 4 // there are 4 hero images in the public folder. this number controls the stepper and image carousel
    const heroUrlString = `imgs/hero-image-${(activeStep % numberOfHeroes) + 1}.jpg`;
    const stuffICanBuild = ["Swift", "React Native", "Kotlin", "Node"]

    const handleNext = () => {
        if (activeStep < numberOfHeroes) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
            setActiveStep(0);
        }
    };

    React.useEffect(() => {
        const timer = setInterval(() => {
            if (activeStep < numberOfHeroes) {
                handleNext();
            }
        }, 1700); // Change interval time as needed
        return () => clearInterval(timer); // Cleanup on unmount
    }, [activeStep, numberOfHeroes]); // do a full rotation, seeing heroes 1,2,3,4, then stop at 1

    return (
        <Container sx={{ ...styles.container, backgroundImage: `url(${heroUrlString})` }}>
            <div style={styles.topTextContainer}>
                <Typography variant="h4" sx={styles.text}>
                    Hi, I'm Brian
                </Typography>
            </div>
            <div style={{flexGrow: 1, flex: 1}} />
            <div style={styles.bottomTextContainer}>
                <Typography variant="h4" sx={styles.text}>
                    and I love to build
                </Typography>
                {activeStep < 4 && (
                    <Typography variant="h4" sx={styles.text}>
                        in {stuffICanBuild[activeStep]}
                    </Typography>
                )}
            </div>
        </Container>
    );
}
const styles = {
    topTextContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
    },
    bottomTextContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "10px",
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 480,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "50vh", // Ensure non-zero height
        backgroundColor: "rgba(0, 0, 0, 0.1)", // Prevent blending issues
    },
    text: {
        color: "white",
        WebkitTextStroke: '1px black', // Adds a 1px black border to the text
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', // Optional: adds a shadow for extra contrast
    },
    
}