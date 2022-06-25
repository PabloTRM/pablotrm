import React from 'react'
import {BsGithub, BsLinkedin} from "react-icons/bs";

const HeaderSocials= () => {
    return (
        <div className='header_socials'>
            <a href="https://linkedin.com" rel="noreferrer" target="_blank">< BsLinkedin size={40} /></a>
            <a href="https://github.com/PabloTRM" rel="noreferrer" target="_blank"><BsGithub size={40}/></a>
        </div>
    )

}
export default HeaderSocials
