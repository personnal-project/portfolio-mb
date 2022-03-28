import React from 'react';
import { motion } from 'framer-motion';
import Mobile from './img/mobile.jpg';
import Ia from './img/ia.jpg'
import Web from './img/web.jpg';
import './services.scss'



function Services(){
    return(
        <div className='Services' id='services'>
            <section className='Services-pc'>
                <div className='title-serv-pc'>
                    <motion.h1 initial={{y:30, opacity:0}} animate={{y:0, opacity: 1}} transition={{duration:0.6}}>SERVICES</motion.h1>    
                </div>
                <div className='serv-web-pc'>
                    <div className='web-content-pc'>
                        <h1>Web</h1>
                        <div className='web-content-info-pc'>
                            <motion.div initial={{opacity:0, x: 270}} animate={{opacity:1, x:0}} transition={{duration:0.7}} className='web-box-pc'>Site vitrine</motion.div>
                            <motion.div className='web-box-pc'>Application Web</motion.div>
                            <motion.div initial={{opacity:0, x: -270}} animate={{opacity:1, x:0}} transition={{duration:0.7}} className='web-box-pc'>Site E-commerce</motion.div>
                        </div>
                    </div>
                    <div className='web-img-pc'><img src={Web}/></div>
                </div>
                <div className='serv-mob-pc'>
                <div className='mob-img-pc'><img src={Mobile}/></div>
                    <div className='mob-content-pc'>
                        <h1>Mobile</h1>
                        <div className='mob-content-info-pc'>
                            <motion.div initial={{opacity: 0, scale:0}} animate={{opacity:1, scale: 1 }} transition={{duration:0.6}} className='mob-box-pc'>
                                <p>Application Mobile</p>
                                <p>IOS / Android</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className='serv-ia-pc'>
                    <div className='ia-content-pc'>
                        <h1>IA</h1>
                        <div className='ia-content-info-pc'>
                            <motion.div initial={{opacity:0, x: -270}} animate={{opacity:1, x:0}} transition={{duration:0.7}} className='ia-box-pc'>Machine Learning</motion.div>
                            <motion.div initial={{opacity:0, x: 270}} animate={{opacity:1, x:0}} transition={{duration:0.7}} className='ia-box-pc'>Deep Learning</motion.div>
                        </div>
                    </div>
                    <div className='ia-img-pc'><img src={Ia}/></div>
                </div>
            </section>
        </div>
    )


}

export default Services;