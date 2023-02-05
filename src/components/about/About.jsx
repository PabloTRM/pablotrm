import React from 'react'
import './about.css'

const About = () => {
    return (
        <section id='about'>
            <h2>Sobre mí</h2>

            <div className="pAboutMe">
                <p>¡Hola! Mi nombre es Pablo y soy desarrollador de software.</p>
                <p>
                    La tecnología es algo que realmente me apasiona y siento un gran compromiso en hacer un uso positivo
                    de mis conocimientos en este campo.
                    Cada día me emociona pensar en el impacto que puedo tener como desarrollador y cómo mis habilidades
                    pueden ayudar a resolver problemas y mejorar la sociedad.
                </p>
                <p>
                    Estoy altamente motivado y apasionado por aprender y crecer en el mundo del desarrollo web.

                    He tenido la oportunidad de colaborar con equipos de desarrollo y he aprendido sobre el trabajo en
                    equipo y la importancia de la comunicación efectiva.
                </p>
                <p>
                    He estudiado desarrollo de aplicaciones multiplataforma en el centro <a
                    href="https://cieep.com">Progresa.</a>
                </p>

            </div>
        </section>
    )
}
export default About

