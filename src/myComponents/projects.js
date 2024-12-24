import React from 'react'
import SectionDivider from "./Images/divider.png"
import Calcimage from "./Images/project-calc.png"
import Rocketimage from "./Images/project-rocket.png"
import Shopimage from "./Images/project-shop.png" 
import Portfolioimage from "./Images/project-portfolio.jpg"


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
            <img className="card-img-top" src={Shopimage} />
            <div className="card-body">
              <h4 className="card-title">E-Commerce Website</h4>
              <h6 className="card-subtitle mb-2 text-muted">Tech Used: ReactJs | Bootstrap | HTML | CSS</h6>
              <p className="card-text">Designed and implemented a responsive website for my independent jewellery store, highlighting proficiency in React, HTML,
                and CSS. Delivered a seamless user experience, showcasing expertise in web development and user interface design.</p>
              <a href="https://jaiprakashornamenthouse.netlify.app/" className="btn btn-dark text-white" target='blank'>Explore </a>
            </div>
          </div>
          <div className="card project-card" data-aos="fade-out">
            <img className="card-img-top" src={Portfolioimage} />
            <div className="card-body">
              <h4 className="card-title">Portfolio Website</h4>
              <h6 className="card-subtitle mb-2 text-muted">Tech Used: ReactJs | Bootstrap | HTML | CSS</h6>
              <p className="card-text">Showcased advanced HTML, CSS, and JavaScript skills in responsive web design, creating dynamic, user-friendly interfaces,
                demonstrating elevated development expertise.</p>
              <a href="#top" className="btn btn-dark text-white">You are there!</a>
            </div>
          </div>
          <div className="card project-card" data-aos="fade-out">
            <img className="card-img-top" src={Rocketimage} />
            <div className="card-body">
              <h4 className="card-title">RocketMan Website</h4>
              <h6 className="card-subtitle mb-2 text-muted">Tech Used: HTML | CSS</h6>
              <p className="card-text">Leveraged extensive knowledge to architect and develop a HTML/CSS
                website, gaining practical acumen to address realworld challenges, enhancing teamwork and personal growth.</p>
              <a href="https://rocketman2001.netlify.app/" className="btn btn-dark text-white" target='blank'>Explore</a>
            </div>
          </div>
          <div className="card project-card" data-aos="fade-out">
            <img className="card-img-top" src={Calcimage} />
            <div className="card-body">
              <h4 className="card-title">Basic Calculator</h4>
              <h6 className="card-subtitle mb-2 text-muted">Tech Used: ReactJs | Bootstrap | HTML | CSS</h6>
              <p className="card-text">Developed a basic calculator application using React, demonstrating proficiency in state management, user input handling, and implementing interactive features to enhance functionality and user experience.
              </p>
              <a href="https://basi-c-alc.netlify.app/" className="btn btn-dark text-white" target='blank'>Explore</a>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
