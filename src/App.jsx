import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
    };
  }

  componentDidMount() {
    this.getResumeData();
  }

  getResumeData() {
    fetch("./resumeData.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json()).then((resumeData) => {
      this.setState({ resumeData });
    });
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
