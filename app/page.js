'use client'

import React from 'react'
import { Home } from './components/Home'
import About from './components/About'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { motion } from "framer-motion";
import Findings from './components/Findings'
import Whyus from './components/Whyus'



function page() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })




  return (
    <ReactLenis root >
        {/* <motion.div animate={{ y: "-100%" }} transition={{delay : 2.5}} className="loader">
          <h1>WELCOME</h1>
          <h1>TO</h1>
          <h1>ZOLOFT</h1>
        </motion.div> */}
    
      <Home/>
      <Findings/>
      
      <Whyus/>
      <About/>
    </ReactLenis>
  )
}

export default page