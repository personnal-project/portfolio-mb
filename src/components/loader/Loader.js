
import './loader.scss';
import {motion} from 'framer-motion';


function Loader(){


    return(
        (
            <div className="Loader">
                <div className='Loader-pc'>
                <motion.h1 initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{duration:1.4}}>Bienvenue</motion.h1>
                </div>
                <div className='Loader-mob'>
                    <motion.h1 className='load-mob'>Bienvenue</motion.h1>
                </div> 
            </div>
        )
    )
}

export default Loader;
