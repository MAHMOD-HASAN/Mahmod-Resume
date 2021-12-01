import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <section className="footer">
            <div className="social">
              <a href=""><FacebookIcon /></a>
              <a href=""><InstagramIcon /></a>
              <a href=""><TwitterIcon /></a>
              <a href=""><LinkedInIcon /></a>
            </div>

            <ul className="list">
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                   <Link to='/home/banner'>Banner</Link>
                </li>
                <li>
                   <Link to='/contact'>Contact Me</Link>
                </li>
                <li>
                   <Link to='/project'>My Projects</Link>
                </li>
            </ul>
            <small>mahmod hasan &copy; junior developer</small>
        </section>
    );
};

export default Footer;