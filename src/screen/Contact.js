import React from 'react';
import { Hero } from '../components';
import backImage from '../assets/image/Contact-hero.png';
import useTitle from '../utils/useTitle';

const Contact = () => {
    useTitle("CONTATTI")
    return (
        <>
            <Hero img={backImage} dasableOverlay>
                <div className='contact-hero container'>
                    <div className='contact-hero-text'>
                        <div className='contact-hero-title'>
                            <h2 className='contact-titòe'>
                                Vorresti aggiungere un cocktail?
                            </h2>
                            <h4 className='contact-subtitle'>
                                Il nostro team è sempre disponibile per valutare possibili
                                nuove ricette e ad aggiungerle al nostro database!
                            </h4>
                        </div>
                    </div>
                    <div className='contact-form-container container'>
                        <form 
                            className='contact-form container'
                            action='https://formspree.io/f/mgepggej'
                            method='POST'
                        >
                            <div className='form-group'>
                                <label htmlFor='nome'>Nome</label>
                                <input
                                    type='text'
                                    id='nome'
                                    name='nome'
                                    className='input'
                                    placeholder='Antonio'
                                />
                                <hr />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='cognome'>Cognome</label>
                                <input 
                                    type='text'
                                    id='cognome'
                                    name='cognome'
                                    className='input'
                                    placeholder='Annunziata'
                                />
                                <hr />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                type="email"
                                id="email"
                                name="email"
                                className="input"
                                placeholder="daniele@esempio.com"
                                />
                                <hr />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cellulare">Telefono</label>
                                <input
                                type="cel"
                                id="cellulare"
                                name="cellulare"
                                className="input"
                                placeholder="555 555-5555"
                                />
                                <hr />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ricetta">La tua ricetta</label>
                                <textarea
                                type="tel"
                                id="ricetta"
                                name="ricetta"
                                className="input"
                                placeholder="Descrivi la tua ricetta"
                                />
                            </div>
                            <button className="btn btn-primary">Invia Ricetta</button>
                        </form>
                    </div>
                </div>
            </Hero>
        </>
    )
}

export default Contact;