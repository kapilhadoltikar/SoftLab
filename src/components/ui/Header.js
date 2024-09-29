import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar'
import {
    Button,
    Card,
    CardMedia,
    Grid2,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Menu,
    MenuItem,
    Tab,
    Tabs,
    Toolbar,
    useMediaQuery,
    useScrollTrigger,
    useTheme,
} from "@mui/material";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpg';
import ButtonEstimate from "./ButtonEstimate";


function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return children
        ? React.cloneElement(children, {
            elevation: trigger ? 4 : 0,
        })
        : null;
}


export default function Header(props) {

    const theme = useTheme(); // to make responsive website
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down('lg'))  // to make responsive website

    const [openDrawer, setOpenDrawer] = useState(false)

    const [anchorEl, setAnchorEl] = useState(null); // state mgmt for drop down menu
    const [openMenu, setOpenMenu] = useState(false);  // state mgmt for visiblity of drop down menu


    const handleChange = (e, newValue) => {
        props.setValue(newValue)
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget) // where to render dropdown menu
        setOpenMenu(true)                // for rendering dropdown menu visible
    }

    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        props.setSelectedIndex(i)
    }

    const handleClose = (e) => {
        setAnchorEl(null)   // telling menu to not render
        setOpenMenu(false)     // telling menu to be close
    }

    const menuOptions = [
        {
            name: "Services",
            link: "/services",
            activeIndex: 1,
            selectedIndex: 0
        },
        {
            name: "Custom Software Development",
            link: "/customsoftware",
            activeIndex: 1,
            selectedIndex: 1
        },
        {
            name: "iOS/Android App Development",
            link: "/mobileapps",
            activeIndex: 1,
            selectedIndex: 2
        },
        {
            name: "Website Development",
            link: "/websites",
            activeIndex: 1,
            selectedIndex: 3
        }
    ];

    const routes = [
        {
            name: "Home",
            link: "/",
            activeIndex: 1
        },
        {
            name: "Services",
            link: "/services",
            activeIndex: 2,
            ariaOwns: anchorEl ? "simple-menu" : undefined,
            ariaPopup: anchorEl ? "true" : undefined,
            mouseOver: (event) => handleClick(event)
        },
        {
            name: "The Revolution",
            link: "/revolution",
            activeIndex: 2
        },
        {
            name: "About Us",
            link: "/about",
            activeIndex: 3
        },
        {
            name: "Contact Us",
            link: "/contact",
            activeIndex: 4
        }
    ];

    //  this useEffect will make sure you stay on same page and nav is correct after page refresh
    useEffect(() => {
        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (props.value !== route.activeIndex) {
                        props.setValue(route.activeIndex)
                        if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
                            props.selectedIndex(route.selectedIndex)
                        }
                    }
                    break;
                case '/estimate':
                    props.setValue(5);
                    break;
                default:
                    break;
            }
        })
    }, [props.value, menuOptions, props.selectedIndex, routes]);


    const tabs = (
        <React.Fragment>

            {/*----- Header Tab -----*/}
            <Tabs
                value={props.value}
                onChange={handleChange}
                textColor="secondary"
                sx={{
                    marginLeft: 'Auto'
                }}
                indicatorColor="white"
                aria-label="secondary tabs example"
            >
                {routes.map((route, index) => (
                    <Tab
                        key={`${routes}${route.activeIndex}`}
                        sx={{
                            ...theme.typography.tab, //using spread operator typography type jss used from theme.js
                            minWidth: 10,
                            marginLeft: "25px",
                            color: "white",
                            indicatorColor: "white"
                        }}
                        component={Link}
                        value="one"
                        to={route.link}
                        label={route.name}
                        aria-owns={route.ariaOwns}
                        aria-haspopup={route.ariaPopup}
                        onMouseOver={route.mouseOver}
                    />
                ))}
            </Tabs>

            <ButtonEstimate />

           

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                classes={{
                    paper: {
                        backgroundColor: theme.palette.common.blue,
                        color: "white",
                        borderRadius: 0
                    }
                }}  // styling for paper component
                MenuListProps={{ onMouseLeave: handleClose }} // after mouse removed menu disappear
                elevation={0} // drops all the default styling of dropdown menu from mui 
                style={{ zIndex: 1302 }}
                keepMounted
            >
                {/* classes for passing down all component styles to menuItem */}
                {menuOptions.map((option, i) => (
                    <MenuItem
                        key={`${option}${i}`}
                        component={Link} to={option.link}
                        classes={{
                            root: {
                                ...theme.typography.tab,
                                opacity: 0.7,
                                "&:hover": {
                                    opacity: 1
                                }
                            }
                        }}
                        onClick={(event) => { handleMenuItemClick(event, i); props.setValue(1); handleClose() }}
                        selected={i === props.selectedIndex && props.value === 1}  // this will determine when to show selected tab of menu

                    >
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>

        </React.Fragment>
    );


    // mobile website drawer
    const drawer = (
        <React.Fragment>

            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{
                    paper: {
                        backgroundColor: theme.palette.common.blue,
                        fontFamily: "Roboto"
                    }
                }}
            >
                {/* pushing down the menu drawer below the logo */}
                <div
                    sx={{
                        ...theme.mixins.toolbar,
                        marginBottom: "3em",
                        [theme.breakpoints.down('lg')]: {
                            marginBottom: "2em"
                        },
                        [theme.breakpoints.down('sm')]: {
                            marginBottom: "1.25em"
                        }
                    }}
                />


                <List disablePadding>
                    {routes.map(route => (
                        <ListItem
                            divider
                            key={`${route}${route.activeIndex}`}
                            button
                            component={Link}
                            to={route.link}
                            selected={props.value === route.activeIndex}
                            classes={{
                                selected: {
                                    "& .MuiListItemText-root": {
                                        opacity: 1
                                    }
                                }
                            }}
                            onClick={() => { setOpenDrawer(false); props.setValue(route.activeIndex) }}
                        >
                            <ListItemText
                                sx={{
                                    ...theme.typography.tab,
                                    color: "white",
                                    opacity: 0.7
                                }}
                                disableTypography
                            >
                                {route.name}
                            </ListItemText>
                        </ListItem>
                    ))}

                    <ListItem
                        onClick={() => { setOpenDrawer(false); props.setValue(5) }}
                        divider
                        button
                        component={Link}
                        classes={{
                            root: {
                                backgroundColor: theme.palette.common.orange
                            },
                            selected: {
                                "& .MuiListItemText-root": {
                                    opacity: 1
                                }
                            }
                        }}
                        to="/estimate"
                        selected={props.value === 5}
                    >

                        <ListItemText
                            sx={{
                                ...theme.typography.tab,
                                color: "white",
                                opacity: 0.7
                            }}
                            disableTypography
                        >
                            Free Estimate
                        </ListItemText>
                    </ListItem>

                </List>
            </SwipeableDrawer>


            {/*----- Dotted Icon -----*/}
            <IconButton aria-label="Example"
                sx={{
                    marginLeft: "auto",
                    color: "white",
                    "&:hover": {
                        backgroundColor: "transparent"
                    }
                }}
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple
                size="large"
            >
                <Grid2>
                    <MoreVertIcon sx={{
                        height: "30px",
                        width: "30px",
                        disableRipple: false,
                        color: "black"
                    }}
                    />
                </Grid2>

            </IconButton>

        </React.Fragment >
    )



    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar
                    position="fixed"
                    color="primary"
                    sx={{
                        zIndex: theme.zIndex.modal + 1
                    }}
                >
                    <Toolbar disableGutters>
                        <Button
                            component={Link}
                            to="/"
                            disableRipple
                            onClick={() => props.setValue(0)}
                            sx={{
                                padding: 0,
                                "&:hover": {
                                    backgroundColor: "transparent"   // button hover effect disabled on logo 
                                }
                            }}
                        >
                            {/* <img
                                alt="company logo"
                                sx={{
                                    height: "8em",
                                    [theme.breakpoints.down('lg')]: {
                                        height: "7em"
                                    },
                                    [theme.breakpoints.down('sm')]: {
                                        height: "5.5em"
                                    }
                                }}
                                src={logo}
                            /> */}

                            <CardMedia
                                component="img"
                                sx={{ width: 400 }}
                                image={logo}
                                alt="Live from space album cover"
                            />

                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Card
                sx={{
                    ...theme.mixins.toolbar,
                    marginBottom: "3em",
                    [theme.breakpoints.down('lg')]: {
                        marginBottom: "2em"
                    },
                    [theme.breakpoints.down('sm')]: {
                        marginBottom: "1.25em"
                    }
                }}
            />
        </React.Fragment>
    )
}