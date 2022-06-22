import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class About extends PureComponent {
  render() {
    const { data } = this.props;
    const {
      email, image, bio, address,
    } = data;
    const profilepic = (image && `${process.env.PUBLIC_URL}/images/${image}`) || "";
    const { home, city } = address;

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="avatar" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span className="fa fa-home" />
                  {" "}
                  <span>{home}</span>
                  <br />
                  <span className="fa fa-map-marker" />
                  {" "}
                  <span>{city}</span>
                  <br />
                  <span className="fa fa-envelope" />
                  {" "}
                  <span>{email}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

About.propTypes = {
  data: PropTypes.object, /* eslint-disable-line */
};

About.defaultProps = {
  data: { address: {} },
};

export default About;
