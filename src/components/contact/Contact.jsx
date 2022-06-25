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

                <a href="https://linkedin.com" target="_blank">
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
