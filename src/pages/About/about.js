import React from 'react';
import { motion } from 'framer-motion';

function About () {

    const pageVariants = {
        initial: {
          opacity: 0,
          x: "-100vw",
          scale: 0.8
        },
        in: {
          opacity: 1,
          x: 0,
          scale: 1
        },
        out: {
          opacity: 0,
          x: "100vw",
          scale: 1.2
        }
      };
      
      const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.5
      };
      
      const pageStyle = {
        position: "absolute"
      };
      
    return (
    <div>
        <motion.div
        style={pageStyle}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        >
           <h1> About </h1>
        </motion.div>
    </div>
    )
};

export default About;