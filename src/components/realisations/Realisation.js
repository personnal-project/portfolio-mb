import React from 'react';
import './realisation.scss';
import Modal from './modal/Modal';
import { Link } from 'react-router-dom';
import MBimmo from './img/mb-immo.PNG';
import Winera from './img/winera.PNG';
import Baobab from './img/baobab.PNG';
import {motion} from 'framer-motion';




function Realisation(){


    return(
        <div className='Realisation' id='realisations'>
            <div className='Realisation-pc'>
                <div className='title-real-pc'>
                    <motion.h1 initial={{y:30, opacity:0}} animate={{y:0, opacity: 1}} transition={{duration:0.6}}>REALISATIONS</motion.h1>
                </div>
                <div className='real-content-pc'>
                    <div className='title-real-content-pc'>
                        <h2>Découvrez les différents projets que j'ai crée à ce jour</h2>
                    </div>
                    <div className='sort-real-content-pc'>
                        <div className='tri-real-pc'>
                            <button className='sort' id='all-p'>Tous</button>
                            <button className='sort' id='web'>Web</button>
                            <button className='sort' id='mobile'>Mobile</button>
                            <button className='sort' id='ia'>IA</button>

                        </div>
                    </div>
                    <div className='box-content-real'>
                        <div className='box-real'>
                            <div className='box-imgr'>
                                <img src={MBimmo}/>
                            </div>
                            <div className='banniere'>MB Immobilier</div>
                        </div>
                        <div className='box-real'>
                            <div className='box-imgr'>
                                <img src={Baobab}/>
                            </div>
                            <div className='banniere'>Winera</div>
                        </div>
                        
                        <div className='box-real'>
                            <div className='box-imgr'>
                                <img src={Winera}/>
                            </div>
                            <div className='banniere'>Winera</div>
                        </div>
                    </div>       
                </div>
            </div>
            <div className='Realisation-mob'>
                <div className='title-real-mob'>
                    <h1>Réalisations</h1>
                </div>
                <div className='real-content-mob'>
                    <div className='box-real-mob'>
                        <div className='banniere-mob'>MB Immobilier</div>
                    </div>
                    <div className='box-real-mob'>
                        <div className='banniere-mob'>Flo Création</div>
                    </div>
                    <div className='box-real-mob'>
                        <div className='banniere-mob'>Winera</div>
                    </div>
                    <div className='box-real-mob'>
                        <div className='banniere-mob'>Chez Ailda</div>
                    </div>
                </div>
            </div>
            <div className='Realisation-tab'>
                <div className='title-real'>
                    <h1>Realisations</h1>
                </div>
            </div>

    </div>
    )

}

export default Realisation;