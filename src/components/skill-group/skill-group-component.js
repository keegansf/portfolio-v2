import React from "react"
import skillArrow from "../../images/skill-arrow.svg"

import "./skill-group-styles.scss"

const SkillGroup = ({ id, skillItem }) => (
  <>
    <ul className="skill-group">
      <li className="skill-item">
        <img className="skill-arrow" src={skillArrow} />
        {skillItem}
      </li>
    </ul>
  </>
)

export default SkillGroup
