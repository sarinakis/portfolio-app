import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faSass } from '@fortawesome/free-brands-svg-icons';    
import Loader from 'react-loaders';

const About = () => {
    const [letterCLass, setLetterClass] = useState('text-animates')

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, []);
    
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h2>
                    <AnimatedLetters 
                    letterClass={letterCLass}
                    strArray={['H', 'e', 'y', ' ', 't', 'h',
                               'e', 'r', 'e', ',', ' ', 'm', 
                               'e', 'e', 't', ' ', 'm', 'e.'
                            ]
                            }
                    idx={15}
                    />
                </h2>
                <p>
                    My name is George Sarinakis, and I'm a committed person  who's constantly trying to improve.
                    I aspire to offer everything i have in everything I do because I know that perseverance and dedication are the keys to success.
                    I’m a vital member of any team due to my devotion and enthusiasm for learning, and I look forward to where my career will take me in the future.
                </p>
                <p>
                    I aspire to become a software engineer with expertise in Front-End and Back-End technologies.
                </p>
                <Link to="/contact" className="flat-button">Contact me!</Link>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespiner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faSass} color="#D0649C" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81d" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D2E" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="ball-clip-rotate-multiple"/>
        </>
    )
}


export default About