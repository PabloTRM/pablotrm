import React from 'react'
import './navigation.css'
import {AiOutlineHome, AiOutlineMessage} from "react-icons/ai";
import {useState} from "react";
import {BsBook} from "react-icons/bs";
import {IoPerson} from "react-icons/io5";
import {FaHeading} from "react-icons/fa";

const Navigation= () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
            <a href="#about" onClick={() =>setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><IoPerson/></a>
            <a href="#skills" onClick={() =>setActiveNav('#skills')} className={activeNav === '#skills' ? 'active': ''}><FaHeading/></a>
            <a href="#experience" onClick={() =>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BsBook/></a>
            <a href="#contact" onClick={() =>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><AiOutlineMessage/></a>
        </nav>
    )

}
export default Navigation
