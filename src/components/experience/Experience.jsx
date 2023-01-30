import React from 'react'
import './experience.css'
import visualLogo from '../../assets/visualLogo.png'
import ems from '../../assets/ems.jpeg'
import game from '../../assets/game.png'

const Experience = () => {
    return (
        <section id="experience">
            <h2>Experiencia profesional</h2>
            <div className="container jobs_container">
                <article className="jobs">
                    <div className="logoJobs">
                        <img src={visualLogo} alt="Job One"/>
                    </div>
                    <h4> Desarrollador front-end</h4>
                    <a href="https://visualnacert.com">
                        <h5 className="jobOneName">Visual Nacert</h5>
                    </a>
                    <div className="fecha">
                        marzo de 2022 - diciembre 2022
                    </div>
                </article>

                <article className="jobs">
                    <div className="logoJobs">
                        <img src={ems} alt="Job Two"/>
                    </div>
                    <h4> Técnico Emergencias Sanitarias</h4>
                    <a href="https://ambulancies.es/">
                        <h5 className="jobTwoName">EMS</h5>
                    </a>
                    <div className="fecha">
                        junio de 2017 - abril 2018
                    </div>
                </article>

                <article className="jobs">
                    <div className="logoGame">
                        <img src={game} alt="Job Three"/>
                    </div>
                    <h4> Dependiente </h4>
                    <a href="https://game.es/">
                        <h5 className="jobThreeName">GAME</h5>
                    </a>
                    <div className="fecha">
                        julio de 2018 - marzo 2022
                    </div>
                </article>
            </div>
        </section>
    )

}
export default Experience
