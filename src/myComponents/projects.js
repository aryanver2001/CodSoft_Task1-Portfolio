import React from 'react'
import SectionDivider from "./Images/divider.png"
import AIimage from "./Images/project-ai.jpg"
import Rocketimage from "./Images/project-rocket.png"
import Shopimage from "./Images/project-shop.png" 
import Portfolioimage from "./Images/project-portfolio.jpg"
import { Link } from 'react-router-dom'

export default function projects() {
  return (
    <>
      <div className="section-seprator" id='projects' data-aos="fade-in">
        <span className="section-head" id="about">projects</span>
        <span className="section-sub-head">my works!</span>
        <img className="section-divider"
          src={SectionDivider} alt="" />
      </div>
      <div className='section-parent'>
        <div className='project-head-card'>
          <div className="card project-card" data-aos="fade-out">
            <img className="card-img-top" src={Shopimage} alt="Card image cap" />
            <div className="card-body">
              <h4 className="card-title">E-Commerce Website</h4>
              <h6 className="card-subtitle mb-2 text-muted">Tech Used: ReactJs | Bootstrap | HTML | CSS</h6>
              <p className="card-text">Designed and implemented a responsive website for my independent jewellery store, highlighting proficiency in React, HTML,
                and CSS. Delivered a seamless user experience, showcasing expertise in web development and user interface design.</p>
              <a href="https://jaiprakashornamenthouse.netlify.app/" className="btn btn-dark text-white" target='blank'>Explore </a>
            </div>
          </div>
          <div className="card project-card" data-aos="fade-out">
            <img className="card-img-top" src={Portfolioimage} alt="Card image cap" />
            <div className="card-body">
              <h4 className="card-title">Portfolio Website</h4>
              <h6 className="card-subtitle mb-2 text-muted">Tech Used: ReactJs | Bootstrap | HTML | CSS</h6>
              <p className="card-text">Showcased advanced HTML, CSS, and JavaScript skills in responsive web design, creating dynamic, user-friendly interfaces,
                demonstrating elevated development expertise.</p>
              <a href="#top" className="btn btn-dark text-white">You are there!</a>
            </div>
          </div>
          <div className="card project-card" data-aos="fade-out">
            <img className="card-img-top" src={Rocketimage} alt="Card image cap" />
            <div className="card-body">
              <h4 className="card-title">RocketMan Website</h4>
              <h6 className="card-subtitle mb-2 text-muted">Tech Used: HTML | CSS</h6>
              <p className="card-text">Leveraged extensive knowledge to architect and develop a HTML/CSS
                website, gaining practical acumen to address realworld challenges, enhancing teamwork and personal growth.</p>
              <a href="https://rocketman2001.netlify.app/" className="btn btn-dark text-white" target='blank'>Explore</a>
            </div>
          </div>
          <div className="card project-card" data-aos="fade-out">
            <img className="card-img-top" src={AIimage} alt="Card image cap" />
            <div className="card-body">
              <h4 className="card-title">Brain Tumor Detection AI Model</h4>
              <h6 className="card-subtitle mb-2 text-muted">Tech Used: TensorFlow | Densenet</h6>
              <p className="card-text">In collaboration with a team of three members, developed an
                advanced AI model for precise brain tumor detection using TensorFlow, Densenet, and CNNs. Strengthened tech proficiency,
                teamwork, and project contributions, elevating overall performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
