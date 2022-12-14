import React from 'react'
import './experience.css'
import VISUALLOGO from '../../assets/visualLogo.png'

const Experience= () => {
    return (
        <section id="experience">
            <h2>Experiencia profesional</h2>
            <div className="container jobs_container">
                <article className="jobs">
                    <div className="logoVisual">
                        <img src={VISUALLOGO} alt="Job One"/>
                    </div>
                    <h4 className="marketStallOne"> Desarrollador front-end</h4>
                    <a href="https://visualnacert.com">
                        <h5 className="jobOneName">Visual Nacert</h5>
                    </a>
                    <div className="fecha">
                    marzo de 2022 - diciembre 2022
                        </div>
                </article>
            </div>
        </section>
    )

}
export default Experience
