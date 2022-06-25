import React from 'react'
import './header.css'
import CTA from "./CTA";
import ME from "../../assets/me.png"
import HeaderSocials from "./HeaderSocials";
const Header= () => {
    return (
        <header>
            <section>

            <div className="container header_container">
                <h1> Pablo Torres Rojano</h1>
                <h4 className="text-light">Desarrollador de software</h4>
                <CTA />
                <div className="me">
                    <img src={ME} alt="me"/>
                </div>
                <HeaderSocials />
            </div>
            </section>
        </header>

    )

}
export default Header
