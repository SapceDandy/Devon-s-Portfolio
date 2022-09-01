import React from 'react';
import { NavigationDots, SocialMedia } from '../components';
import { motion } from 'framer-motion'

const AppWrap = (Component, idName, classNames) => function HOC(){
    return (
        <div id = {idName} className = {`app__container ${(classNames !== "paralaxBackground") ? classNames : null}`}>
            <SocialMedia />
            <div className = "app__wrapper app__flex">
                <Component />  
                {(classNames === "paralaxBackground") && (<div className = {classNames}></div>)}
                {/*<div className = "copyright">
                    <p className = "p-text">@2020 Devon</p>
                    <p className = "p-text">All rights reserved</p>
                </div>*/}
            </div>
        </div>
    )
}

export default AppWrap;