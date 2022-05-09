import React from 'react';
import './footer.scss';
import Malt from './img/malt-svg.svg';
import {motion} from 'framer-motion';
import {a} from 'react-router-dom';



function Footer(){

    return(
        <div className='Footer' id='contact'>
            <div className='Footer-pc'>
                <div className='title-footer'><motion.h1 initial={{y:30, opacity:0}} animate={{y:0, opacity: 1}} transition={{duration:0.6}}>CONTACT</motion.h1></div>
                <div className='footer-content'>
                    <div className='contentF leftF'>
                        <h2>Une question ? Un projet à réaliser ?</h2>
                        <form className='contact-form'>
                            <div className='form-content'>
                                <input type="text" name="name" id="name" placeholder='Nom' required></input>
                                <input type="text" name="name" id="prenom" placeholder='Prénom' required></input>
                                <input type="text" name="phone" id='phone' placeholder='Téléphone' required></input>
                                <input type="email" name="email" id='mail' placeholder='Adresse E-mail' required></input>
                                <textarea placeholder='Entrez votre message' required />
                                <button className='submit-btn' type="submit">Envoyer</button>
                            </div>
                        </form>
                    </div>
                    <div className='contentF rightF'>
                        <div className='footer-icon'>
                           <a href="https://www.linkedin.com/in/kevin-mboumba-290671172/" target='_blank'><i class="bi bi-linkedin"></i></a>
                           <a href="https://github.com/personnal-project" target='_blank'><i class="bi bi-github"></i></a>
                           <a href="https://www.malt.fr/profile/kevinmboumba" target='_blank'><img className='bi-malt' src={Malt}/></a>
                        </div>
                        <div className='footerbtn-scroll'>
                            <div className='scrollup'>
                                <i class="bi bi-arrow-up"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='copyright-footer'>
                    <p>Tous droits réservés Kevin Mboumba 2022</p>
                </div>
            </div>
        </div>
    )

}

export default Footer;