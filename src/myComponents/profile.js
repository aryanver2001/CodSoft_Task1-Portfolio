import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import profilePhoto from "./Images/profile-photo.png";

//Frontend Developer<i className="bi bi-pc-display-horizontal logo"></i>
export default function Profile() {
    return (
        <div className="dark-bg profile-parent">
            <div className="profile-card">
                <div className="profile-child">
                    <div className="profile-content">
                        <span className="name">aryan verma</span>
                        <span className="designation">
                            <TypeAnimation
                                sequence={[
                                    "frontend developer 👨‍💻",
                                    1000,
                                    "reactJs developer ⚛️",
                                    1000,
                                    "c++ developer 😉",
                                    1000,
                                    "Web development 💻",
                                    1000,
                                ]}
                                speed={30}
                                repeat={Infinity}
                            />
                        </span>
                    </div>
                    <div className="profile-logo">
                        <a className="bi bi-linkedin logo"
                            href="https://www.linkedin.com/in/aryanver6/"
                            target="_blank" rel="noreferrer"></a>
                        <a className="bi bi-instagram logo"
                            href="https://www.instagram.com/aryan_verma02_/"
                            target="_blank" rel="noreferrer"></a>
                        <a className="bi bi-github logo"
                            href="https://github.com/aryanver2001"
                            target="_blank" rel="noreferrer"></a>
                        <a className="bi bi-facebook logo"
                            href="https://www.facebook.com/profile.php?id=100008700275122"
                            target="_blank" rel="noreferrer"></a>
                    </div>
                    <div className="cv-download-btn">
                        <a href="ARYAN_RESUME.pdf"
                            download="ARYAN_RESUME.pdf"
                            target="_blank" rel="noreferrer">
                            <button className="btn">Download CV <i
                                className="fa fa-download"></i></button>
                        </a>
                    </div>
                </div>
                <div className="profile-img">
                    <img src={profilePhoto}
                        alt="" />
                </div>
            </div>
        </div>
    )
}
