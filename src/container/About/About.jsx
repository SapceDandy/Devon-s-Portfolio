import React, { useState, useEffect, useRef} from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from '../../client';

import "./About.scss"

const About = () => {
    const constraintsRef = useRef(null);
    const [move, setMove] = useState(0)
    const [about, setAbout] = useState([]);
    const [sectionWidth, setSectionWidth] = useState(0);

    useEffect(() => {
        setSectionWidth(constraintsRef.current.clientHeight);
        const query = '*[_type == "abouts"]';
        client.fetch(query)
            .then((data) => {
                setAbout(data);
            })
    }, [])

    const moveRight = () => {
        if (sectionWidth > 900) {
            setMove(move + 224);
        } else {
            setMove(move + 243.5);
        }
    }

    const moveLeft = () => {
        if (sectionWidth > 900) {
        setMove(move - 224);
        } else {
            setMove(move - 243.5);
        }
    }

    return (
        <>
            <h2 className = "head-text">
                Who Is<br /> <span> Devon Dudley</span>
            </h2>
            <div ref = {constraintsRef} className = "about__page">
                <button type = "button" className = "moveButton" onClick = {() => moveLeft()} disabled = {(move <= ((about.length * -224)) + (3 * 224))}>🡸</button>
                <div className = "app__profiles-wrapper" >
                    <div className = "app__profiles">
                        {about.map((about, index) => (
                            <motion.div
                                initial = {{x: 0}}
                                animate = {{x: move}}
                            >
                                <motion.div
                                    whileInView = {{ opacity: 1}}
                                    whileHover = {{ scale: 1.1 }}
                                    transition = {{ duration: .5, type: "tween"}}
                                    className = "app__profile-item"
                                    key = {about.title + index}
                                >
                                    <img src = {urlFor(about.imgUrl)} alt = {about.title}/>
                                    <h2 className = "bold-text" style = {{ marginTop: 20}}>{about.title}</h2>
                                    <h2 className = "p-text" style = {{ marginTop: 10}}>{about.description}</h2>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <button type = "button" className = "moveButton" onClick = {() => moveRight()} disabled = {(move >= 0)}>🡺</button>
                <div className = "phoneButtonWrapper">
                    <button type = "button" className = "moveButtonPhoneLeft" onClick = {() => moveLeft()} disabled = {(move <= ((about.length * -245) + (2 * 245)))}>Left</button>
                    <button type = "button" className = "moveButtonPhoneRight" onClick = {() => moveRight()} disabled = {(move >= 0)}>Right</button>
                </div>
            </div>
        </>
    )
}

export default AppWrap(About, "about me", "sectionBackground");