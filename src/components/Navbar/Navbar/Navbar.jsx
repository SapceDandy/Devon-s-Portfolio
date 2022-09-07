import React, { useState, useEffect } from "react";

import { images } from "../../../constants";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { MdWork, MdContactMail } from "react-icons/md"
import { HiMenuAlt4 } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [shouldShowActions, setShouldShowActions] = useState(true);
    const [lastYPos, setLastYPos] = useState(0);
    const distance = {"welcome" : 50, "about": 100, "programing": 150, "experience": 200, "contact": 250}
    const icons = {"welcome" : <AiFillHome />, "about": <SiAboutdotme />, "programing": <BsFillFileEarmarkCodeFill />, "experience": <MdWork />, "contact": <MdContactMail />}

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
                initial = {{y: 0}}
                animate = {(!toggle) && ({y: shouldShowActions ? 0 : -85})}
                transition = {{duration: .5 , ease: "easeInOut"}}
            >
                <div className = "app__navbar">
                    <div className = "app__navbar-logo">
                        <img src = {images.logo} alt = "logo"/>
                    </div>
                    <ul className = "app__navbar-links">
                        {['welcome', 'about', 'programing', 'experience', 'contact'].map((item) => (
                            <li key = {`link-${item}`} className = "app__flex p-text">
                                <div />
                                <a href = {`#${item}`}>{item}</a> 
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
            <motion.div
                className = "app__navbar-menu"
                animate = {(!toggle) && ({y: shouldShowActions ? 0 : -85})}
                transition = {{duration: .5 , ease: "easeInOut"}}
                style = {{zIndex: 1000}}
            >
                <HiMenuAlt4 onClick = {() => setToggle(!toggle)}/>
            </motion.div>
            <div className = "app__navbar-menu-info">
                <div className = "navWrapper" style = {{zIndex: 900}}>
                    <div className = "mobileWrapper">
                        {['welcome', 'about', 'programing', 'experience', 'contact'].map((item) => (
                            <motion.div
                                key = {`${item}`}
                                animate = {(toggle) ? {y: [0, distance[item]]} : (({y: 0}) && ({y: shouldShowActions ? 0 : -85}))}
                                transition = {{duration: .5 , ease: "easeInOut"}}
                            >
                                    <a href = {`#${item}`}  onClick = {() => setToggle(false)}>{icons[item]}</a> 
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar