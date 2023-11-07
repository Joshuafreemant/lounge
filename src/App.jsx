import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Banner from "./Components/Banner";
import Cookies from "./Components/Cookies";
import LifeStyle from "./Components/LifeStyle";
import Festive from "./Components/Festive";
import Somptueux from "./Components/Somptueux";
import Formules from "./Components/Formules";
import Photos from "./Components/Photos";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [showCookies, setShowCookies] = useState(true);

  return (
    <div className="relative">
      <Banner />
      {showCookies && (
        <Cookies showCookies={showCookies} setShowCookies={setShowCookies} />
      )}
      <LifeStyle/>
      <Festive/>
      <Somptueux/>
      <Formules/>
      <Photos/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
