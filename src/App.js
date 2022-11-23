import "./App.css";
import React from "react";
import BaseRoutes from "./Routing/routes";
// import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <div>
      {/* <ParallaxProvider> */}
      <BaseRoutes />
      {/* </ParallaxProvider> */}
    </div>
  );
}

export default App;
