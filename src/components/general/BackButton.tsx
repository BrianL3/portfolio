import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
// import { ChevronLeftIcon } from '@mui/icons-material/ChevronLeft'

const BackButton: FC = () => {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1) // Navigate back in history
    };

    return (
        <IconButton onClick={handleBack} sx={{ mr: 2 }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                width={24}
                height={24}
                className="size-6"
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
            </svg>
        </IconButton>
    );
};

export default BackButton