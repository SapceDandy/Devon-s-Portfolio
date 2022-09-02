import React, { useEffect, useState } from "react";

import { About, Footer, Header, Skills, Contact, Work, Matter } from "./container";
import { Navbar, NavigationDots } from "./components";

import "./App.scss";

const App = () => {
  let [active, setActive] = useState("about");
  /*window.visualViewport.offsetTop*/
  useEffect(() => {
  //console.log("react Dom: ", window.visualViewport)
  const pageSection = document.getElementsByClassName("app__container");
  //console.log(pageSection)
  //console.log("Page Section: ", pageSection[2].offsetTop)
  window.addEventListener("scroll", () => {
      Array.from(pageSection).forEach((section) => {
          const top = section.offsetTop - 10;
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
      {/*<Matter />*/}
      <Header />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
