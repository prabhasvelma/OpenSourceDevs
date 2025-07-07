import React, { useEffect } from "react";
import ReactGA from "react-ga";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import routes from "./routes";
import { trackingId } from "./keys";

const App = () => {
  useEffect(() => {
    ReactGA.initialize(trackingId);
  }, []);
  return (
    <div id="root">
      <div className="main-content">
        <Navbar />
        {routes}
      </div>
      <Footer />
    </div>
  );
};

export default App;
