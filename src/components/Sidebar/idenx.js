import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/Logo_Sari_1.svg';
import LogoSubtitle from '../../assets/images/Logo_Subtitle.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className ='logo-subtitle' src={LogoSubtitle} alt="logoSubtitle" />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4B5261" />
            </NavLink>
            <NavLink exact='true' activeclassname="active" className='about-link' to="/about">
                <FontAwesomeIcon icon={faUser} color="#4B5261" />
            </NavLink>
            <NavLink exact='true' activeclassname="active" className='contact-link' to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4B5261" />
            </NavLink>
        </nav>
        <div className="social-icons">
            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/george-sarinakis/'>
                <FontAwesomeIcon icon={faLinkedin} color="#4B5261" />
            </a>
            <a target="_blank" rel='noreferrer' href='https://www.instagram.com/g.sarinakis/'>
                 <FontAwesomeIcon icon={faGithub} color="#4B5261" />
            </a>
            <a target="_blank" rel='noreferrer' href='https://github.com/sarinakis'>
                <FontAwesomeIcon icon={faInstagram} color="#4B5261" />
            </a>
        </div>
    </div>
)

export default Sidebar