import React from "react"

import "./about-styles.scss"
import displayPhoto from "../../images/dp.svg"
import SkillList from "../skill-list/skill-list-component"
import { SKILL_DATA } from "../../data/skill-data"

class About extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      skills: SKILL_DATA,
    }
  }

  render() {
    const { skills } = this.state
    return (
      <div>
        <div className="about">
          <div className="about-wrapper">
            <div className="about-text">
              <h2 className="section-heading about-title">About</h2>
              <h3 className="section-subheading">A Little Background</h3>
              <p className="about-body">
                Hello! I’m Keegan Fernandes a Front-End Web Developer and
                Designer from toronto, ON. I specialize in building websites and
                web applications that are both well designed and efficient using
                the most up to date technologies.
                <br />
                <br />I am also famsiliar with the JAM stack, focused around
                Javascript, API’s, and Markdown, as well as GraphQL and Apollo.
              </p>
            </div>
            <img
              src={displayPhoto}
              alt="portrait of a person"
              className="about-image"
            />
          </div>
          <div className="about-skills-wrapper">
            <h2 className="section-heading skills-title">Skills</h2>
            <div className="skill-list-component">
              {skills.map(({ id, ...otherSkillProps }) => (
                <SkillList key={id} {...otherSkillProps} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
