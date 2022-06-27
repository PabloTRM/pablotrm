import React from 'react'
import {BsGithub, BsLinkedin} from "react-icons/bs";

const HeaderSocials= () => {
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/pablo-torres-rojano/">< BsLinkedin size={40} /></a>
            <a href="https://github.com/PabloTRM"><BsGithub size={40}/></a>
        </div>
    )

}
export default HeaderSocials
