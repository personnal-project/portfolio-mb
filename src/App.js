import React, {useState, useEffect} from "react";
import { motion } from 'framer-motion';
import Loader from './components/loader/Loader';
import Head from './components/head/Head';
import About from './components/about/About';
import Parcours from './components/parcours/Parcours';
import Competences from './components/competences/Competences';
import Services from './components/services/Services';
import Realisations from './components/realisations/Realisation';
import Footer from './components/footer/Footer';
import {BrowserRouter} from 'react-router-dom';
import './App.scss';


function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
          setLoading(false)
      }, 2000) 
  },[])

  
  return (
    <div className="App">
      {
        loading ? <Loader loading={loading} /> : 
        <BrowserRouter >
        <Head  />
        <About />
        <Parcours />
        <Competences />
        <Services />
        <Realisations />
        <Footer />
        </BrowserRouter>

      }
    </div>
  );
}

export default App;
