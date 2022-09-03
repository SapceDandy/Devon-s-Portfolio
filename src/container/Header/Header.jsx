import React, { useEffect, useRef, useState } from "react";
import {Typewriter } from "react-simple-typewriter"
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";

import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

import "./Header.scss";

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
}



const Header = () => {
    const constraintsRef = useRef(null);
    const [headerWidth, setHeaderWidth] = useState(0);
    /*const yRef = useRef(.5);
    const xRef = useRef(.5);*/

    useEffect(() => {
        setHeaderWidth(constraintsRef.current.clientWidth);
    })
    
    return (
        <div className = "app__header app__flex" ref = {constraintsRef}>
            <div className = "headerCol">
                <motion.div 
                    animate = {{x : [-200, 0], opacity: [0, 1]}}
                    transition = {{ duration: .7, ease:"easeOut"}}
                    className = "app__header-info"
                >
                    <div className = "app__header-badge" style = {{ position: "relative", zIndex: "3" }}>
                        <div className = "badge-cmp app__flex">
                            <p className = "margin-p make-centered">Hello, my name is</p>
                            <div>
                                <motion.div
                                    whileInView = {{x : [-200, 0], opacity: [0, 1]}} 
                                    transition = {{ duration: 1.1, ease:"easeOut"}}
                                    className = "app__header-info"
                                >
                                    <h1 className = "head-text">
                                        <motion.div 
                                            whileInView = {{rotateZ: ["0deg", "-40deg", "50deg", "-20deg", "0deg"], overflow: "visible"}}
                                            transition = {{ delay: 2.3, duration: .5, ease:"easeOut"}}
                                            className = "app__header-info"
                                        >
                                            <div className="wave">👋</div>
                                        </motion.div> 
                                        Devon
                                    </h1>
                                </motion.div>
                            </div>

                            {(headerWidth > 350) && (<div>
                                <motion.div 
                                    whileInView = {{x : [-400, 0], opacity: [0, 1], overflow: "visible" }}
                                    transition = {{duration: 1, ease:"easeInOut"}}
                                    className = "app__header-info"
                                >
                                    <p className = "p-text" style = {{color: "black"}}>
                                        <Typewriter
                                            loop = {1}
                                            typeSpeed = {30}
                                            words = {["I am a 2020 graduate from Morehouse College transitioning into a software development role"]}
                                        />
                                    </p>
                                </motion.div>
                            </div>)}
                        </div>
                    </div>
                </motion.div>

                {(headerWidth >=1200) && (<motion.div
                    style = {{ position: "relative", zIndex: "4" }}
                    transition = {{duration: 3, ease:"easeInOut"}}
                    className = "app__header-circles"
                >
                    {[images.flutter, images.redux, images.sass].map((circle, index) => (
                    <motion.div 
                        drag
                        dragConstraints = {constraintsRef}
                        dragTransition={{
                            min: 0,
                            max: 100,
                            bounceDamping: 8
                        }}
                        /*whileDrag = {{[value]: 0}}
                        animate = {{ [value]: 1000 * Math.floor(Math.random() * 2) }}
                        transition = {{duration: 2, ease: "easeInOut", type: "just", stiffness: 1}}
                        onUpdate = {endlessMove}*/
                    >
                        
                        <Tilt className = "tilt" options = {{ max: 50, perspective: 300, glare: true, "max-glare": .7, scale: "140%", easing: "cubic-bezier(.03,.98,.52,.99)"}}
                        >
                            <div className = "circle-cmp app__flex" key = {`circle-${index}`}>
                                <img src = {circle} alt = "circle" />
                            </div>
                        </Tilt>
                    </ motion.div>
                    ))}  
                </motion.div>)}
            </div>

            <div className = "app__header-img">
                <motion.div
                    initial = {{ x: 0}}
                    whileInView = {{ y: [40,-60] }}
                    transition = {{ duration: .65, ease:"easeOut", yoyo: Infinity}}
                >
                    <img src = {images.profile} alt="Devon" />
                </motion.div>
            </div>
            

            {(headerWidth < 1200) && (<motion.div
                style = {{ position: "relative", zIndex: "4" }}
                transition = {{duration: 3, ease:"easeInOut"}}
                className = "app__header-circles"
            >
                {[images.flutter, images.redux, images.sass].map((circle, index) => (
                <motion.div 
                    drag
                    dragConstraints = {constraintsRef}
                    dragTransition={{
                        min: 0,
                        max: 100,
                        bounceDamping: 8
                    }}
                    /*whileDrag = {{[value]: 0}}
                    animate = {{ [value]: 1000 * Math.floor(Math.random() * 2) }}
                    transition = {{duration: 2, ease: "easeInOut", type: "just", stiffness: 1}}
                    onUpdate = {endlessMove}*/
                >
                    
                    <Tilt className = "tilt" options = {{ max: 50, perspective: 300, glare: true, "max-glare": .7, scale: "140%", easing: "cubic-bezier(.03,.98,.52,.99)"}} >
                        <div className = "circle-cmp app__flex" key = {`circle-${index}`}>
                            <img src = {circle} alt = "circle" />
                        </div>
                    </Tilt>
                </ motion.div>
                ))}  
            </motion.div>)}
        </div>
    )
}

export default AppWrap(Header, "home", "headerHeight")