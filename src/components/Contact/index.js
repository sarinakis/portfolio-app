import { useEffect, useState, useRef } from "react";
import Loader from "react-loaders";
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss';

const Contact = () => {
    const [letterCLass, setLetterClass] = useState('text-animates')
    const form = useRef()

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, []);

    const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_k0oeme6', 'template_gudhrl9', form.current, 'MIapfMyy6T2TF470R')
      .then(
        () => {
            window.location.reload(false)
        }, (error) => {
            console.log(error.text);
        }
      )
  }
    
    return (
        <>
        <div className="container contact-page">
            <div className="text-zone">
                <h2>
                    <AnimatedLetters 
                    letterClass={letterCLass}
                    strArray={['C', 'o', 'n', 't', 'a',
                               'c', 't', ' ', 'm', 'e', '!']}
                    idx={15}
                    /> 
                </h2>
                <p>
                    I’m interested in freelance opportunities as well as practice programs to gather experience in the filed of Software Engineering. 
                    However, if you any have other request or question, don’t hesitate to use the form.
                </p>
                <div className="contact-form">
                    <form id="contact-form" ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                              <input 
                              placeholder="Full Name" 
                              type="text" 
                              name="name" 
                              required />
                            </li>
                            <li className="half">
                              <input
                                placeholder="Email"
                                type="email"
                                name="email"
                                required
                              />
                            </li>
                            <li>
                              <input
                                placeholder="Subject"
                                type="text"
                                name="subject"
                                required
                              />
                            </li>
                            <li>
                              <textarea
                                placeholder="Message"
                                name="message"
                                required
                              ></textarea>
                            </li>
                            <li>
                              <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="info-map">
                George Sarinakis,
                <br />
                Thessaloniki Greece,
                <br />
                <span>g.sarinakis@gmail.com</span>
            </div>
            <div className="map-wrap">
                <MapContainer center={[40.62691201163577, 22.948467864275823]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[40.62691201163577, 22.948467864275823]}>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="ball-clip-rotate-multiple"/>
        </>
    )
}

export default Contact