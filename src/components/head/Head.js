import React from 'react';
import {Link} from 'react-scroll';
import { saveAs } from "file-saver";
import CV from "./file/CV.pdf"
import { motion } from 'framer-motion';
import './head.scss';
import BackServ from './video/waving.mp4'

function Head() {

  const saveCV = () =>{
    saveAs(
      CV,
      "CV.pdf"
    );
  };

  return (
    <div className="Head">


                            {/* Head pc*/}
      <section className='Head-pc'>
        <video className='video-pc' autoPlay loop muted>
          <source src={BackServ} type="video/mp4" /> 
        </video>
        <div className='bar'>
          <div className='logo'>
            <svg width="79" height="69" viewBox="0 0 59 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path initial={{ x:-30}} animate={{x:0}} transition={{duration:0.9, ease: "easeInOut"}}  d="M5.744 27V0.143998H5.78L19.424 19.512L17.948 19.224L31.556 0.143998H31.628V27H28.172V8.064L28.388 9.828L18.56 23.724H18.488L8.516 9.828L9.128 8.208V27H5.744ZM45.8033 0.971998C48.4193 0.971998 50.4713 1.512 51.9593 2.592C53.4713 3.648 54.2273 5.304 54.2273 7.56C54.2273 8.928 53.9153 10.116 53.2913 11.124C52.6673 12.132 51.7913 12.924 50.6633 13.5C49.5593 14.076 48.2513 14.4 46.7393 14.472L46.2353 12.672C47.9873 12.72 49.5593 13.032 50.9513 13.608C52.3433 14.184 53.4473 14.988 54.2633 16.02C55.0793 17.052 55.4873 18.276 55.4873 19.692C55.4873 20.988 55.2473 22.104 54.7673 23.04C54.2873 23.952 53.6393 24.708 52.8233 25.308C52.0073 25.884 51.0833 26.316 50.0513 26.604C49.0193 26.868 47.9513 27 46.8473 27H39.1073V0.971998H45.8033ZM46.5233 12.384C47.9633 12.384 49.0073 11.988 49.6553 11.196C50.3033 10.38 50.6273 9.396 50.6273 8.244C50.6273 6.876 50.2073 5.88 49.3673 5.256C48.5273 4.632 47.3993 4.32 45.9833 4.32H42.5993V12.384H46.5233ZM46.6673 23.76C47.6273 23.76 48.5033 23.616 49.2953 23.328C50.1113 23.04 50.7473 22.596 51.2033 21.996C51.6833 21.396 51.9233 20.64 51.9233 19.728C51.9233 18.72 51.6473 17.928 51.0953 17.352C50.5673 16.776 49.8833 16.368 49.0433 16.128C48.2033 15.864 47.3393 15.732 46.4513 15.732H42.5993V23.76H46.6673Z" fill="#BF9B61"/>
            <motion.path initial={{ x:20}} animate={{x:0}} transition={{duration:0.9, ease: "easeInOut"}} d="M3.744 27V0.143998H3.78L17.424 19.512L15.948 19.224L29.556 0.143998H29.628V27H26.172V8.064L26.388 9.828L16.56 23.724H16.488L6.516 9.828L7.128 8.208V27H3.744ZM43.8033 0.971998C46.4193 0.971998 48.4713 1.512 49.9593 2.592C51.4713 3.648 52.2273 5.304 52.2273 7.56C52.2273 8.928 51.9153 10.116 51.2913 11.124C50.6673 12.132 49.7913 12.924 48.6633 13.5C47.5593 14.076 46.2513 14.4 44.7393 14.472L44.2353 12.672C45.9873 12.72 47.5593 13.032 48.9513 13.608C50.3433 14.184 51.4473 14.988 52.2633 16.02C53.0793 17.052 53.4873 18.276 53.4873 19.692C53.4873 20.988 53.2473 22.104 52.7673 23.04C52.2873 23.952 51.6393 24.708 50.8233 25.308C50.0073 25.884 49.0833 26.316 48.0513 26.604C47.0193 26.868 45.9513 27 44.8473 27H37.1073V0.971998H43.8033ZM44.5233 12.384C45.9633 12.384 47.0073 11.988 47.6553 11.196C48.3033 10.38 48.6273 9.396 48.6273 8.244C48.6273 6.876 48.2073 5.88 47.3673 5.256C46.5273 4.632 45.3993 4.32 43.9833 4.32H40.5993V12.384H44.5233ZM44.6673 23.76C45.6273 23.76 46.5033 23.616 47.2953 23.328C48.1113 23.04 48.7473 22.596 49.2033 21.996C49.6833 21.396 49.9233 20.64 49.9233 19.728C49.9233 18.72 49.6473 17.928 49.0953 17.352C48.5673 16.776 47.8833 16.368 47.0433 16.128C46.2033 15.864 45.3393 15.732 44.4513 15.732H40.5993V23.76H44.6673Z" fill="white"/>
            </svg>
          </div>
          <div className='navbar'>
              <Link ><li>Accueil</li></Link>
              <Link to="about" smooth={true} duration={1000}><li>A propos</li></Link>
              <Link to="parcours" smooth={true} duration={1000}><li>Parcours</li></Link>
              <Link to="competences" smooth={true} duration={1000}><li>Comp??tences</li></Link>
              <Link to="services" smooth={true} duration={1000}><li>Services</li></Link>
              <Link to="realisations" smooth={true} duration={1000}><li>R??alisations</li></Link>
              <Link to="contact" smooth={true} duration={1000}><li>Contact</li></Link>
          </div>
          <div className='cv-cont'>
            <Link onClick={saveCV}><div className='cv-box'>CV</div></Link>
          </div>

        </div>
        <div className='head-contentI'>
          <h1 className='name-head'>
            KEVIN MBOUMBA
          </h1>
          <h3 className='met-head'>
              DEVELOPPEUR WEB
          </h3>
        </div>
        <div className='scroll-container'>
          <div className='scroll-button'></div>
        </div>
      </section>
      <section className='Head-mob'>
        <header className='navigation-mob'>
          <div className='logo-mob'>
          <svg width="72" height="63" viewBox="0 0 59 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path initial={{ x:-30}} animate={{x:0}} transition={{duration:0.9, ease: "easeInOut"}}  d="M5.744 27V0.143998H5.78L19.424 19.512L17.948 19.224L31.556 0.143998H31.628V27H28.172V8.064L28.388 9.828L18.56 23.724H18.488L8.516 9.828L9.128 8.208V27H5.744ZM45.8033 0.971998C48.4193 0.971998 50.4713 1.512 51.9593 2.592C53.4713 3.648 54.2273 5.304 54.2273 7.56C54.2273 8.928 53.9153 10.116 53.2913 11.124C52.6673 12.132 51.7913 12.924 50.6633 13.5C49.5593 14.076 48.2513 14.4 46.7393 14.472L46.2353 12.672C47.9873 12.72 49.5593 13.032 50.9513 13.608C52.3433 14.184 53.4473 14.988 54.2633 16.02C55.0793 17.052 55.4873 18.276 55.4873 19.692C55.4873 20.988 55.2473 22.104 54.7673 23.04C54.2873 23.952 53.6393 24.708 52.8233 25.308C52.0073 25.884 51.0833 26.316 50.0513 26.604C49.0193 26.868 47.9513 27 46.8473 27H39.1073V0.971998H45.8033ZM46.5233 12.384C47.9633 12.384 49.0073 11.988 49.6553 11.196C50.3033 10.38 50.6273 9.396 50.6273 8.244C50.6273 6.876 50.2073 5.88 49.3673 5.256C48.5273 4.632 47.3993 4.32 45.9833 4.32H42.5993V12.384H46.5233ZM46.6673 23.76C47.6273 23.76 48.5033 23.616 49.2953 23.328C50.1113 23.04 50.7473 22.596 51.2033 21.996C51.6833 21.396 51.9233 20.64 51.9233 19.728C51.9233 18.72 51.6473 17.928 51.0953 17.352C50.5673 16.776 49.8833 16.368 49.0433 16.128C48.2033 15.864 47.3393 15.732 46.4513 15.732H42.5993V23.76H46.6673Z" fill="#BF9B61"/>
            <motion.path initial={{ x:20}} animate={{x:0}} transition={{duration:0.9, ease: "easeInOut"}} d="M3.744 27V0.143998H3.78L17.424 19.512L15.948 19.224L29.556 0.143998H29.628V27H26.172V8.064L26.388 9.828L16.56 23.724H16.488L6.516 9.828L7.128 8.208V27H3.744ZM43.8033 0.971998C46.4193 0.971998 48.4713 1.512 49.9593 2.592C51.4713 3.648 52.2273 5.304 52.2273 7.56C52.2273 8.928 51.9153 10.116 51.2913 11.124C50.6673 12.132 49.7913 12.924 48.6633 13.5C47.5593 14.076 46.2513 14.4 44.7393 14.472L44.2353 12.672C45.9873 12.72 47.5593 13.032 48.9513 13.608C50.3433 14.184 51.4473 14.988 52.2633 16.02C53.0793 17.052 53.4873 18.276 53.4873 19.692C53.4873 20.988 53.2473 22.104 52.7673 23.04C52.2873 23.952 51.6393 24.708 50.8233 25.308C50.0073 25.884 49.0833 26.316 48.0513 26.604C47.0193 26.868 45.9513 27 44.8473 27H37.1073V0.971998H43.8033ZM44.5233 12.384C45.9633 12.384 47.0073 11.988 47.6553 11.196C48.3033 10.38 48.6273 9.396 48.6273 8.244C48.6273 6.876 48.2073 5.88 47.3673 5.256C46.5273 4.632 45.3993 4.32 43.9833 4.32H40.5993V12.384H44.5233ZM44.6673 23.76C45.6273 23.76 46.5033 23.616 47.2953 23.328C48.1113 23.04 48.7473 22.596 49.2033 21.996C49.6833 21.396 49.9233 20.64 49.9233 19.728C49.9233 18.72 49.6473 17.928 49.0953 17.352C48.5673 16.776 47.8833 16.368 47.0433 16.128C46.2033 15.864 45.3393 15.732 44.4513 15.732H40.5993V23.76H44.6673Z" fill="white"/>
            </svg>
          </div>
          <div className='hamburger'>
            <i class="bi bi-list"></i>
          </div>
        </header>
        <video className='video-mob' autoPlay loop muted>
          <source src={BackServ} type="video/mp4" /> 
        </video>
        
          <div className='head-content-mob'>
            <h1 className='name-head-mob'>
              KEVIN MBOUMBA
            </h1>
            <h3 className='met-head-mob'>
                DEVELOPPEUR WEB
            </h3>

            <div className='scroll-container-mob'>
              <div className='scroll-button-mob'></div>
          </div>
          </div>
      </section>

                        {/* Head mobile*/}

                             
    </div>
  );
}

export default Head;
