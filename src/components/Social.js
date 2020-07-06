import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import { SocialMediaIconsReact } from "social-media-icons-react";
export default class Social extends Component {
  render() {
    let buttonSize = "60";
    return (
      <section id="portfolio">
        <ReactTooltip />
        <div className="row">
          <div className="twelve columns collapsed">
            <h1   data-aos="fade-down">Social</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
              data-aos="fade-up"
            >
              <label for="inp" className="inp">
                <div
                  style={{
                    display: "inline-block",
                    margin: "1rem",
                  }}
                >
                  <SocialMediaIconsReact
                    borderColor="rgba(0,0,0,0)"
                    borderWidth="2"
                    borderStyle="solid"
                    icon="linkedin"
                    iconColor="rgba(222,141,0,1)"
                    backgroundColor="rgba(0,0,0,0)"
                    iconSize="2"
                    roundness="50%"
                    url="https://www.linkedin.com/in/gabriel-duarte-482b3861"
                    size={buttonSize}
                  />
                </div>
                <div
                  style={{ display: "inline-block", margin: "1rem" }}
                  data-aos="fade-up"
                >
                  <SocialMediaIconsReact
                    borderColor="rgba(0,0,0,0)"
                    borderWidth="2"
                    borderStyle="solid"
                    icon="facebook"
                    iconColor="rgba(222,141,0,1)"
                    backgroundColor="rgba(0,0,0,0)"
                    iconSize="2"
                    roundness="50%"
                    url="https://www.facebook.com/Gabriields18"
                    size={buttonSize}
                  />
                </div>
                <div
                  style={{ display: "inline-block", margin: "1rem" }}
                  data-aos="fade-up"
                >
                  <SocialMediaIconsReact
                    borderColor="rgba(0,0,0,0)"
                    borderWidth="2"
                    borderStyle="solid"
                    icon="instagram"
                    iconColor="rgba(222,141,0,1)"
                    backgroundColor="rgba(0,0,0,0)"
                    iconSize="2"
                    roundness="50%"
                    url="https://www.instagram.com/g_duarts/"
                    size={buttonSize}
                  />
                </div>
                <div
                  style={{ display: "inline-block", margin: "1rem" }}
                  data-aos="fade-up"
                >
                  <SocialMediaIconsReact
                    borderColor="rgba(0,0,0,0)"
                    borderWidth="2"
                    borderStyle="solid"
                    icon="github"
                    iconColor="rgba(222,141,0,1)"
                    backgroundColor="rgba(0,0,0,0)"
                    iconSize="2"
                    roundness="50%"
                    url="https://github.com/GabrielDuarteMG"
                    size={buttonSize}
                  />
                </div>
                <div
                  style={{ display: "inline-block", margin: "1rem" }}
                  data-aos="fade-up"
                >
                  <SocialMediaIconsReact
                    borderColor="rgba(0,0,0,0)"
                    borderWidth="2"
                    borderStyle="solid"
                    icon="phone"
                    iconColor="rgba(222,141,0,1)"
                    backgroundColor="rgba(0,0,0,0)"
                    iconSize="2"
                    roundness="50%"
                    url="https://api.whatsapp.com/send?phone=5534991705400"
                    size={buttonSize}
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
