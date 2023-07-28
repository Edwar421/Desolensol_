import React from 'react'
import style from './Home.module.css'
import TarjetasGridDes from '../Tarjetas/TarjetasDestacados/CardDes';
import TarjetasGridNew from '../Tarjetas/TarjetasNuevos/CardNew';


const Home = () => {
    return (
        <div className={style.incio1}>
            
            <div className={style.imagenesContainer}>
                <img src="CollageHome.png" alt="CollageHome" className={style.imagen} />
            </div>
            <div>
                <h1 className={style.title}>DESTACADOS</h1>
            </div>
            <div>
                <TarjetasGridDes />
            </div>
            <div>
                <h1 className={style.title}>PRODUCTOS NUEVOS</h1>
            </div>
            <div>
                <TarjetasGridNew />
            </div>
        </div>
    )
}

export default Home;