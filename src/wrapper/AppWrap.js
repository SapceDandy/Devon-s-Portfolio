import {useRef, useState, useEffect} from 'react';
import { SocialMedia } from '../components';
import { motion } from 'framer-motion'

const AppWrap = (Component, idName, classNames) => function HOC(){

    return (
        <div id = {idName} className = {`app__container ${classNames}`}>
            <SocialMedia />
            <div className = "app__wrapper app__flex">
                <Component />   
            </div>
            {/*(classNames === "paralaxBackground") && (<div className = {classNames}></div>)*/}
        </div>
    )
}

export default AppWrap;