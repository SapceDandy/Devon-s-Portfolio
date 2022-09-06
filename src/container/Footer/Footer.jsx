import { ImGithub } from 'react-icons/im';
import { BsLinkedin } from 'react-icons/bs';
import { BiBarChartAlt } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { images } from  "../../constants";
import JAM from "../../assets/jamstack.png";
import Matter from "../Matter/Matter";

import "./Footer.scss";

const Footer = () => {

    return (
        <>
            <div className = "app__footer">
                <div className = "footerSections app__footer-logo">
                    <img src = {images.logo} alt = "logo"/>
                </div>
                <div className = "footerSections footer__links">
                    {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                        <li key = {`link-${item}`} className = "app__flex p-text">
                            <div />
                            <a href = {`#${item}`}>{item}</a> 
                        </li>
                    ))}
                </div>
                <div className = "footerSections devonInfo">
                    <a href = "tel:5125421275"><AiFillPhone /></a>
                    <a href = "mailto:devon.anthony.dudley@gmail.com?"><MdEmail /></a>
                    <a href = "https://jamstack.org/what-is-jamstack/" target = "_blank" rel = "noreferrer"><img src = {JAM} alt = "JAM" /></a>
                </div>
                
                <div className = "footerBackgroundCover">{/*<Matter />*/}</div>
            </div>
            <div className = "socails">
                <a href = "https://www.linkedin.com/in/devon-dudley-208975124/" target = "_blank" rel = "noreferrer">
                    <div>
                        <BsLinkedin />
                    </div>
                </a>
                <a href = "https://devonportfolioproject.vercel.app/" target = "_blank" rel = "noreferrer">
                    <div>
                        <BiBarChartAlt />
                    </div>
                </a>
                <a href = "https://github.com/SapceDandy" target = "_blank" rel = "noreferrer">
                    <div>
                        <ImGithub />
                    </div>
                </a>
            </div>
        </>
    )
}

export default Footer