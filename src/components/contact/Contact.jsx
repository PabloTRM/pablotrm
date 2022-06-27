import React from 'react'
import './contact.css'
import {MdOutlineEmail} from "react-icons/md";
import {BsTelephone} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contacto</h2>
            <div className="contact_options">
                        <a href="mailto:pablotorresrojano@gmail.com">
                            <div className="contact_option">
                                <MdOutlineEmail></MdOutlineEmail>
                                <h4>pablotorresrojano@gmail.com</h4>
                            </div>
                        </a>
                <a href="tel:+34691247670">
                    <div className="contact_option">
                        <BsTelephone></BsTelephone>
                        <h4>691247670</h4>
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/pablo-torres-rojano/">
                    <div className="contact_option">
                        <BsLinkedin></BsLinkedin>
                        <h4>Pablo Torres</h4>
                    </div>
                </a>
                </div>
        </section>
    )

}
export default Contact
