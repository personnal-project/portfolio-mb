import React from "react";
import Typewriter from "typewriter-effect";
import './about.scss'


function About(){

    return(
        <div className="About" id='about'>
            <section className="About-pc">
                <div className="about-id-pc">3D Face is coming</div>
                <div className="about-intro-pc">
                    <h1>Je suis Développeur <span className="typing"> <Typewriter
                        onInit={(typewriter) =>{
                        typewriter.typeString("Web").pauseFor(1000).deleteAll().typeString("Mobile").pauseFor(1000).deleteAll().typeString("IA").pauseFor(1000).deleteAll().typeString("Web").pauseFor(1000).deleteAll().typeString("Mobile").pauseFor(1000).deleteAll().typeString("IA").pauseFor(1000).deleteAll().typeString("Web").pauseFor(1000).deleteAll().typeString("Mobile").pauseFor(1000).deleteAll().typeString("IA").pauseFor(1000).deleteAll().typeString("Web").start();
                        }}
                        /></span> </h1>

                    <h1>Mon expertise comprend le développement et la maintenance d'applications et de sites Web responsive. Je suis spécialisé dans le développement Web et Application</h1>

                </div>
                <div className="about-cir">
                <div className="about-circle-up"></div>
                </div>
               
            </section>
        </div>
    )


}

export default About;