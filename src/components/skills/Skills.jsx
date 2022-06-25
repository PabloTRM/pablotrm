import React from 'react'
import './skills.css'
import {BsBootstrap, BsPatchCheckFill} from "react-icons/bs";
import {IoLogoIonic} from "react-icons/io";
import {SiAngular, SiCss3, SiJava, SiJavascript, SiMongodb, SiSwift, SiTypescript} from "react-icons/si";
import {ImHtmlFive} from "react-icons/im";
import {FaJava} from "react-icons/fa";
import {GrMysql} from "react-icons/gr";

const Skills = () => {
    return (
        <section id='skills'>
            <h2> Mis habilidades</h2>
            <div className="container skills_container">
                <div className="skills_frontend">

                    <h3>Frontend</h3>
                    <div className="skills_content">
                        <article className="skills_details">
                            <ImHtmlFive></ImHtmlFive>
                            <h4>HTML</h4>
                        </article>
                        <article className="skills_details">
                            <SiCss3></SiCss3>
                            <h4>CSS</h4>
                        </article>
                        <article className="skills_details">
                            <IoLogoIonic></IoLogoIonic>
                            <h4>Ionic</h4>
                        </article>
                        <article className="skills_details">
                            <BsBootstrap></BsBootstrap>
                            <h4>Bootstrap</h4>
                        </article>
                        <article className="skills_details">
                            <SiAngular></SiAngular>
                            <h4>Angular</h4>
                        </article>
                        <article className="skills_details">
                            <SiJavascript></SiJavascript>
                            <h4>JavaScript</h4>
                        </article>
                        <article className="skills_details">
                            <SiSwift></SiSwift>
                            <h4>Swift</h4>
                        </article>
                        <article className="skills_details">
                            <SiTypescript></SiTypescript>
                            <h4>TypeScript</h4>
                        </article>
                    </div>
                </div>

                <div className="skills_backend">
                    <h3>Backend</h3>
                    <div className="skills_content">
                        <article className="skills_details">
                            <FaJava></FaJava>
                            <h4>Java</h4>
                        </article>
                        <article className="skills_details">
                            <BsPatchCheckFill></BsPatchCheckFill>
                            <h4>C#</h4>
                        </article>
                        <article className="skills_details">
                            <GrMysql></GrMysql>
                            <h4>SQL</h4>
                        </article>
                        <article className="skills_details">
                            <SiMongodb></SiMongodb>
                            <h4>MongoDB</h4>
                        </article>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Skills
