import React from 'react'
import SectionDivider from "./Images/divider.png"


export default function skills() {
    return (
        <>
            <div className="section-seprator" id='skills' data-aos="fade-in">
                <span className="section-head" id="about">skills</span>
                <span className="section-sub-head">my expertise</span>
                <img className="section-divider"
                    src={SectionDivider} alt="" />
            </div>

            <div className='section-parent'  data-aos="fade-out">
                <div className='about-card skill-card'>
                    <div className='about-child skill-card'>
                        <div className='skills-list'>
                            <div>
                                <h5>Languages :</h5>
                                <ul>
                                    <li>HTML
                                        <div className="progress">
                                            <div className="progress-bar bg-info" role="progressbar" style={{ width: "90%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </li>
                                    <li>CSS
                                        <div className="progress">
                                            <div className="progress-bar bg-info" role="progressbar" style={{ width: "90%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </li>
                                    <li>JavaScript
                                        <div className="progress">
                                            <div className="progress-bar bg-info" role="progressbar" style={{ width: "70%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </li>
                                    <li>C++
                                        <div className="progress">
                                            <div className="progress-bar bg-info" role="progressbar" style={{ width: "90%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </li>
                                    <li>LaTeX
                                        <div className="progress">
                                            <div className="progress-bar bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h5>Libraries :</h5>
                                <ul>
                                    <li>React Js
                                        <div className="progress">
                                            <div className="progress-bar bg-info" role="progressbar" style={{ width: "70%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </li>
                                    <li>Bootstrap
                                        <div className="progress">
                                            <div className="progress-bar bg-info" role="progressbar" style={{ width: "80%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h5>Tools & Platforms:</h5>
                                <ul>
                                    <li>Git
                                        <div className="progress">
                                            <div className="progress-bar bg-info" role="progressbar" style={{ width: "60%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h5>Database:</h5>
                                <ul>
                                    <li>MySQL
                                        <div className="progress">
                                            <div className="progress-bar bg-info" role="progressbar" style={{ width: "60%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>
                    {/* <div className='about-img'>
                        <img src="" alt="" />
                    </div> */}
                </div>
            </div>
        </>
    )
}
