import React, { Component } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import infos from './resumeData.json';

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: infos,
    };
  }

  render() {
    const { resumeData } = this.state;
    return (
      <div className="App">
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Portfolio data={resumeData.portfolio} />
        <Footer data={resumeData.main} />
      </div>
    );
  }
}

export default App;
