'use client'

import React, { useState } from 'react';
const tabs = ["Home","Findings", "Why us", "About"];
import { motion } from "framer-motion";


const Navbar = () => {
  const [selected, setSelected] = useState(tabs[0]);
  


  return (
    <motion.div  className="z-[999] fixed top-8 left-1/2 translate-x-[-50%] bg-black/60 px-4 py-3 rounded-lg flex items-center gap-8">
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </motion.div>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
}) => {
    const handleClick = (event) => {
      event.preventDefault(); // Prevent default button behavior
      setSelected(text);
      if (text === 'About') {
        const aboutSection = document.getElementById('aboutus');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
      if (text === 'Home') {
        const aboutSection = document.getElementById('home');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
      if (text === 'Why us') {
        const aboutSection = document.getElementById('whyus');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
      if (text === 'Findings') {
        const aboutSection = document.getElementById('findings');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
  return (
    <button
      onClick={handleClick}
    //   onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-black"
          : "text-slate-400 hover:text-slate-300 hover:bg-slate-700"
      } text-2xl transition-colors px-5 py-1 rounded-md relative whitespace-nowrap`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};


export default Navbar