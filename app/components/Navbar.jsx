'use client'

import React, { useState } from 'react';
const tabs = ["Home","Goal", "About", "FAQ"];
import { motion } from "framer-motion";


const Navbar = () => {
  const [selected, setSelected] = useState(tabs[0]);
  


  return (
    <motion.div  className="z-[999] fixed left-1/2 translate-x-[-50%] px-4 py-14 flex items-center gap-8">
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
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-black"
          : "text-slate-400 hover:text-slate-300 hover:bg-slate-700"
      } text-4xl transition-colors px-5 py-1 rounded-md relative`}
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