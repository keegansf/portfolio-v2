import React from "react"
import SkillGroup from "../skill-group/skill-group-component"

import "./skill-list-styles.scss"

const SkillList = ({ groupName, skillGroup }) => (
  <div className="skill-list">
    <h3 className="skill-group-title">{groupName}</h3>
    <div>
      {skillGroup.map(({ id, ...otherGroupProps }) => (
        <SkillGroup key={id} {...otherGroupProps} />
      ))}
    </div>
  </div>
)
export default SkillList
