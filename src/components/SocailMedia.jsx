import React from 'react';
import { BsTwitter, BsInstagram} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa'

const SocailMedia = () => {
    return (
        <div className = "app__social" style = {{zIndex: 5, position: "fixed", bottom: "0", left: "0"}}>
            <div>
                <BsTwitter />
            </div>
            <div>
                <BsInstagram />
            </div>
            <div>
                <FaFacebookF />
            </div>
        </div>
    )
}

export default SocailMedia