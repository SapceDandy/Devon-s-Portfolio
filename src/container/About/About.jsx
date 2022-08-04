import React, { useState, useEffect} from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from '../../client';

import "./About.scss"

const About = () => {
    const [about, setAbout] = useState([]);
    useEffect(() => {
        const query = '*[_type == "abouts"]';
        client.fetch(query)
            .then((data) => {
                setAbout(data);
            })
    }, [])

    return (
        <>
        <h2 className = "head-text">
            I know that 
            <span> Good Design</span>
            <br />
            means
            <span> Good Business</span>
        </h2>

        <div className = "app__profiles">
            {about.map((about, index) => (
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
            ))}
        </div>
        </>
    )
}

export default AppWrap(About, "about");