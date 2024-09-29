import React from "react";
import { Box, Button, Card, CardContent, Typography, useMediaQuery, useTheme } from "@mui/material";
import Lottie from "react-lottie";
import Grid from "@mui/material/Grid2";
import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../assets/mobileIcon.svg'
import websitesIcon from '../assets/websiteIcon.svg'
import revolutionBackground from '../assets/repeatingBackground.svg'
import infoBackground from '../assets/infoBackground.svg'

import CallToAction from "./ui/CallToAction";
import { Link } from "react-router-dom";
import ButtonEstimate from "./ui/ButtonEstimate";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function LandingPage(props) {
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('md'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('sm'));

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Box sx={{width: "100%"}}>
            <Grid
                container
                direction="column"
                sx={{
                    marginTop: "5em",
                    [theme.breakpoints.down('lg')]: {
                        marginTop: "3em"
                    },
                    [theme.breakpoints.down('sm')]: {
                        marginTop: "2em"
                    }
                }}
            >

                {/*----- Hero Block -----*/}
                <Grid item>
                    <Grid
                        container
                        justifyContent="flex-end"
                        alignItems="center"
                        direction="row"
                    >
                        <Grid
                            sm
                            item
                            sx={{
                                minWidth: "21.5em",
                                marginLeft: "1em",
                                fontFamily: "Roboto",
                                [theme.breakpoints.down('sm')]: {
                                    marginLeft: 0
                                }
                            }}
                        >
                            <Typography
                                variant="h2"
                                align="center"
                            >
                                Bringing Latest Technology
                                <br />
                                to the World
                            </Typography>
                            <Grid
                                container
                                justifyContent="center"
                                sx={{ marginTop: "1em" }}
                            >

                                <Grid item>

                                    <ButtonEstimate />

                                </Grid>


                                <Grid item>

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

                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            sm
                            item
                            sx={{
                                maxWidth: "50em",
                                minWidth: "21em",
                                marginTop: "2em",
                                marginLeft: "10%",
                                [theme.breakpoints.down('md')]: {
                                    maxWidth: "30em"
                                }
                            }}
                        >
                            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
                        </Grid>
                    </Grid>
                </Grid>

                {/*-----  Custom Software Block  -----*/}
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        justifyContent={matchesSM ? "center" : undefined}
                        sx={{
                            marginTop: "12em",
                            [theme.breakpoints.down('md')]: {
                                padding: 25
                            }
                        }}
                    >
                        <Grid
                            item
                            style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}
                        >
                            <Typography variant="h4">
                                Custom Software Development
                            </Typography>
                            <Typography
                                variant="subtitle"
                                sx={{
                                    fontSize: "1.25rem",
                                    fontWeight: 300,
                                    color: "arcGrey"
                                }}
                            >
                                Save Energy. Save Time. Save Money.
                            </Typography>
                            <Typography variant="subtitle1">
                                Complete digital solutions, from investigation to {" "}
                                <span
                                    sx={{
                                        fontFamily: "Pacifico",
                                        color: theme.palette.common.orange
                                    }}
                                >
                                    celebration.
                                </span>
                            </Typography>

                            <Button
                                component={Link}
                                to="/customsoftware"
                                variant="outlined"
                                sx={{
                                    ...theme.typography.learnButton,
                                    fontSize: "0.9rem",
                                    height: 45,
                                    width: 150
                                }}
                                onClick={() => { props.setValue(1) }}
                            >
                                <span style={{ marginRight: 10 }}>Learn More</span>

                                <ArrowForwardIcon />

                            </Button>



                        </Grid>
                        <Grid item>
                            <img
                                sx={{
                                    marginLeft: "2em",
                                    [theme.breakpoints.down('sm')]: {
                                        marginLeft: 0
                                    }
                                }}
                                alt="custom software icon"
                                src={customSoftwareIcon}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                {/*-----  iOS/Android Apps Block  -----*/}
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        justifyContent={matchesSM ? "center" : "flex-end"}
                        sx={{
                            marginTop: "12em",
                            [theme.breakpoints.down('md')]: {
                                padding: 25
                            }
                        }}
                    >
                        <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
                            <Typography variant="h4">
                                iOS/Android App Development
                            </Typography>
                            <Typography variant="subtitle1">
                                Extend Functionality. Extend Access. Increase Engagement.
                            </Typography>
                            <Typography variant="subtitle1">
                                Integrate your web exprerience or create a standalone app
                                {matchesSM ? null : <br />}with either mobile platforms.
                            </Typography>


                            <Button
                                component={Link}
                                to="/mobileapps"
                                variant="outlined"
                                sx={{
                                    ...theme.typography.learnButton,
                                    fontSize: "0.9rem",
                                    height: 45,
                                    width: 150
                                }}
                                onClick={() => { props.setValue(1) }}
                            >
                                <span style={{ marginRight: 10 }}>Learn More</span>

                                <ArrowForwardIcon />

                            </Button>



                        </Grid>
                        <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
                            <img
                                sx={{
                                    marginLeft: "2em",
                                    [theme.breakpoints.down('sm')]: {
                                        marginLeft: 0
                                    }
                                }}
                                alt="mobile phone icon"
                                src={mobileAppsIcon}
                            />
                        </Grid>
                    </Grid>
                </Grid>


                {/*-----  Websites Block  -----*/}
                <Grid item>
                    <Grid
                        container
                        direction="row"
                        justifyContent={matchesSM ? "center" : undefined}
                        sx={{
                            marginTop: "12em",
                            [theme.breakpoints.down('md')]: {
                                padding: 25
                            }
                        }}
                    >
                        <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
                            <Typography variant="h4">
                                Website Development
                            </Typography>
                            <Typography variant="subtitle1">
                                Reach More. Discover More. Sell More.
                            </Typography>
                            <Typography variant="subtitle1">
                                Optimized for Search Engines, built for speed.
                            </Typography>


                            <Button
                                component={Link}
                                to="/websites"
                                variant="outlined"
                                sx={{
                                    ...theme.typography.learnButton,
                                    fontSize: "0.9rem",
                                    height: 45,
                                    width: 150,
                                    [theme.breakpoints.down('md')]: {
                                        marginBottom: "2em"
                                    }
                                }}
                                onClick={() => { props.setValue(1) }}
                            >
                                <span style={{ marginRight: 10 }}>Learn More</span>

                                <ArrowForwardIcon />

                            </Button>


                        </Grid>
                        <Grid item>
                            <img
                                sx={{
                                    marginLeft: "2em",
                                    [theme.breakpoints.down('sm')]: {
                                        marginLeft: 0
                                    }
                                }}
                                alt="website icon"
                                src={websitesIcon}
                            />
                        </Grid>
                    </Grid>
                </Grid>


                {/*----- Revolution Block ------*/}
                <Grid item>
                    <Grid
                        container
                        style={{ height: "40em", marginTop: "12em" }}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Card
                            sx={{
                                position: "absolute",
                                boxShadow: theme.shadows[10],
                                borderRadius: 15,
                                padding: "10em",
                                [theme.breakpoints.down('md')]: {
                                    paddingTop: "8em",
                                    paddingBottom: "8em",
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    borderRadius: 0,
                                    width: "100%"
                                }
                            }}
                        >
                            <CardContent>
                                <Grid
                                    container
                                    direction="column"
                                    style={{ textAlign: "center" }}
                                >
                                    <Grid item>
                                        <Typography variant="h3" gutterBottom>
                                            The Revolution
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">
                                            Visionary insights coupled with cutting-edge technology is a recipe for revolution.
                                        </Typography>

                                        <Button
                                            component={Link}
                                            to="/revolution"
                                            variant="outlined"
                                            sx={{
                                                ...theme.typography.learnButton,
                                                fontSize: "0.9rem",
                                                height: 45,
                                                width: 150,
                                                [theme.breakpoints.down('md')]: {
                                                    marginBottom: "2em"
                                                }
                                            }}
                                            onClick={() => { props.setValue(1) }}
                                        >
                                            <span style={{ marginRight: 10 }}>Learn More</span>

                                            <ArrowForwardIcon />

                                        </Button>



                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <div
                            sx={{
                                backgroundImage: `url(${revolutionBackground})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                height: "100%",
                                width: "100%"
                            }}
                        />
                    </Grid>

                </Grid>



                {/*----- Information Block ------*/}
                <Grid item>
                    <Grid
                        container
                        style={{ height: "40em" }}
                        alignItems="center"
                        direction="row"
                        sx={{
                            backgroundImage: `url(${infoBackground})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            height: "100%",
                            width: "100%",
                        }}
                    >

                        <Grid
                            item
                            container
                            style={{ textAlign: matchesXS ? "center" : "inherit" }}
                            direction={matchesXS ? "column" : "row"}
                            sx={{ alignItems: "center" }}
                        >
                            <Grid
                                item
                                sm
                                style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }}
                                sx={{ alignItems: "center" }}
                            >
                                <Grid
                                    container
                                    style={{ marginBottom: matchesXS ? "10em" : 0 }}
                                    direction="column"
                                    sx={{ alignItems: "center" }}
                                >
                                    <Typography variant="h2" style={{ color: "white" }}>
                                        About Us
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        Let's get personal.
                                    </Typography>

                                    <Grid item>

                                        <Button
                                            component={Link}
                                            to="/about"
                                            variant="outlined"
                                            sx={{
                                                ...theme.typography.learnButton,
                                                fontSize: "0.9rem",
                                                height: 45,
                                                width: 150,
                                                color: "white",
                                                borderColor: "white",
                                                [theme.breakpoints.down('md')]: {
                                                    marginBottom: "2em"
                                                }
                                            }}
                                            onClick={() => props.setValue(3)}
                                        >
                                            <span style={{ marginRight: 10 }}>Learn More</span>
                                            <ArrowForwardIcon
                                                width={15}
                                                height={15}
                                                fill="white"
                                            />
                                        </Button>

                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid
                                item
                                sm
                                style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em", textAlign: matchesXS ? "center" : "right" }}
                            >
                                <Grid
                                    container
                                    direction="column"
                                    sx={{ alignItems: "center" }}
                                >
                                    <Typography variant="h2" style={{ color: "white" }}>
                                        Contact Us
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        Say hello!
                                    </Typography>

                                    <Grid item>


                                        <Button
                                            component={Link}
                                            to="/contact"
                                            variant="outlined"
                                            sx={{
                                                ...theme.typography.learnButton,
                                                fontSize: "0.9rem",
                                                height: 45,
                                                width: 150,
                                                color: "white",
                                                borderColor: "white"
                                            }}
                                            onClick={() => props.setValue(4)}
                                        >
                                            <span style={{ marginRight: 10 }}>Learn More</span>
                                            <ArrowForwardIcon
                                                width={15}
                                                height={15}
                                                fill="white"
                                            />
                                        </Button>

                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
                {/*----- Call To Action Block ------*/}
                <Grid item>
                    <CallToAction setValue={props.setValue} />
                </Grid>
            </Grid>

        </Box>
    );
}