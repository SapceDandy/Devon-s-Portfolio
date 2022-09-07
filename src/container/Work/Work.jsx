import React, { useState, useEffect} from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import  {  motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Work.scss";
//import { FaFirstOrderAlt } from "react-icons/fa";

const Work = () => {
    const [ activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);

    useEffect(() => {
        const query = '*[_type == "works"]';

        client.fetch(query)
            .then((data) => {
                setWorks(data);
                setFilterWork(data);
            })
    }, [])

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y : 100, opacity : 0 }])

        setTimeout(() => {
            setAnimateCard([{ y : 0, opacity : 1 }])

            if (item === 'All' ) {
                setFilterWork(works);
            } else {
                setFilterWork(works.filter((work) => work.tags.includes(item)))
            }
        }, 500);
    }

    return (
        <>
            <h2 className = "head-text">
                Some of what I learned
                <span> In 6 Months</span>
            </h2>

            <div className = "app__work-filter">
                {['All', 'Project', 'Certificate', 'Video'].map((item, index) => (
                    <div
                        key = {index}
                        onClick = {() => handleWorkFilter(item)}
                        className = {`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                    >
                        {(item === "All") && (<span>{item}</span>)}
                        {(item !== "All") && (<span>{item}s</span>)}
                    </div>
                ))}
            </div>

            <motion.div
                animate = {animateCard}
                transition = {{ duration: 0.5, delayChildren: 0.5 }}
                className = "app__work-portfolio"
            >
                {filterWork.map((work, index) => (
                    <div className = "app__work-item app__flex" key = {index}>
                        <div className = "app__work-img app__flex">
                            <img src = {urlFor(work.imgUrl)} alt = {work.name} />
                            <motion.div
                                whileHover = {{opacity: [0, 1]}}
                                transition = {{ duration: .25, ease: 'easeInOut', staggerChildren: .5}}
                                className = "app__work-hover app__flex"
                            >
                                {console.log("P Link: ", !work?.projectLink)}
                                {!(!work?.projectLink) && (<a href={work?.projectLink} target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView = {{ scale: [0, 1]}}
                                        whileHover = {{ scale: [1, .9]}}
                                        transition = {{duration: .25}}
                                        className = "app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>)}
                                {(!(!work.codeLink)) && (<a href={work.codeLink} target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView = {{ scale: [0, 1]}}
                                        whileHover = {{ scale: [1, .9]}}
                                        transition = {{duration: .25}}
                                        className = "app__flex"
                                    >
                                        <AiFillGithub />
                                    </motion.div>
                                </a>)}
                            </motion.div>
                        </div>   

                        <div className = "app__work-content app__flex">
                            <h4 className = "bold-text">{work.title}</h4>
                            <p className = "p-text" style = {{marginTop: 10}}>{work.description}</p>
                            
                            <div className = "app__work-tag app__flex">
                                <p className = "p-text">{work.tags[0]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    )
}

export default AppWrap(Work, 'programing')