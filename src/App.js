import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";

import "./App.scss";
import Socials from "./components/Socials/Socials";
import Box from "./components/Box/Box";
import boxInfo from "./data/info.json";
import title from "./assets/logo-transparent.png";
import main from "./assets/main-home.png";
import LocationBlock from "./components/LocationBlock/LocationBlock";

function App() {
  return (
    <div className="App">
      <div className="smp-main-content">
        <div>
          <FadeIn transitionDuration={1500} delay={250}>
            <div className="smp-main-content__title">
              <img src={title} alt="Title reading Scott MacDonald in calligraphy"/>
            </div>
            <div className="smp-main-content__location">
              <LocationBlock
                location="Liverpool, England, UK"
                phone="07514548545"
                email="scotthughesljmu@gmail.com"
              />
            </div>
            <div className="smp-main-content__nav">
              <Socials />
            </div>
            <div className="smp-main-content__image">
              <img src={main} alt="Scott MacDonald and a fellow collegue working on a laptop pair programming" />
            </div>
            {boxInfo.map((box) => (
              <div className="smp-main-content__box">
                <Box
                  title={box.title}
                  description={box.description}
                  colour={box.colour}
                  additionalDescription={box.additionalDescription}
                  additionalDescriptionB={box.additionalDescriptionB}
                  additionalDescriptionC={box.additionalDescriptionC}
                />
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

export default App;
