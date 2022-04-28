import React, {useEffect} from 'react';
import Aos from 'aos';
import Mobile from './img/mobile.jpg';
import Ia from './img/ia.jpg'
import Web from './img/web.jpg';
import './services.scss'



function Services(){

    useEffect(() => {
        Aos.init({});
       }, []);


    return(
        <div className='Services' id='services'>
            <section className='Services-pc'>
                <div className='title-serv-pc'>
                    <h1>SERVICES</h1>    
                </div>
                <div className='serv-web-pc'>
                    <div className='web-content-pc'>
                        <h1>Web</h1>
                        <div className='web-content-info-pc'>
                            <div data-aos="fade-left"
                                 data-aos-duration="1200" 
                                 className='web-box-pc'>Site vitrine</div>

                            <div  data-aos="zoom-in"
                                 data-aos-duration="700"  className='web-box-pc'>Application Web</div>
                            <div  data-aos="fade-right"
                                 data-aos-duration="1200" className='web-box-pc'>Site E-commerce</div>
                        </div>
                    </div>
                    <div className='web-img-pc'><img src={Web}/></div>
                </div>
                <div className='serv-mob-pc'>
                <div className='mob-img-pc'><img src={Mobile}/></div>
                    <div className='mob-content-pc'>
                        <h1>Mobile</h1>
                        <div className='mob-content-info-pc'>
                            <div data-aos="zoom-in"
                                 data-aos-duration="1000"
                                 className='mob-box-pc'>
                                <p>Application Mobile</p>
                                <p>IOS / Android</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='serv-ia-pc'>
                    <div className='ia-content-pc'>
                        <h1>IA</h1>
                        <div className='ia-content-info-pc'>
                            <div  data-aos="fade-left"
                                 data-aos-duration="1000" className='ia-box-pc'>Machine Learning</div>
                            <div data-aos="fade-right"
                                 data-aos-duration="1000" className='ia-box-pc'>Deep Learning</div>
                        </div>
                    </div>
                    <div className='ia-img-pc'><img src={Ia}/></div>
                </div>
            </section>
        </div>
    )


}

export default Services;