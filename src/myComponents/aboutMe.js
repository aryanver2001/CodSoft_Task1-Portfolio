import React from 'react'
import SectionDivider from "./Images/divider.png"
import AboutImg from "./Images/aboutimg.jpg"

export default function aboutMe() {
    return (
        <>
            <div className="section-seprator" data-aos="fade-in">
                <span className="section-head" id="about">about
                    me</span>
                <span className="section-sub-head">why me?</span>
                <img className="section-divider"
                    src={SectionDivider} alt="" />
            </div>
            <div className='section-parent' data-aos="fade-out">
                <div className='about-card'>
                    <div className='about-img'>
                        <img src={AboutImg} alt="" />   
                    </div>
                    <div className='about-child'>
                    <p>As a developer, I am a motivated individual with strong skills in programming and problem-solving. Detail-oriented, always learning
                        and seeking to contribute to a dynamic team with innovative solutions.</p>
                    <div className='about-skill-list'>
                        <h5>Here are few Highlights :</h5>
                        <ul>
                            <li>Frontend Developer</li>
                            <li>ReactJs Developer</li>
                            <li>C++ Programming</li>
                        </ul>
                    </div>
                    <div className="cv-download-btn-about">
                    <a href="ARYAN_RESUME.pdf"
                        download="ARYAN_RESUME.pdf"
                        target="_blank" rel="noreferrer">
                        <button className="btn-about">Download CV <i
                            className="fa fa-download"></i></button>
                    </a>
                </div>
                    </div>
                </div>

            </div>
        </>

    )
}
