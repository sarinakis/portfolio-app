import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Home = () => {
    const [letterCLass, setLetterClass] = useState('text-animates')
    const nameArray = [' ', 'G', 'e', 'o', 'r', 'g', 'e']    
    const messageArray = ['A', 'n', ' ', 'u', 'n', 
                          'd', 'e', 'r', 'g', 'r', 
                          'a', 'd', 'u', 'a', 't', 
                          'e', ' ', 's', 't', 'u', 
                          'd', 'e', 'n', 't', '.'
                        ]    

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
        <div className="container home-page">
            <div className="text-zone" >
                <h1>
                    <span className={letterCLass}>H</span>
                    <span className={`${letterCLass} _12`}>i,</span>
                    <br/> 
                    <span className={`${letterCLass} _13`}>I</span>
                    <span className={`${letterCLass} _14`}>'m </span>
                    <AnimatedLetters letterClass={letterCLass} strArray={nameArray} idx={15} />
                    <br/>
                    <AnimatedLetters letterClass={letterCLass} strArray={messageArray} idx={22} />
                </h1>
                <Link to="/contact" className="flat-button">Contact me!</Link>
            </div>
        </div>
        <Loader type="ball-clip-rotate-multiple"/>
        </>
    )
}

export default Home