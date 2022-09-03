import {useState, useRef, useEffect} from "react";
import { motion } from "framer-motion";

const BackgroundEffect = () => {
    const constraintsRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        setHeaderHeight(constraintsRef.current.clientHeight);
    }, [])

    return (
        <div ref = {constraintsRef} className = "app__flex app__background-effect">
            <motion.div 
                animate = {{y : [240, (-headerHeight - 240)], opacity: [1, 0], rotate: 190}}
                transition = {{ duration: 8, ease:"easeOut", repeat: Infinity}}
            >
                <div className = "backGroundSquare small"></div>
            </motion.div>
            <motion.div 
                animate = {{y : [100, (-headerHeight - 100)], opacity: [1, 0], rotate: 180}}
                transition = {{ duration: 10, delay: 2, ease:"easeOut", repeat: Infinity}}
            >
                <div className = "backGroundSquare"></div>
            </motion.div>
            <motion.div 
                animate = {{y : [90, (-headerHeight - 90)], opacity: [1, 0], rotate: -120}}
                transition = {{ duration: 14, delay: 4, ease:"easeOut", repeat: Infinity}}
            >
                <div className = "backGroundSquare small"></div>
            </motion.div>
            <motion.div 
                animate = {{y : [240, (-headerHeight - 240)], opacity: [1, 0], rotate: 360}}
                transition = {{ duration: 8, delay: 2, ease:"easeOut", repeat: Infinity}}
            >
                <div className = "backGroundSquare small"></div>
            </motion.div>
            <motion.div 
                animate = {{y : [160, (-headerHeight - 160)], opacity: [1, 0], rotate: -90}}
                transition = {{ duration: 15, ease:"easeOut", repeat: Infinity}}
            >
                <div className = "backGroundSquare"></div>
            </motion.div>
            <motion.div 
                animate = {{y : [120, (-headerHeight - 120)], opacity: [1, 0], rotate: -240}}
                transition = {{ duration: 12, ease:"easeOut", repeat: Infinity}}
            >
                <div className = "backGroundSquare small"></div>
            </motion.div>
            <motion.div 
                animate = {{y : [240, (-headerHeight - 240)], opacity: [1, 0], rotate: 360}}
                transition = {{ duration: 8, delay: 2, ease:"easeOut", repeat: Infinity}}
            >
                <div className = "backGroundSquare"></div>
            </motion.div>
            <motion.div 
                animate = {{y : [160, (-headerHeight - 160)], opacity: [1, 0], rotate: -90}}
                transition = {{ duration: 15, delay: 4, ease:"easeOut", repeat: Infinity}}
            >
                <div className = "backGroundSquare small"></div>
            </motion.div>
            <motion.div 
                animate = {{y : [80, (-headerHeight - 80)], opacity: [1, 0], rotate: 40}}
                transition = {{ duration: 20, ease:"easeOut", repeat: Infinity}}
            >
                <div className = "backGroundSquare"></div>
            </motion.div>
            <motion.div 
                animate = {{y : [280, (-headerHeight - 280)], opacity: [1, 0], rotate: 40}}
                transition = {{ duration: 20, delay: 4, ease:"easeOut", repeat: Infinity}}
            >
                <div className = "backGroundSquare small"></div>
            </motion.div>
            <motion.div 
                animate = {{y : [160, (-headerHeight - 160)], opacity: [1, 0], rotate: -220}}
                transition = {{ duration: 14, ease:"easeOut", repeat: Infinity}}
            >
                <div className = "backGroundSquare small"></div>
            </motion.div>
            <motion.div 
                animate = {{y : [120, (-headerHeight - 120)], opacity: [1, 0], rotate: -240}}
                transition = {{ duration: 12, delay: 2, ease:"easeOut", repeat: Infinity}}
            >
                <div className = "backGroundSquare"></div>
            </motion.div>
            <motion.div 
                animate = {{y : [100, (-headerHeight - 100)], opacity: [1, 0], rotate: 180}}
                transition = {{ duration: 10, ease:"easeOut", repeat: Infinity}}
            >
                <div className = "backGroundSquare small"></div>
            </motion.div>
            <motion.div 
                animate = {{y : [80, (-headerHeight - 80)], opacity: [1, 0], rotate: 190}}
                transition = {{ duration: 8, delay: 2, ease:"easeOut", repeat: Infinity}}
            >
                <div className = "backGroundSquare"></div>
            </motion.div>
            <motion.div 
                animate = {{y : [160, (-headerHeight - 160)], opacity: [1, 0], rotate: -220}}
                transition = {{ duration: 14, delay: 4, ease:"easeOut", repeat: Infinity}}
            >
                <div className = "backGroundSquare"></div>
            </motion.div>
            <motion.div 
                animate = {{y : [90, (-headerHeight - 90)], opacity: [1, 0], rotate: -120}}
                transition = {{ duration: 14, ease:"easeOut", repeat: Infinity}}
            >
                <div className = "backGroundSquare"></div>
            </motion.div>   
        </div>
    )
}

export default BackgroundEffect;