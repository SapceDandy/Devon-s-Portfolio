import React, { useState, useEffect } from "react";

import { images } from "../../../constants";
import {HiMenuAlt4, HiX} from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

import "./Navbar.scss";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [shouldShowActions, setShouldShowActions] = useState(true);
    const [lastYPos, setLastYPos] = useState(0);

    useEffect(() => {
        function handleScroll() {
        const yPos = window.scrollY;
        const isScrollingUp = yPos < lastYPos;

        setShouldShowActions(isScrollingUp);
        setLastYPos(yPos);
        }

        window.addEventListener('scroll', handleScroll, false);

        return () => {
        window.removeEventListener("scroll", handleScroll, false);
        };
    }, [lastYPos]);

    return (
        <nav style = {{ position: "fixed", zIndex: "1000"}}>
                <motion.div
                    animate = {{y: shouldShowActions ? 0 : -85}}
                    transition = {{duration: .5 , ease: "easeInOut"}}
                >
                    <div className = "app__navbar">
                        <div className = "app__navbar-logo">
                            <img src = {images.logo} alt = "logo"/>
                        </div>
                        <ul className = "app__navbar-links">
                            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                                <li key = {`link-${item}`} className = "app__flex p-text">
                                    <div />
                                    <a href = {`#${item}`}>{item}</a> 
                                </li>
                            ))}
                        </ul>
                        
                        <div className = "app__navbar-menu">
                            <HiMenuAlt4 onClick = {() => setToggle(true)}/>
                            
                            {toggle && (
                                    <motion.div 
                                        initial = {{x : 400}}
                                        whileInView = {{ x: 0}}
                                        transition = {{ duration: .85, ease: "easeOut"}}
                                    >
                                    <HiX onClick = {() => setToggle(false)}/>
                                    <ul>
                                        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                                        <li key = {`${item}`}>
                                            <a href = {`#${item}`} onClick = {() => setToggle(false)}>{item}</a> 
                                        </li>
                                        ))}
                                    </ul>
                                </motion.div>  
                            )}
                        </div>
                    </div>
                </motion.div>
        </nav>
    )
};

export default Navbar