import React from 'react';
import { motion } from 'framer-motion';
import './topheader.css';

function TopHeader() {
    return(
        <div className="social-links">
            <motion.div
            whileHover={{ scale:1.1 }}>
                <a>LinkedIn</a>
            </motion.div>
            <motion.div
            whileHover={{ scale:1.1 }}
            >
                <a>GitHub</a>
            </motion.div>
        </div>
    )
}

export default TopHeader;