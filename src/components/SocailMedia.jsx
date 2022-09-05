import { ImGithub } from 'react-icons/im';
import { BsLinkedin } from 'react-icons/bs';
import { BiBarChartAlt } from "react-icons/bi";

const SocailMedia = () => {
    return (
        <div className = "app__social">
            <a href = "https://github.com/SapceDandy" target = "_blank" rel = "noreferrer">
                <div>
                    <ImGithub />
                </div>
            </a>
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
        </div>
    )
}

export default SocailMedia