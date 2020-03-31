import React from "react"

import "./buttons-tyles.scss"

const Button = ({ buttonText, buttonImage, secondary, isVisible }) => (
  <button className={`button ${secondary ? "secondary" : ""}`}>
    <img
      src={buttonImage}
      className={`button-image ${isVisible ? "isVisible" : ""}`}
    />
    {buttonText}
  </button>
)

export default Button
