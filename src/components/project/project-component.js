import React, { useState, useEffect } from "react"
import yumiBg from "../../images/yumi-bg.png"

import "./project-styles.scss"

const portfolio = [
  {
    id: 1,
    title: "YUMI: Album Cover",
    description:
      "Album Art created with Photoshop and Ilustrator. The goal was to design an album cover using photo composition and manipulation.",
    sourceLink: "",
    liveLink: "",
    skills: ["photoshop", "illustrator"],
    bgImage: require("../../images/yumi-bg.png"),
    imgSource: require("../../images/yumi-front.png"),
    category: ["all", "motion design"],
  },
  {
    id: 2,
    title: "SHER: E-Commerce Website",
    description:
      "Album Art created with Photoshop and Ilustrator. The goal was to design an album cover using photo composition and manipulation.",
    sourceLink: "",
    liveLink: "",
    skills: ["photoshop", "illustrator"],
    bgImage: require("../../images/yumi-bg.png"),
    imgSource: require("../../images/yumi-front.png"),
    category: ["all", "web design"],
  },
  {
    id: 3,
    title: "Ysabel Agaton: Portfolio",
    description:
      "Album Art created with Photoshop and Ilustrator. The goal was to design an album cover using photo composition and manipulation.",
    sourceLink: "",
    liveLink: "",
    skills: ["photoshop", "illustrator"],
    bgImage: require("../../images/ysabel-bg.png"),
    imgSource: require("../../images/ysabel-front.png"),
    category: ["all", "motion design"],
  },
  {
    id: 4,
    title: "Liveloud: Motion Design",
    description:
      "Album Art created with Photoshop and Ilustrator. The goal was to design an album cover using photo composition and manipulation.",
    sourceLink: "",
    liveLink: "",
    skills: ["photoshop", "illustrator"],
    bgImage: require("../../images/yumi-bg.png"),
    imgSource: require("../../images/yumi-front.png"),
    category: ["all", "illustration"],
  },
  {
    id: 5,
    title: "LOVE_EARTH: Logo Design",
    description:
      "Album Art created with Photoshop and Ilustrator. The goal was to design an album cover using photo composition and manipulation.",
    sourceLink: "",
    liveLink: "",
    skills: ["photoshop", "illustrator"],
    bgImage: require("../../images/yumi-bg.png"),
    imgSource: require("../../images/yumi-front.png"),
    category: ["all", "motion design"],
  },
  {
    id: 6,
    title: "Project: Poster",
    description:
      "Album Art created with Photoshop and Ilustrator. The goal was to design an album cover using photo composition and manipulation.",
    sourceLink: "",
    liveLink: "",
    skills: ["photoshop", "illustrator"],
    bgImage: require("../../images/yumi-bg.png"),
    imgSource: require("../../images/yumi-front.png"),
    category: ["all", "illustration", "motion design"],
  },
]

function App() {
  const [filter, setFilter] = useState("all")
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(portfolio)
  }, [])

  useEffect(() => {
    setProjects([])
    const filtered = portfolio.map(p => ({
      ...p,
      filtered: p.category.includes(filter),
    }))
    setProjects(filtered)
  }, [filter])

  return (
    <div className="project-wrapper">
      <h2 className="section-heading project-title">Projects</h2>
      <h3 className="section-subheading project-subtitle">Reccent Work</h3>
      <div className="project-labels">
        <button
          className="project-label-link"
          active={filter === "all"}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className="project-label-link"
          active={filter === "web design"}
          onClick={() => setFilter("web design")}
        >
          Web Design
        </button>
        <button
          className="project-label-link"
          active={filter === "mobile"}
          onClick={() => setFilter("motion design")}
        >
          Motion Design
        </button>
        <button
          className="project-label-link"
          active={filter === "ux-ui"}
          onClick={() => setFilter("illustration")}
        >
          Illustration
        </button>
      </div>
      <div className="project-container">
        {projects.map(item =>
          item.filtered === true ? (
            <div className="project" key={item.id}>
              <div
                class="wrapper"
                style={{ backgroundImage: `url(${item.bgImage})` }}
              >
                <div className="project-comp-header">
                  <h1 className="project-comp-title">{item.title}</h1>
                  <div className="project-comp-icon-wrapper">
                    <a className="project-comp-link">
                      <img className="project-comp-icon" src="" />
                    </a>
                    <a className="project-comp-link">
                      <img className="project-comp-icon" src="" />
                    </a>
                  </div>
                </div>
                <p className="project-comp-body">{item.description}</p>
                <img class="front-image" src={item.imgSource} />
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  )
}

export default App
