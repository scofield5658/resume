import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Resume extends PureComponent {
  render() {
    const { data } = this.props;
    const {
      educations, works, skills,
    } = data;
    const educationComponent = educations.map((education) => (
      <div key={education.school}>
        <h3>{education.school}</h3>
        <p className="info">
          {education.degree}
          {" "}
          <span>&bull;</span>
          <em className="date">{education.graduated}</em>
        </p>
        <p>{education.description}</p>
      </div>
    ));
    const workComponent = works.map((work) => (
      <div key={work.company}>
        <h3>{work.company}</h3>
        <p className="info">
          {work.title}
          <span>&bull;</span>
          {" "}
          <em className="date">{work.years}</em>
          <span>&bull;</span>
          {" "}
          <em>
            <span className="fa fa-map-marker" />
            {" "}
            {work.location}
          </em>
        </p>
        <p>{work.description}</p>
      </div>
    ));
    const skillsComponent = skills.map((skill) => {
      const className = `bar-expand ${skill.name.toLowerCase()}`;
      return (
        <li key={skill.name}>
          <span style={{ width: skill.level }} className={className} />
          <em>{skill.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {educationComponent}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            {workComponent}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">{skillsComponent}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Resume.propTypes = {
  data: PropTypes.object, /* eslint-disable-line */
};

Resume.defaultProps = {
  data: {
    educations: [],
    works: [],
    skills: [],
  },
};

export default Resume;
