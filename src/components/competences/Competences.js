import React,{useEffect} from 'react';
import './competences.scss'
import Aos from 'aos';
import {motion} from 'framer-motion';



function Competences(){

    useEffect(() => {
        Aos.init({});
       }, []);



    return(
        <div className='Competences' id='competences'>
            <section className='Competences-pc'>
                <div className='title-comp-pc'>
                    <motion.h1 initial={{y:30, opacity:0}} animate={{y:0, opacity: 1}} transition={{duration:0.6}}>COMPETENCES</motion.h1>
                </div>
                <div className='intro-comp-pc'>
                    <p>Mes expériences personnelles et professionnelles me permettent d'être aujourd'hui Autonome, Polyvalent et de disposer des compétences techniques dont voici un aperçu</p>
                </div>
                <div className='comp-content-pc'>
                    <div className='comp-left-pc'>
                        <div className='lang' data-aos="fade-left"
                                 data-aos-duration="1200">
                            <h2>Langages de programmations</h2>
                            <div className='lang-content-pc'>
                                <div className='html'>
                                    <p>HTML/CSS</p>
                                    <div className='html-line'><span></span></div>
                                </div>
                                <div className='scss'>
                                    <p>SCSS</p>
                                    <div className='scss-line'><span></span></div>
                                </div>
                                <div className='javascript'>
                                    <p>Javascript</p>
                                    <div className='js-line'><span></span></div>
                                </div>
                                <div className='python'>
                                    <p>Python</p>
                                    <div className='py-line'><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='comp-right-pc'>
                        <div className='fram' data-aos="fade-right"
                                 data-aos-duration="1200">
                            <h2>Framework</h2>
                            <div className='fram-content'>
                                <div className='react'>
                                    <p>React</p>
                                    <div className='react-line'><span></span></div>
                                </div>
                                <div className='django'>
                                    <p>Django</p>
                                    <div className='django-line'><span></span></div>
                                </div>
                                <div className='cypress'>
                                    <p>Cypress</p>
                                    <div className='cypress-line'><span></span></div>
                                </div>
                                <div className='vuejs'>
                                    <p>Vue JS</p>
                                    <div className='vuejs-line'><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Competences-mob'>
                <div className='title-comp-mob'>
                    <h1>Compétences</h1>    
                </div>
                <div className='lang-mob'>
                    <h2>Langages</h2>
                    <div className='lang-content-mob'>
                        <div className='html-mob'>
                            <p>HTML/CSS</p>
                            <div className='html-line-mob'><span></span></div>
                        </div>
                        <div className='javascript-mob'>
                            <p>Javascript</p>
                            <div className='js-line-mob'><span></span></div>
                        </div>
                        <div className='python-mob'>
                            <p>Python</p>
                            <div className='py-line-mob'><span></span></div>
                        </div>
                        <div className='java-mob'>
                            <p>Java</p>
                            <div className='java-line-mob'><span></span></div>
                        </div>
                        <div className='sql-mob'>
                            <p>SQL</p>
                            <div className='sql-line-mob'><span></span></div>
                        </div> 
                    </div>
                </div>
                <div className='fram-mob'>
                    <h2>Framework</h2>
                    <div className='fram-content-mob'>
                        <div className='react-mob'>
                            <p>React</p>
                            <div className='react-line-mob'><span></span></div>
                        </div>
                        <div className='django-mob'>
                            <p>Django</p>
                            <div className='django-line-mob'><span></span></div>
                        </div>
                        <div className='cypress-mob'>
                            <p>Cypress</p>
                            <div className='cypress-line-mob'><span></span></div>
                        </div>
                        <div className='reactn-mob'>
                            <p>React Native</p>  
                            <div className='reactn-line-mob'><span></span></div>
                        </div>
                        <div className='boot-mob'>
                            <p>Bootstrap</p>
                            <div className='boot-line-mob'><span></span></div>
                        </div>
                    </div>
                </div>   
            </section>
        </div>
    )

    }


export default Competences;