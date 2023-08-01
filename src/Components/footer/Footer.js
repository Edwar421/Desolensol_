import React from 'react'
import style from './Footer.module.css'
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div>
                <div>
                    <p className={style.paragraf}>Politica de envios</p>
                </div>
            </div>
            <div>
                <p className={style.paragraf}>Derechos de autor &copy; 2023. Todos los derechos reservados.</p>
            </div>

            <div>   
                <div>
                    <p className={style.paragraf}>Contactanos</p>
                </div>
                <div className={style.options}>
                    <a href="https://wa.me/qr/HCEWBHSWZSVUH1" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className={style.icon} />
                    </a>

                    <a href="https://www.facebook.com/tu_pagina" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className={style.icon} />
                    </a>

                    <a href="https://instagram.com/desolensol_?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={style.icon} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer