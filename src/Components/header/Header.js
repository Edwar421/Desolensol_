import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Header.module.css";

const Header = () => {
    return (
        <div className={style.header}>
            <div>
                <img src="Logo.png" alt="Logo" className={style.logo} />
            </div>
            <div>
                <h1 className={style.title}>DE SOL EN SOL</h1>
            </div>
            <div className={style.options}>
                <nav>
                    <Link to="">Inicio</Link>
                    <Link to="/ropa">Ropa</Link>
                    <Link to="/maquillaje">Maquillaje</Link>
                    <Link to="/accesorios">Accesorios</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;
