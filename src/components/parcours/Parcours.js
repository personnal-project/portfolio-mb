import React from 'react';
import './parcours.scss';
import Degree from './img/degree.png'
import University from './img/university.png'
import Localisation from './img/local.png'
import {motion} from 'framer-motion';



function Parcours(){
    return(
        <div className='Parcours' id='parcours'>
            <div className='Parcours-pc'>
                <div className='title-containerP'>
                    <motion.h1 className='title-parc' initial={{y:30, opacity:0}} animate={{y:0, opacity: 1}} transition={{duration:0.6}}>PARCOURS</motion.h1>
                </div>


                                        {/* Bac +2 Section */}


                <div className='parc-content'>
                    <div className='leftP contentP'>
                        <motion.div initial={{scale:0}} animate={{scale: 1}} transition={{duration:0.8}} className='box-leftP bac2P'>
                            <div className='left-box-contentP'>
                                <div className='section-box bat'><img src={University} /><p>Elyon Company</p></div>
                                <div className='section-box niv'><img src={Degree} /><p>2è année BTS SIO SLAM</p></div>
                                <div className='section-box loc'><img src={Localisation} /><p>Le blanc-Mesnil</p></div>
                            </div>
                        </motion.div>
                    </div>
                    
                                        {/* Ligne center */}


                    <div className='center-lineP'>
                        <div className='circleP upP'></div>
                        <div className='lineP'></div>
                        <div className='circleP downP'></div>
                    </div>

                                         {/* Bac +1 and Bac +3 Section */}


                    <div className='rightP contentP'>
                        <motion.div initial={{scale:0}} animate={{scale: 1}} transition={{duration:0.8}} className='box-rightP bac1P'>
                            <div className='box-contentP'>
                                <div className='section-box bat'><img src={University} /><p>Universite de Versailles</p></div>
                                <div className='section-box niv'><img src={Degree} /><p>1ère année Licence MIASHS</p></div>
                                <div className='section-box loc'><img src={Localisation} /><p>Versailles</p></div>
                            </div>
                        </motion.div>

                                         {/* Bac +3 Section */}


                        <motion.div initial={{scale:0}} animate={{scale: 1}} transition={{duration:0.8}} transition={{duration:0.8}} className='box-rightP bac3P'>
                            <div className='box-contentP'>
                                <div className='section-box bat'><img src={University} /><p>Digital Campus</p></div>
                                <div className='section-box niv'><img src={Degree} /><p>3è année Bachelor CDSD</p></div>
                                <div className='section-box loc'><img src={Localisation} /><p>Paris 11ème</p></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className='Parcours-mob'>
                <div className='title-containerP-mob'>
                    <h1 className='title-parc'>Parcours</h1>
                </div> 
                <div className='parcours-content-mob'>
                    <div className='box-parcours-mob Bac1-mob'>
                        <div className='ban-parc-mob'>
                            <p>Bac +1</p>    
                        </div>
                        <div className='box-contentP-mob'>
                            <div className='section-box-mob bat'><img src={University} /><p>Université de Versailles</p></div>
                            <div className='section-box-mob niv'><img src={Degree} /><p>1è année Licence MIASHS</p></div>
                            <div className='section-box-mob loc'><img src={Localisation} /><p>Versailles</p></div>
                        </div>
                    </div>
                    <div className='box-parcours-mob bac2-mob'>
                        <div className='ban-parc-mob'>
                            <p>Bac +2</p>    
                        </div>
                        <div className='box-contentP-mob'>
                            <div className='section-box-mob bat'><img src={University} /><p>Elyon Company</p></div>
                            <div className='section-box-mob niv'><img src={Degree} /><p>2è année BTS SIO SLAM</p></div>
                            <div className='section-box-mob loc'><img src={Localisation} /><p>Le blanc-Mesnil</p></div>
                        </div>
                    </div>
                    <div className='box-parcours-mob bac3-mob'>
                        <div className='ban-parc-mob'>
                            <p>Bac +3</p>    
                        </div>
                        <div className='box-contentP-mob'>
                            <div className='section-box-mob bat'><img src={University} /><p>Digital Campus</p></div>
                            <div className='section-box-mob niv'><img src={Degree} /><p>3è année Bachelor CDSD</p></div>
                            <div className='section-box-mob loc'><img src={Localisation} /><p>Paris 11è</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parcours;