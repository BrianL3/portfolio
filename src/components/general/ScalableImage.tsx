import { FC } from 'react';
import Box from '@mui/material/Box';

interface ScalableImageProps {
    imageUrl: string;
    imageDescription: string;
}

const ScalableImage: FC<ScalableImageProps> = ({ imageUrl, imageDescription }) => {
    return (
        <Box
            sx={{
                maxWidth: '300px',
                maxHeight: '520px',
                overflow: 'hidden',
                boxShadow: 4,
            }}
        >
            <img
                src={imageUrl}
                alt={imageDescription}
                style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '100%',
                    maxHeight: '100%',
                }}
            />
        </Box>
    );
};

export default ScalableImage;