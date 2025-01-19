import * as React from 'react'
import { Container, MobileStepper, Typography } from '@mui/material'

export default function HeroCarousel() {
    const [activeStep, setActiveStep] = React.useState(0);
    const numberOfHeroes = 4 // there are 4 hero images in the public folder. this number controls the stepper and image carousel
    const heroUrlString = `imgs/hero-image.jpg`;
    // const heroUrlString = `imgs/${(activeStep % numberOfHeroes) + 1}.jpg`;
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
        }, 1200); // Change interval time as needed
        return () => clearInterval(timer); // Cleanup on unmount
    }, [activeStep, numberOfHeroes]); // do a full rotation, seeing heroes 1,2,3,4, then stop at 1

    return (
        <Container sx={{ ...styles.container, backgroundImage: `url(${heroUrlString})` }}>
            <div style={{ height: "10%" }} />
            <Typography variant="h4" sx={{ color: "white", }} >Hi, I'm Brian</Typography>
            <div style={{ flex: 1 }} />
            {activeStep < 4 && <Typography variant="h4" sx={{ color: "white", }} >and I love to build in</Typography>}
            <Typography variant="h4" sx={{ color: "white", }} >{stuffICanBuild[activeStep]}</Typography>
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
        maxWidth: 400,
        flexGrow: 1,
        maxHeight: 25,
        bgcolor: 'transparent',
        color: 'white'
    }
}