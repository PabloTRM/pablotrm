import React from 'react'
import './experience.css'
import visualLogo from '../../assets/visualLogo.png'
import ems from '../../assets/ems.jpeg'
import game from '../../assets/game.png'
import asix from '../../assets/asix.png'

const Experience = () => {
    return (
        <section id="experience">
            <h2>Experiencia profesional</h2>
            <div className="container jobs_container">
                <article className="jobs">
                    <div className="logoJobs">
                        <img src={asix} alt="JobOne"/>
                    </div>
                    <h4> Desarrollador Angular</h4>
                    <a href="https://grupo-alonso.com/empresas/asix/">
                        <h5 className="jobOneName">Asix</h5>
                    </a>
                    <div className="fecha">
                        marzo 2023 - actualmente
                    </div>
                </article>
                <article className="jobs">
                    <div className="logoJobs">
                        <img src={visualLogo} alt="JobTwo"/>
                    </div>
                    <h4> Desarrollador front-end</h4>
                    <a href="https://visualnacert.com">
                        <h5 className="jobTwoName">Visual Nacert</h5>
                    </a>
                    <div className="fecha">
                        marzo 2022 - diciembre 2022
                    </div>
                </article>

                <article className="jobs">
                    <div className="logoJobs">
                        <img src={ems} alt="JobThree"/>
                    </div>
                    <h4> Técnico Emergencias Sanitarias</h4>
                    <a href="https://ambulancies.es/">
                        <h5 className="jobThreeName">EMS</h5>
                    </a>
                    <div className="fecha">
                        junio 2017 - abril 2018
                    </div>
                </article>

                <article className="jobs">
                    <div className="logoGame">
                        <img src={game} alt="JobFour"/>
                    </div>
                    <h4> Dependiente </h4>
                    <a href="https://game.es/">
                        <h5 className="jobFourName">GAME</h5>
                    </a>
                    <div className="fecha">
                        julio 2018 - marzo 2020
                    </div>
                </article>
            </div>
        </section>
    )

}
export default Experience
