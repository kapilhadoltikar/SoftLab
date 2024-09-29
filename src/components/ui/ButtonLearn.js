import { useTheme } from '@emotion/react'
import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ButtonLearn = (props) => {
    const theme = useTheme();
    return (
        <Box>
            <Button
                component={Link}
                to="/revolution"
                variant="outlined"
                sx={{
                    ...theme.typography.learnButton,
                    fontSize: "0.9rem",
                    height: 45,
                    width: 150
                }}
                onClick={() => props.setValue(2)}
            >
                <span style={{ marginRight: 10 }}>Learn More</span>

                <ArrowForwardIcon />

            </Button>
        </Box>
    )
}

export default ButtonLearn
