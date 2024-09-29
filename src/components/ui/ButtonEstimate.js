import { useTheme } from '@emotion/react'
import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ButtonEstimate = (props) => {
    const theme = useTheme();
  return (
    <Box>
        <Button
                component={Link}
                to="/estimate"
                variant="contained"
                color="secondary"
                sx={{
                    ...theme.typography.estimate,
                    borderRadius: "50px",
                    marginLeft: "50px",
                    marginRight: "25px",
                    height: "45px",
                    "&:hover": {
                        backgroundColor: theme.palette.secondary.light,
                        textColor: "primary"
                    }
                }}
                onClick={() => props.setValue(5)}
            >
                Free Estimate
            </Button>
    </Box>
  )
}

export default ButtonEstimate
