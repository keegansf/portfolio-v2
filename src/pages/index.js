import React from "react"

import Header from "../components/header/header-component"
import Hero from "../components/hero/hero-component"
import About from "../components/about/about-component"
import Project from "../components/project/project-component"

import "../styles/index-styles.scss"

const IndexPage = () => (
  <>
    <Hero>
      <Header />
    </Hero>
    <About />
    <Project />
  </>
)

export default IndexPage
