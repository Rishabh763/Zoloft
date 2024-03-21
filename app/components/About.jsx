"use client"
import React from 'react'
import { useRef , useEffect,useState } from "react";
import { useMotionValue, motion,  useTransform, animate, useInView} from "framer-motion";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";



function About() {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const [percent1, setPercent1] = useState(0);
    const [value1, setValue1] = useState(0);
    const [percent2, setPercent2] = useState(0);
    const [value2, setValue2] = useState(0);
    const [percent3, setPercent3] = useState(0);
    const [value3, setValue3] = useState(0);
  
    

    useEffect(() => {

        if(isInView){setInterval(() => {
          setValue1((val) => val + 0.1);
          setValue2((val) => val + 0.1);
          setValue3((val) => val + 0.1);
        }, 80);}
    
        setPercent1(Math.min(Math.max(value1, 0), 65));
        setPercent2(Math.min(Math.max(value2, 0), 105));
        setPercent3(Math.min(Math.max(value3, 0), 35));
        
      }, [value1,value2,value3,isInView]);

      const cards =[
        {
            "id":1,
            "image":{
                "png":"/assets/rishabh.jpeg"
            },
            "name":"Rishabh Singh"
        },
        {
            "id":2,
            "image":{
                "png":"/assets/shekhar.jpeg"
            },
            "name":"Singh Shkehar"
        },
        {
            "id":3,
            "image":{
                "png":"/assets/appeksha.jpeg"
            },
            "name":"Appeksha Suryawanshi"
        },
        {
            "id":4,
            "image":{
                "png":"/assets/mandar.jpeg"
            },
            "name": "Mandar Parkar"
            
        }
    ]

  return (
    <div id='aboutus' className='bg-white min-h-[100vh] text-black'>
        <div className="left max-w-4xl flex flex-col items-center gap-8">
            <p >We’re here to help you Finding Appropriate specialists for your care We're making it easy forIndividuals to find specialist10,000+ People have used zoloft to find Millions of Specialist and 100+ Resources</p>
            <div ref={ref} className="stats flex  gap-4 text-4xl overflow-hidden ">
                <motion.h2 initial={{opacity:0 ,y: "100%" }} whileInView={{opacity:1 , y : "0"}} transition={{ ease: "easeOut", duration: 0.5 }}>{percent1.toFixed()}k+</motion.h2>
                <motion.h2 initial={{opacity:0 ,y: "100%" }} whileInView={{opacity:1 , y : "0"}} transition={{ ease: "easeOut", duration: 0.5 }}>{percent2.toFixed()}k+</motion.h2>
                <motion.h2 initial={{opacity:0 ,y: "100%" }} whileInView={{opacity:1 , y : "0"}} transition={{ ease: "easeOut", duration: 0.5 }}>{percent3.toFixed()}k+</motion.h2>

            </div>
        </div>
        <div className="right flex gap-14  flex-wrap items-start">
        {
        cards.map( (card) =>{ 
            return  (<div className="card" key={card.id}>
              <img src={card.image.png} className='' alt={`${card.name}`}/>
              <h1>{card.name}</h1>
              <div className='social-links flex gap-3 scale-125'>
                <RiInstagramFill />
                <FaLinkedin />
                <FaFacebook />
              
                
              </div>

            </div>)
        })
        
    }
        </div>

    </div>
  )
}

export default About