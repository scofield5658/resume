import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class About extends PureComponent {
  render() {
    const { data } = this.props;
    const {
      name, email, phone, image, bio, address, resumeDownload,
    } = data;
    const profilepic = `images/${image}`;
    const {
      district, city, state, zip,
    } = address;

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="Tim Baker Profile Pic" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {district}
                    <br />
                    {city}
                    {" "}
                    {state}
,
                    {" "}
                    {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
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
