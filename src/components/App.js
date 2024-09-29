import React, { useState } from "react";
import Header from "./ui/Header";
import { ThemeProvider, StyledEngineProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Theme from "./ui/Theme";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



function App() {

  const [selectedIndex, setSelectedIndex] = useState(0); // 
  const [value, setValue] = useState(0);

  return (
    <StyledEngineProvider injectFirst>
      (<ThemeProvider theme={Theme}>
        {/* BrowserRouter component provide correct url to the browser and navigation via forward and back buttons on page  */}
        <BrowserRouter>
          <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />

          {/* Routes/switch component only renders the first component which matches the given root */}
          <Routes> 
            <Route exact path="/" Component={(props) => <LandingPage {...props} setValue={setValue} setSelectedIndex={selectedIndex} />} />
            <Route exact path="/services" Component={() => <div>Services</div>} />
            <Route exact path="/customsoftware" Component={() => <div>Custom Software</div>} />
            <Route exact path="/mobileapps" Component={() => <div>Mobile Apps</div>} />
            <Route exact path="/websites" Component={() => <div>Websites</div>} />
            <Route exact path="/revolution" Component={() => <div>Revolution</div>} />
            <Route exact path="/about" Component={() => <div>About Us</div>} />
            <Route exact path="/contact" Component={() => <div>Contact Us</div>} />
            <Route exact path="/estimate" Component={() => <div>Estimate</div>} />
          </Routes>
          <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
          
        </BrowserRouter>
      </ThemeProvider>)
    </StyledEngineProvider>
  );
}

export default App;

