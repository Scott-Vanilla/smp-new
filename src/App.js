import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";

import "./App.scss";
import Socials from "./components/Socials/Socials";
import Box from "./components/Box/Box";
import boxInfo from "./data/info.json";
import title from "./assets/logo-alt.png";
import main from "./assets/main-home.png";
import LocationBlock from "./components/LocationBlock/LocationBlock";
import audi1 from "./assets/audi1.jpg";
import audi2 from "./assets/audi2.png";
import audi3 from "./assets/audi3.png";

function App() {
  // const handleDownload = (url) => {
  //   const a = document.createElement('a')
  //   a.href = url
  //   a.download = url.split('/').pop()
  //   document.body.appendChild(a)
  //   a.click()
  //   document.body.removeChild(a)
  // }
  return (
    <div className="App">
      <div className="smp-main-content">
        <div>
          <FadeIn transitionDuration={1500} delay={250}>
            <div className="smp-main-content__title">
              <img
                src={title}
                alt="Title reading Scott MacDonald in calligraphy"
                width="300px"
              />
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
              <img
                src={main}
                alt="Scott MacDonald and a fellow collegue working on a laptop pair programming"
              />
            </div>
            <div className="smp-main-content__box-container">
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
            </div>
            <hr className="smp-hr" />
            <div className="smp-main-content__highlights-title">
              <h2>Highlights</h2>
              <p>
                This section displays the top projects/applications I have
                worked on across my career, some due to the impressive nature
                and others because they're simply my favourite.
              </p>
            </div>
            <div className="smp-main-content__highlights">
              <div className="smp-main-content__highlight">
                <div className="smp-main-content__highlight__img">
                  <img src={audi1} alt="AudiPX" />
                  <a href="https://www.audi.co.uk/uk/web/en/find-and-buy/finance-and-offers/part-exchange-calculator.html#/">
                    <div className="smp-main-content__highlight__img__overlay">
                      <div className="smp-main-content__highlight__img__overlay__head">
                        <h3>Audi Part Exchange Web App</h3>
                      </div>
                      <div className="smp-main-content__highlight__img__overlay__body">
                        Click To Visit.
                      </div>
                    </div>
                  </a>
                </div>
                <div className="smp-main-content__highlight__title">
                  <h3>Audi Part Exchange</h3>
                </div>
              </div>
              <div className="smp-main-content__highlight">
                <div className="smp-main-content__highlight__img">
                  <img src={audi2} alt="AudiFinance" />
                  <a href="https://www.audi.co.uk/uk/web/en/find-and-buy/finance-and-offers/finance-calculator.html">
                    <div className="smp-main-content__highlight__img__overlay">
                      <div className="smp-main-content__highlight__img__overlay__head">
                        <h3>Audi Finance Web App</h3>
                      </div>
                      <div className="smp-main-content__highlight__img__overlay__body">
                        Click To Visit.
                      </div>
                    </div>
                  </a>
                </div>
                <div className="smp-main-content__highlight__title">
                  <h3>Audi Finance</h3>
                </div>
              </div>
              <div className="smp-main-content__highlight">
                <div className="smp-main-content__highlight__img">
                  <img src={audi3} alt="AudiBATD" />
                  <a href="https://www.audi.co.uk/uk/web/en/find-and-buy/book-a-test-drive.html">
                    <div className="smp-main-content__highlight__img__overlay">
                      <div className="smp-main-content__highlight__img__overlay__head">
                        <h3>Audi BATD Web App</h3>
                      </div>
                      <div className="smp-main-content__highlight__img__overlay__body">
                        Click To Visit.
                      </div>
                    </div>
                  </a>
                </div>
                <div className="smp-main-content__highlight__title">
                  <h3>Audi Book A Test Drive</h3>
                </div>
              </div>
            </div>
            {/* <div className="smp-main-content__cv">
              <div className="smp-main-content__cv__button">
                  <button onClick={()=>handleDownload("src/assets/CV.pdf")}>Download Résumé</button>
              </div>
            </div> */}
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

export default App;
