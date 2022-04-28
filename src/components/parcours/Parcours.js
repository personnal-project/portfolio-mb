import React, {useEffect} from 'react';
import './parcours.scss';
import Aos from 'aos';
import Degree from './img/degree.png'
import University from './img/university.png'
import Localisation from './img/local.png'
import {motion} from 'framer-motion';



function Parcours(){

    useEffect(() => {
        Aos.init({});
       }, []);


    return(
        <div className='Parcours' id='parcours'>
            <div className='ParcoursPc'>
                <div className='ParcoursPcContent'>
                    <div className='titleContainerP'>
                        <motion.h1 className='titleParc' initial={{y:30, opacity:0}} animate={{y:0, opacity: 1}} transition={{duration:0.6}}>PARCOURS</motion.h1>
                    </div>
                    <div className='contentCircle'>
                        
                        <div data-aos="fade-up"
                             data-aos-duration="1000"
                             className='circleContainer'>
                            <div className='circleParcoursPc'>Bac +1</div>
                            <div className='circleInfo'>
                                <p>Licence MIASHS</p>
                                <p className='school'>Université de Versailles</p>
                             
                            </div>
                        </div>                        
                       
                        <div data-aos="fade-up"
                             data-aos-duration="1500"
                             className='circleContainer'>
                            <div className='circleParcoursPc'>Bac +2</div>
                            <div className='circleInfo'>
                                <p>BTS SIO option SLAM</p>
                                <p className='school'>Elyon Company</p>
                         
                            </div>
                        </div>

                        <div data-aos="fade-up"
                             data-aos-duration="2000"
                             className='circleContainer'>
                            <div className='circleParcoursPc'>Bac +3</div>
                            <div className='circleInfo'>
                                <p>Bachelor Developpeur Web</p>
                                <p className='school'>Digital Campus</p>
                            </div>
                        </div>   
                     </div>
                </div>

               


            
            </div>
            
        </div>
    )
}

export default Parcours;