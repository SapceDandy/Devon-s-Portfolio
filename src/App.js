import { useEffect, useState } from "react";
import { About, Footer, Header, Skills, Contact, Work } from "./container";
import { Navbar, NavigationDots, BackgroundEffect, SocialMedia } from "./components";

import "./App.scss";

const App = () => {
  let [active, setActive] = useState("welcome");
  useEffect(() => {
  const pageSection = document.getElementsByClassName("app__container");
  window.addEventListener("scroll", () => {
      Array.from(pageSection).forEach((section) => {

          const top = section.offsetTop - 100;
          if (window.scrollY >= top) {
            setActive(section.id);
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
      <Skills />
      <Work />
      <About />
      <Contact />
      <Footer />
      <SocialMedia />
    </div>
  );
}

export default App;
