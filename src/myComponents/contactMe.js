import React from 'react'
import SectionDivider from "./Images/divider.png"

export default function contactMe() {
    return (
        <>
            <div className="section-seprator" id='contact' data-aos="fade-in">
                <span className="section-head" id="about">contact me</span>
                <span className="section-sub-head">get in touch &#129309;</span>
                <img className="section-divider"
                    src={SectionDivider} alt="" />
            </div>

            <div className='section-parent'  data-aos="fade-in">
                <div className='contact-card'>
                    <div className='contact-child'>
                        <h3>Let's Keep In Touch!</h3>
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
                    </div>
                    <div className="contact-form">
                        <div className='form-head'>
                            <span>Send Me a Message</span>
                        </div>
                        <div className="form-cont">
                            <form action="https://formspree.io/f/mdoqeqjq" method='POST'>
                                <input type="text" name="Name" className="form-control" autoComplete='off' placeholder="Name" required />
                                <input type="email" name='Email' className="form-control" autoComplete='off' placeholder="Email" required />
                                <input type="number" name='Number' className="form-control" autoComplete='off' placeholder="Phone Number" required />
                                <textarea name='Message' className="form-control" rows="3" placeholder='Message' required></textarea>
                                <button type="submit" className="contact-btn">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
