import React from "react";
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from "@mui/material/Grid2";
import background from '../../assets/background.jpg'
import mobileBackground from '../../assets/mobileBackground.jpg'
import { Link } from "react-router-dom";
import ButtonEstimate from "./ButtonEstimate";


export default function CallToAction(props) {

    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid
            container
            alignItems="center"
            justifyContent={matchesSM ? "center" : "space-between"}
            sx={{
                backgroundImage: `url(${background})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "60em",
                width: "100%",
                [theme.breakpoints.down('lg')]: {
                    backgroundImage: `url(${mobileBackground})`,
                    backgroundAttachment: "inherit"
                }
            }}
            direction={matchesSM ? "column" : "row"}
        >
            <Grid
                item
                style={{
                    marginLeft: matchesSM ? 0 : "5em",
                    textAlign: matchesSM ? "center" : "inherit"
                }}
            >
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h2" sx={{fontFamily: "Roboto"}}>
                            Simple Software. <br /> Revolutionary Results.
                        </Typography>
                        <Typography variant="subtitle2" style={{ fontSize: "1.5rem", color: "black" }}>
                            Take advantage of the 21st century technology.
                        </Typography>

                        <Grid container justifyContent={matchesSM ? "center" : undefined} item>
                           

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

                            <ButtonEstimate />

                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}