import { useEffect, useState } from "react";
import { About, Footer, Header, Skills, Contact, Work } from "./container";
import { Navbar, NavigationDots, BackgroundEffect, SocialMedia } from "./components";

import "./App.scss";

const App = () => {
  let [active, setActive] = useState("welcome");
  /*window.visualViewport.offsetTop*/
  useEffect(() => {
  //console.log("react Dom: ", window.visualViewport)
  const pageSection = document.getElementsByClassName("app__container");
  //console.log(pageSection)
  //console.log("Page Section: ", pageSection[2].offsetTop)
  //console.log("pageSection: ", pageSection)
  window.addEventListener("scroll", () => {
      Array.from(pageSection).forEach((section) => {

          const top = section.offsetTop - 100;
          //console.log("Section: ", section.offsetTop)
          //const height = section.height;
          //console.log("window.scrollY: ", window.scrollY)
          
          if (window.scrollY >= top) {
            setActive(section.id);
            //console.log(`Active ${counter}-${active}: `, top)
          }
      })
  });
  })

  return (
    <div className="app">
      <NavigationDots active = {active} />
      <Navbar />
      <BackgroundEffect />
      {/*<Matter />*/}
      <Header />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
      <SocialMedia />
    </div>
  );
}

export default App;
