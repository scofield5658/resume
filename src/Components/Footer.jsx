import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Footer extends PureComponent {
  render() {
    const { data } = this.props;
    const networks = data.social.map((network) => (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className} />
        </a>
      </li>
    ));

    return (
      <footer>

        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {networks}
            </ul>

            <ul className="copyright">
              <li>&copy; Copyright 2020 Scofield Guo</li>
            </ul>

          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  data: PropTypes.object, /* eslint-disable-line */
};

Footer.defaultProps = {
  data: { social: [] },
};

export default Footer;
