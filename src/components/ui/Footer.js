import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Footer(props) {
    const theme = useTheme();

    return (
        <Grid
            sx={{
                backgroundColor: theme.palette.common.blue,
                width: "100%",
                height: "15em",
                position: "absolute",
                verticalAlign: "bottom",

                [theme.breakpoints.down('lg')]: {
                    width: "100%",
                    height: "15em",
                    position: "absolute",
                    verticalAlign: "bottom",
                },
            }}
            disableGutters
        >

            <Box
                sx={{
                    marginLeft: "7em",
                    [theme.breakpoints.down('md')]: {
                        width: "100%",
                        height: "15em",
                        position: "absolute",
                        align: "center",
                    },
                }}
            >
                <Grid
                    container
                    justifyContent="center"
                    sx={{ position: "absolute" }}
                >
                    <Grid
                        item
                        sx={{ margin: "3em" }}
                    >
                        <Grid container direction="column">
                            <Grid
                                item
                                component={Link}
                                onClick={() => props.setValue(0)}
                                to="/"
                                sx={{
                                    color: "white",
                                    fontFamily: "Arial",
                                    fontSize: "0.75rem",
                                    fontWeight: "bold",
                                    textDecoration: "none"
                                }}
                            >
                                Home
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        sx={{ margin: "3em" }}
                    >
                        <Grid container direction="column" spacing={2}>
                            <Grid
                                item
                                component={Link}
                                onClick={() => { props.setValue(1); props.setSelectedIndex(0) }}
                                to="/services"
                                sx={{
                                    color: "white",
                                    fontFamily: "Arial",
                                    fontSize: "0.75rem",
                                    fontWeight: "bold",
                                    textDecoration: "none"
                                }}
                            >
                                Services
                            </Grid>
                            <Grid
                                item
                                component={Link}
                                onClick={() => { props.setValue(1); props.setSelectedIndex(1) }}
                                to="/customsoftware"
                                sx={{
                                    color: "white",
                                    fontFamily: "Arial",
                                    fontSize: "0.75rem",
                                    fontWeight: "bold",
                                    textDecoration: "none"
                                }}
                            >
                                Custom Software Development
                            </Grid>
                            <Grid
                                item
                                component={Link}
                                onClick={() => { props.setValue(1); props.setSelectedIndex(2) }}
                                to="/mobileapps"
                                sx={{
                                    color: "white",
                                    fontFamily: "Arial",
                                    fontSize: "0.75rem",
                                    fontWeight: "bold",
                                    textDecoration: "none"
                                }}
                            >
                                iOS/Android App Development
                            </Grid>
                            <Grid
                                item
                                component={Link}
                                onClick={() => { props.setValue(1); props.setSelectedIndex(3) }}
                                to="/websites"
                                sx={{
                                    color: "white",
                                    fontFamily: "Arial",
                                    fontSize: "0.75rem",
                                    fontWeight: "bold",
                                    textDecoration: "none"
                                }}
                            >
                                Website Development
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        sx={{ margin: "3em" }}
                    >
                        <Grid container direction="column" spacing={2}>
                            <Grid
                                item
                                component={Link}
                                onClick={() => props.setValue(2)}
                                to="/revolution"
                                sx={{
                                    color: "white",
                                    fontFamily: "Arial",
                                    fontSize: "0.75rem",
                                    fontWeight: "bold",
                                    textDecoration: "none"
                                }}
                            >
                                The Revolution
                            </Grid>
                            <Grid
                                item
                                component={Link}
                                onClick={() => props.setValue(2)}
                                to="/revolution"
                                sx={{
                                    color: "white",
                                    fontFamily: "Arial",
                                    fontSize: "0.75rem",
                                    fontWeight: "bold",
                                    textDecoration: "none"
                                }}
                            >
                                Vision
                            </Grid>
                            <Grid
                                item
                                component={Link}
                                onClick={() => props.setValue(2)}
                                to="/revolution"
                                sx={{
                                    color: "white",
                                    fontFamily: "Arial",
                                    fontSize: "0.75rem",
                                    fontWeight: "bold",
                                    textDecoration: "none"
                                }}
                            >
                                Technology
                            </Grid>
                            <Grid
                                item
                                component={Link}
                                onClick={() => props.setValue(2)}
                                to="/revolution"
                                sx={{
                                    color: "white",
                                    fontFamily: "Arial",
                                    fontSize: "0.75rem",
                                    fontWeight: "bold",
                                    textDecoration: "none"
                                }}
                            >
                                Process
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        sx={{ margin: "3em" }}
                    >
                        <Grid container direction="column" spacing={2}>
                            <Grid
                                item
                                component={Link}
                                onClick={() => props.setValue(3)}
                                to="/about"
                                sx={{
                                    color: "white",
                                    fontFamily: "Arial",
                                    fontSize: "0.75rem",
                                    fontWeight: "bold",
                                    textDecoration: "none"
                                }}
                            >
                                About Us
                            </Grid>
                            <Grid
                                item
                                component={Link}
                                onClick={() => props.setValue(3)}
                                to="/about"
                                sx={{
                                    color: "white",
                                    fontFamily: "Arial",
                                    fontSize: "0.75rem",
                                    fontWeight: "bold",
                                    textDecoration: "none"
                                }}
                            >
                                History
                            </Grid>
                            <Grid
                                item
                                component={Link}
                                onClick={() => props.setValue(3)}
                                to="/about"
                                sx={{
                                    color: "white",
                                    fontFamily: "Arial",
                                    fontSize: "0.75rem",
                                    fontWeight: "bold",
                                    textDecoration: "none"
                                }}
                            >
                                Team
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        sx={{ margin: "3em" }}
                    >
                        <Grid container direction="column" spacing={2}>
                            <Grid
                                item
                                component={Link}
                                onClick={() => props.setValue(4)}
                                to="/contact"
                                sx={{
                                    color: "white",
                                    fontFamily: "Arial",
                                    fontSize: "0.75rem",
                                    fontWeight: "bold",
                                    textDecoration: "none"
                                }}
                            >
                                Contact Us
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid
                        item
                        sx={{ margin: "3em" }}
                    >
                        <Grid container direction="column" spacing={2}>
                            <Grid
                                item
                                component={Link}
                                onClick={() => props.setValue(4)}
                                to="/contact"
                                sx={{
                                    color: "white",
                                    fontFamily: "Arial",
                                    fontSize: "0.75rem",
                                    fontWeight: "bold",
                                    textDecoration: "none"
                                }}
                            >


                                <Typography>
                                    ©2024 SoftLab, all rights reserved
                                </Typography>

                            </Grid>
                        </Grid>
                    </Grid>



                </Grid>
            </Box>


            {/* social media icons */}

            <Box>

                <Grid
                    container
                    justifyContent="flex-end"
                    spacing={2}
                    sx={{
                        position: "absolute",
                        marginTop: "10em",
                        right: "1.5em",
                        [theme.breakpoints.down('sm')]: {
                            right: "0.6em"
                        }
                    }}
                >
                    <Grid
                        item
                        component={"a"}
                        href="http://www.facebook.com"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <FacebookIcon style={{color:"white"}} />
                    </Grid>
                    <Grid
                        item
                        component={"a"}
                        href="http://www.twitter.com"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <XIcon style={{color:"white"}} />

                    </Grid>
                    <Grid
                        item
                        component={"a"}
                        href="http://www.instagram.com"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <InstagramIcon style={{color:"white"}} />
                    </Grid>

                    <Grid
                        item
                        component={"a"}
                        href="http://www.youtube.com"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <YouTubeIcon style={{color:"white"}} />
                    </Grid>

                    <Grid
                        item
                        component={"a"}
                        href="http://www.github.com"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <GitHubIcon style={{color:"white"}} />
                    </Grid>


                </Grid>

            </Box>

        </Grid >
    );
}