import React from "react"
import Button from "../button/button-component"
import githubIcon from "../../images/github-button-icon.svg"
import scroll from "../../images/scroll-indicator.webm"
import heroVideo from "../../images/developer_png.webm"

import "./hero-styles.scss"

const Hero = ({ children }) => {
  return (
    <>
      {children}
      <div className="hero-wrapper">
        <div className="hero-text-wrapper">
          <h1 className="hero-title">Hello! my name is</h1>
          <h2 className="hero-name"> Keegan Fernandes</h2>
          <h3 className="hero-subtitle">I build and design web experiences</h3>
          <p className="hero-body">
            I am a web developer in Toronto, ON who specializes in building and
            designing websites and web applications.
          </p>
          <div className="hero-button-group">
            <Button buttonText="Github" buttonImage={githubIcon} secondary />
            <Button buttonText="Lets's Talk" isVisible />
          </div>
        </div>
        <div className="hero-video-wrapper">
          <video
            width="600px"
            className="hero-video"
            autoplay
            loop
            muted
            playsinline
            controls
            src={heroVideo}
          />
        </div>
      </div>
      <video
        className="hero-scroll"
        autoplay
        loop
        muted
        playsinline
        src={scroll}
      />
    </>
  )
}

export default Hero
