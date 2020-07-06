import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Social from "./components/Social";
import resumeData from "./resumeData";
import LoadingOverlay from "react-loading-overlay";
import ReactGA from "react-ga";

class App extends Component {
  state = {
    loading: false,
  };
  constructor() {
    super();
    this.onLoading = this.onLoading.bind(this);
    ReactGA.initialize("UA-155371065-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  onLoading(loadingStatus) {
    this.setState({ loading: loadingStatus });
  }
  render() {
    return (
      <LoadingOverlay
        active={this.state.loading}
        spinner
        text="Submitting Form..."
      >
        <div className="App">
          <Header resumeData={resumeData} />
          <About resumeData={resumeData} />
          <Resume resumeData={resumeData} />
          <Portfolio resumeData={resumeData} onLoading={this.onLoading} />
          <Social resumeData={resumeData} />
          {/* <Testimonials resumeData={resumeData}/> */}
          <Footer resumeData={resumeData} />
        </div>
      </LoadingOverlay>
    );
  }
}

export default App;
