import { createTheme, adaptV4Theme } from "@mui/material";


const softBlue = "#1D366F"  
const softOrange = "#ff9100"
const softGrey = "#868686"
const softskyBlue = "#0B72B9"

export default createTheme(adaptV4Theme({
    palette: {
        common: {
            blue: `${softBlue}`,
            orange: `${softOrange}`
        },
        primary: {
            main: `${softBlue}`
        },
        secondary: {
            main: `${softOrange}`
        },
        grey: {
            main: `${softGrey}`
        },
        skyblue: {
            main: `${softskyBlue}`
        }
    },
    typography: {
        tab: {
            textTransform: 'none',
            fontWeight: 700,
            fontSize: "1rem"
        },
        estimate: {
            fontSize: "1rem",
            textTransform: "none",
            color: "White"
        },
        h2: {
            fontFamily: "Roboto",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: "primary",
            lineHeight: 1.5        
        },
        h3: {
            fontSize: "2.5rem",
            color: "arcBlue"
        },
        h4: {
            fontSize: "1.75rem",
            color: "arcBlue",
            fontWeight: 700
        },
        subtitle1: {
            fontSize: "1.25rem",
            fontWeight: 300,
            color: "arcGrey"
        },
        subtitle2: {
            color: "white",
            fontSize: "1.25rem",
            fontWeight: 300
        },
        learnButton: {
            borderColor: "arcBlue",
            color: "arcBlue",
            borderWidth: 2,
            textTransform: "none",
            borderRadius: 50,
            fontFamily: "Roboto",
            fontWeight: "bold",
        }
    },
    
}));