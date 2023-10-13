import React from 'react';
import './App.css'

import Card from './components/Card';
import Banner from './components/Accordion/Banner';
import Services from './components/Services';
import About from './components/About';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import Payroll from './components/Payroll';
import Source from './components/Source';
import Trusted from './components/Trusted';
import Contact from './components/Contact';
import Details from './components/Details';
import Head from './components/Head';


  
function App({header,text}) {

  return(
  <>
  <Head/>
  
  
  <Banner/>
  <Services/>
  <About/>
  <Benefits/>
  <Payroll/>
  <Source/>
  <Trusted/>
  <Details/>
  <Card/>
  <Contact/>
  <Footer/>

  <img src="./banner.png" alt="" />
  <img src="" alt="" />
  </>
  
);
}

export default App;
