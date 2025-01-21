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
            <div style={{ height: "10%" }} />
            <Typography
                variant="h4"
                sx={{...styles.text}} >
                    Hi, I'm Brian
                </Typography>
            <div style={{ flex: 1 }} />
            <Typography variant="h4" sx={{...styles.text}} >and I love to build</Typography>
            {activeStep < 4 && <Typography variant="h4" sx={{...styles.text}}>in {stuffICanBuild[activeStep]}</Typography>}
            <MobileStepper
                variant="dots"
                steps={numberOfHeroes}
                position="static"
                activeStep={activeStep}
                sx={styles.stepper}
                nextButton={<div />}
                backButton={<div />}
            />
            
        </Container>
    );
}
const styles = {
    container: {
        borderRadius: "25px",
        backgroundSize: 'cover',
        maxWidth: 480,
        height: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    stepper: {
        // maxWidth: 400,
        flexGrow: 1,
        maxHeight: 25,
        bgcolor: 'transparent',
        color: 'white'
    },
    text: {
        color: "white",
        WebkitTextStroke: '1px black', // Adds a 1px black border to the text
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', // Optional: adds a shadow for extra contrast
    }
}