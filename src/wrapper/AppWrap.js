import React from 'react';
import { NavigationDots, SocialMedia } from '../components';
import { motion } from 'framer-motion'

const AppWrap = (Component, idName, classNames) => function HOC(){
    return (
        <div id = {idName} className = {`app__container ${classNames}`}>
            <SocialMedia />
            <div className = "app__wrapper app__flex">
                <Component />
                {/*<div className = "copyright">
                    <p className = "p-text">@2020 Devon</p>
                    <p className = "p-text">All rights reserved</p>
                </div>*/}
            </div>
            <motion.div
                initial = {{opacity: .4}}
                whileHover = {{opacity: 1}}
                transition = {{ duration: .5, ease: "easeInOut"}}
            >
                <NavigationDots active = {idName} />
            </motion.div>
        </div>
    )
}

export default AppWrap;