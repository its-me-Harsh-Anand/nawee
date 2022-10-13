import React from 'react'
import '../css/Footer.css'
function Footer() {
  return (
    <div className='footer full-bleed'>
        <div className="logo ft-logo">
            <img src="/assets/logowhite.svg" alt="logo" />
            <span>NaWee Logistics</span>
        </div>
        <div className="links">
            <div className="link">
                <h3>Contact Info</h3>
                <ul>
                    <li><a href='/'>Logos State & Edo State, Nigeria</a></li>
                    <li><a href='/'>contact@naweeng.com</a></li>
                    <li><a href='/'>+2345678</a></li>
                </ul>
            </div>
            <div className="link">
                <h3>Value Links</h3>
                <ul>
                    <li><a href='/'>Terms & Conditions</a></li>
                    <li><a href='/'>Privacy Policy</a></li>
                    <li><a href='/'>FAQ</a></li>
                    <li><a href='/'>FeedBack</a></li>
                </ul>
            </div>
            <div className="link">
                <h3>Our Services</h3>
                <ul>
                    <li><a href='/'>Send Parcel</a></li>
                    <li><a href='/'>Customers</a></li>
                    <li><a href='/'>Agents</a></li>
                    <li><a href='/'>Booths</a></li>
                </ul>
            </div>
        </div>

        <div className="socials">
            <div className="social">
                <a href="/" target="_blank" rel="noopener noreferrer"><img src="/assets/twitter.svg" alt="tw" /></a>
                <a href="/" target="_blank" rel="noopener noreferrer"><img src="/assets/youtube.svg" alt="yt" /></a>
            </div>
            <div className="social">
                <a href="/" target="_blank" rel="noopener noreferrer"><img src="/assets/facebook.svg" alt="fb" /></a>
                <a href="/" target="_blank" rel="noopener noreferrer"><img src="/assets/instagram.svg" alt="insta" /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer