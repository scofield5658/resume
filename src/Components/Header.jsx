import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Header extends PureComponent {
  render() {
    const { data } = this.props;
    const { name, occupation, social } = data;
    const networks = social.map((network) => (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className} />
        </a>
      </li>
    ));

    return (
      <header id="home">

        <nav id="nav-wrap">

          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
          </ul>

        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3><span>{occupation}</span></h3>
            <hr />
            <ul className="social">
              {networks}
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>

      </header>
    );
  }
}

Header.propTypes = {
  data: PropTypes.object, /* eslint-disable-line */
};

Header.defaultProps = {
  data: {
    social: [],
  },
};

export default Header;
