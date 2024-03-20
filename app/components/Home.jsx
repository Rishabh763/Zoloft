'use client'

import React from 'react'
import { useMotionValue, motion, useMotionTemplate, animate} from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FiArrowRight } from "react-icons/fi";
import { useEffect } from "react";
import Navbar from './Navbar';

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF","#9122ff"];

export const Home = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #fff 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <div>
        
      <motion.section
        style={{
          backgroundImage,
        }}
        className="relative text-black grid min-h-[100vh] place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
      >
        <Navbar className="z-10"></Navbar>
        <button className='sign'>sign up</button>
        <div className="relative z-10 flex flex-col items-center gap-4">
          <h1 className="max-w-5xl bg-gradient-to-br from-black to-gray-400 bg-clip-text text-center text-3xl font-bold leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          Empower Your Mind, Embrace Your Wellness
          </h1>
          <p className="my-6 max-w-7xl text-black text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          Mental health refers to a person's psychological, emotional, and social well-being. It encompasses how individuals think, feel, and behave, as well as how they handle stress, relate to others, and make choices.Good mental health is essential for overall well-being and enables us to cope with life's challenges effectively.It's important to prioritize mental health through self-care, seeking help when needed"
          </p>
          <motion.button
            style={{
              border,
              boxShadow,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className="group text-lg relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950 px-6 py-4 text-white transition-colors hover:bg-gray-950/90"
          >
            Know Your Status
            <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </motion.button>
        </div>
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </motion.section>
    </div>
  );
};