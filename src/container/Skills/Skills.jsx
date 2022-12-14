import React, { useState, useEffect, useRef} from "react";
import  {  motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import VanillaTilt from "vanilla-tilt";

import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Skills.scss";

const Skills = () => {
    const constraintsRef = useRef(null);
    const [skillsWidth, setSkillsWidth] = useState(0);
    const [experience, setExperience] = useState([])
    const [skills, setSkills] = useState([])

    useEffect(() => {
        setSkillsWidth(constraintsRef.current.clientWidth);
        const query = '*[_type == "experiences"]';
        const skillsQuery = '*[_type == "skills"]';

        client.fetch(query)
            .then((data) => {
                setExperience(data.sort((a, b) => parseInt(b.year) - parseInt(a.year)));
            })
            client.fetch(skillsQuery)
            .then((data) => {
                setSkills(data);
            })
    }, [])

    function Tilt(props) {
        const { options, ...rest } = props;
        const tilt = useRef(null);
      
        useEffect(() => {
          VanillaTilt.init(tilt.current, options);
        }, [options]);
      
        return <div ref={tilt} {...rest} />;
    }

    return (
        <>
            <h2 className = "head-text">
               Skills <span style = {{color: "white"}}>&</span> Experience 
            </h2>

            <div ref = {constraintsRef} className = "app__skills-container">
                <motion.div className = "app__skills-list">
                    {skills?.map((skill) => (
                        <div className = "app__skills-item app__flex">
                            {(skillsWidth > 450) && (<Tilt className = "tilt" options = {{ max: 80, perspective: 100, glare: true, "max-glare": .7, scale: "140%", easing: "cubic-bezier(.03,.98,.52,.99)"}}>
                                <div className = "app__flex">
                                    <img src = {urlFor(skill.icon)} alt = {skill.name}/>                               
                                </div>
                            </Tilt>)}
                            {(skillsWidth <= 450) && (<div className = "app__flex">
                                <img src = {urlFor(skill.icon)} alt = {skill.name}/>                               
                            </div>)}
                            <p className = "p-text">{skill.name}</p>
                        </div>
                    ))}
                </motion.div>

                <motion.div className = "app__skills-exp">
                    {experience?.map((experience) => (
                        <motion.div
                            whileInView = {(skillsWidth > 450) && ({ opacity: [0, 1]})}
                            transition = {{ duration: .5 }}
                            className = "app__skills-exp-item"
                            key = {experience.year}
                        >
                            <div className = "app__skills-exp-year">
                                <p className = "bold-text">
                                    {experience.year}
                                </p>
                            </div>

                            <motion.div
                                className = "app__skills-exp-works"
                            >
                                {experience?.works?.map((work) => (
                                    <>
                                        <motion.div
                                            style = {{marginBottom: "1rem"}}
                                            whileInView = {(skillsWidth > 450) && ({ opacity: [0, 1]})}
                                            transition = {{ duration: .5 }}
                                            className = "app__skills-exp-work"
                                            key = {work.name}
                                        >
                                            <h4 className = "bold-text">{work.name}</h4>
                                            <p className = "p-text">{work.company}</p>

                                            {work.desc}
                                        </motion.div>
                                    </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    )
}

export default AppWrap(Skills, "experience", "sectionBackground")